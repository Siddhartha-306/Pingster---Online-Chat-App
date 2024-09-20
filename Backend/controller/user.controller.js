import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenAndSaveCookie from "../jwt/generateToken.js";

export const signup = async (req, res) => {
    
    //parsing the data that comes from the req's body
    const {fullname, email, password, confirmPassword} = req.body;

    try{
        //check if all the fields are filled or not
        if(!fullname || !email || !password || !confirmPassword)
        {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        //if password and confirmPassword donot match
        if(password != confirmPassword)
        {
            return res.status(400).json({
                error: "Password ans Confirm Password do not match."
            });
        }

        const user = await User.findOne({email});

        if(user)
        {
            return res.status(400).json({error : "User already registered"});
        }

        //hash the password
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await new User({
            fullname, 
            email,
            password: hashedPass,
        });
        await newUser.save();

        if(newUser){
            createTokenAndSaveCookie(newUser._id, res);
            res.status(201).json({message: "User created successfully", user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email
            }});
        }
    }
    catch(err){
        res.status(500).json({
            message: "Internal Server Error",
        });
        console.log(err);
    }
}



//login controller

export const login = async (req, res) => {

    //destructure the data coming from the req's body
    const {email, password} = req.body;
    
    try {
        //check if any field is empty or not, if empty, return the response
        if(!email || !password)
        {
            return res.status(400).json({
                message: "All fields are required."
            });
        }

        //check if user with the entered email is present in db or not
        const user = await User.findOne({email});
        
        if(!user)
        {
            return res.status(400).json({
                message: "User not found",
            });
        }

        //if user is present, now check the password entered is same as that of present in db
        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched)
        {
            return res.status(400).json({
                message: "Password entered is incorrect.",
            });
        }
        createTokenAndSaveCookie(user._id, res);
        res.status(200).json({
            message: "User logged in successfully",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};



//logout controller

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({
            message: "User logged out successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};



