import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from '../context/Authprovider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import Link from "react-router-dom";

const Login = () => {

    const [authUser, setAuthUser] = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        await axios.post("/api/user/login", userInfo).then((response) => {
            // console.log(response.data);
            if(response.data)
            {
                toast.success("Logged In successfully");
            }
            localStorage.setItem("PingSter", JSON.stringify(response.data));
            setAuthUser(response.data);
        })
        .catch((error) => {
            console.log(error.response.data);
            if(error.response)
            {
                toast.error(error.response.data.message);
            }
        });
    };

  return (
    <>
     <div className='flex flex-col justify-center items-center h-screen w-full bg-slate-900 text-white'>
        <div className='border-2 border-gray-300 p-8 rounded-md w-96'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl font-bold text-gray-200 text-center'>Ping<span className='text-green-400'>Ster</span></h1>
                <h2 className='font-bold text-lg my-4 text-gray-100'>LogIn</h2>

                {/* email */}
                <label className="flex h-[50px] text-lg mt-3 rounded-md p-2 border border-gray-300 items-center bg-slate-900 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" className="grow outline-none text-gray-300 bg-slate-900" placeholder="Email" {...register("email", { required: true })} />
                </label>
                {errors.email && <span className='text-red-600 text-sm'>*This field is required</span>}

                {/* password */}
                <label className="flex h-[50px] text-lg mt-3 rounded-md p-2 border border-gray-300 items-center bg-slate-900 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input type="password" className="grow text-gray-300 outline-none bg-slate-900" placeholder='Password' {...register("password", { required: true })} />
                </label>
                {errors.password && <span className='text-red-600 text-sm'>*This field is required</span>}

                {/* link and button */}
                <div className='flex flex-col text-sm justify-between items-center mt-4 lg:flex-row space-y-4 lg:space-y-0'>
                    <p>
                        Don't have an account? 
                        <Link to={"/signup"} className='text-blue-500 cursor-pointer'> SignUp</Link>
                    </p>
                    <button type='submit' value="Login" className='bg-green-700 px-4 py-2 md:px-5 md:py-2 rounded-md font-semibold hover:scale-95 transition-all duration-300 hover:bg-green-800'>
                        LogIn
                    </button>
                </div>
            </form>
        </div>
     </div>
    </>
  )
}

export default Login