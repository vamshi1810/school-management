import React, { useState } from "react";

import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setLoginFormData((prv) => ({
      ...prv,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginFormData.email,
        loginFormData.password
      ).then((data)=>{
        console.log(data.user.email)
        localStorage.setItem('token',data.user.accessToken)
        localStorage.setItem('user',data.user.email)
        
        
        
      })
      navigate("/app/home");
    } catch (error) {
      setError("email or password incorrect");
      console.log(error);
    }
  };

  return (
    <div className=" mx-auto w-1/4 flex flex-col items-center justify-center gap-2  ">
      <img src={logo} className="w-28"></img>
      <form
        class=" mx-auto p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 w-80 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your email"
            value={loginFormData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            value={loginFormData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            class="text-white m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
