import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white px-4">
      <div className="relative w-full max-w-md p-6 rounded-lg shadow-lg bg-white dark:bg-slate-800">
        {/* ❌ Close Button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-xl"
          onClick={() => navigate("/")}
          aria-label="Close signup form"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="font-bold text-2xl text-center mt-6">Create an Account 👤</h3>
        <p className="text-sm text-center text-gray-500 dark:text-gray-300 mb-6">
          Sign up to get started
        </p>

        {/* Signup Form */}
        <form className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
                bg-white dark:bg-slate-700 
                text-black dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400 
                border-gray-300 dark:border-gray-600 
                focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
                bg-white dark:bg-slate-700 
                text-black dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400 
                border-gray-300 dark:border-gray-600 
                focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
                bg-white dark:bg-slate-700 
                text-black dark:text-white 
                placeholder-gray-500 dark:placeholder-gray-400 
                border-gray-300 dark:border-gray-600 
                focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {/* Action */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-md transition duration-300"
            >
              Sign Up
            </button>
            <p className="text-sm">
              Already registered?{' '}
              <button
                to="/"
                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              
                onClick={()=>
                    document.getElementById("my_modal_3").showModal()
                }>
                Login here
              </button>
              <Login/>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
