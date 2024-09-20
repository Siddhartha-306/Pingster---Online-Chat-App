import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_TOKEN, {
        expiresIn: "10d",
    });
    res.cookie("jwt", token, {
        httpOnly: true,  //for securing from xss attacks
        secure: true,
        sameSite: "strict"  //csrf attacks
    });
}

export default createTokenAndSaveCookie;