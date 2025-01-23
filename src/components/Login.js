import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate.js";
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () =>{
    //validate the form data 
    
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    //Sign In/Sign Up

  }

  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_medium.jpg"
          alt="background_img"
        />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">
          {errorMessage}
        </p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg " onClick={handleButtonClick}>
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {IsSignInForm
            ? "New to Netflix? Sign Up Now "
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
