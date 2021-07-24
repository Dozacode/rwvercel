import React, { useState } from 'react'

const Login = () => {
  return (
    <div className="h-screen font-sans login bg-cover content-center justify-center items-center">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center border-black">
        <div className="w-full max-w-lg border-black">
          <div className="leading-loose border-black">
            <form className="border-black max-w-sm m-4 p-10 bg-grey-900  rounded shadow-xl">
              <p className="text-black font-medium text-center text-lg font-bold">
                LOGIN
              </p>
              <div className="">
                <label className="block text-sm text-white" htmlFor="email">
                  E-mail
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="email"
                  id="email"
                  placeholder="Enter E-mail"
                  aria-label="email"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">Password</label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  arial-label="password"
                  required
                />
              </div>

              <div className="mt-4  text-center">
                <button
                  className="  px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <div className="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
