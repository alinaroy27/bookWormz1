import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>

        {/* Title & Subtext */}
        <h3 className="font-bold text-2xl text-center">Welcome Back 👋</h3>
        <p className="text-sm text-center text-gray-500 dark:text-gray-300 mb-6">
          Please enter your credentials to login
        </p>

        {/* Login Form */}
        <form className="space-y-5">
          {/* Email */}
          {/* Email */}
<div className="space-y-1">
  <label className="block  font-medium text-gray-500 dark:text-gray-300 text-xl">
  Email
</label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-2 border rounded-md shadow-sm 
      bg-white dark:bg-slate-800 
      text-black dark:text-white 
      placeholder-gray-500 dark:placeholder-gray-400 
      border-gray-300 dark:border-gray-600 
      focus:outline-none focus:ring-2 focus:ring-pink-500"
  />
</div>

{/* Password */}
<div className="space-y-1 mt-4">
  <label className="block  font-medium text-gray-500 dark:text-gray-300 text-xl">
    Password
  </label>
  <input
    type="password"
    placeholder="••••••••"
    className="w-full px-4 py-2 border rounded-md shadow-sm 
      bg-white dark:bg-slate-800 
      text-black dark:text-white 
      placeholder-gray-500 dark:placeholder-gray-400 
      border-gray-300 dark:border-gray-600 
      focus:outline-none focus:ring-2 focus:ring-pink-500"
  />
</div>


          {/* Actions */}
          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-md transition duration-300"
            >
              Login
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <Link to ="/signup" className="text-blue-500 underline cursor-pointer hover:text-blue-700">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  )
}

export default Login
