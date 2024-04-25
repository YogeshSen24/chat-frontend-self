import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const [data , setData] = useState({})
  const handleChange = (e) =>{
    e.preventDefault()
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "https://mean-chat-app-backend.onrender.com/api/v1/auth/login";
    // console.log("Request URL:", url); // Log the request URL
    try {
      const res = await axios.post(url, data);
      console.log(res.data); // Log the response data
        // Handle success
        console.log(res)
        navigate("/")
        
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  };
  
  return (
    <div className='relative h-screen'>
       <h2 class="text-gray-900 text-3xl font-bold text-center my-5">Log in to your acount</h2>
      <div class="w-full h-full p-4 bg-white border border-gray-200 rounded-t-3xl shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="#">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={handleChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div>
          <button onClick={handleLogin} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/signup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login