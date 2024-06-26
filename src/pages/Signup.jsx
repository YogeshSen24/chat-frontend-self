import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie';

const Signup = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const [data , setData] = useState({})
  const handleChange = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleLogin = async() =>{
    e.preventDefault();
    const url = "https://mean-chat-app-backend.onrender.com/api/v1/auth/signup"
    try {
      const res = await axios.post(url, data);
      console.log(res.data); // Log the response data
      setCookie('token', res.data.token, { path: '/' });
      navigate("/")
        
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  }
  return (
    <div className='relative h-screen'>
       <h2 className="text-gray-900 text-3xl font-bold text-center my-5">Log in to your acount</h2>
      <div className="w-full h-full p-4 bg-white border border-gray-200 rounded-t-3xl shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <div>
            <label htmlhtmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlhtmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <button onClick={handleLogin} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup