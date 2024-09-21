import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RightPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/Authprovider'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <ToastContainer />

      <Routes>
        
          <Route path='/' element={ 
            authUser? <div className='flex h-screen'>
              <Left />
              <Right />
            </div> : (<Navigate to={"/login"} />)} />

          <Route path='/login' element={ authUser ? <Navigate to={"/"}/> : <Login />} />

          <Route path='/signup' element={ authUser ? <Navigate to={"/"}/> : <Signup />} />

      </Routes>
    </>
  );
}

export default App
