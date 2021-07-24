import React, { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }
  return (
    <div className="h-screen font-sans login bg-cover content-center justify-center items-center">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center border-black">
        <div className="w-full max-w-lg border-black">
          <div className="leading-loose border-black">
            <form className="border-black max-w-sm m-4 p-10 bg-grey-900  rounded shadow-xl">
              <p className="text-black font-medium text-center text-lg font-bold">
                Signup
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-4  text-center">
                <button
                  className="  mr-8 bg-black active:bg-gray-900 focus:outline-none text-white shadow rounded px-4 py-1 	"
                  disabled={
                    (!email.length || !password.length) && !isAuthenticated
                  }
                  onClick={async () => {
                    if (!isAuthenticated && email.length) {
                      try {
                        await logIn({ email, password })
                        resetForm()
                      } catch (e) {
                        console.log(e)
                        const supabaseError = JSON.parse(e.message)
                        alert(supabaseError.error_description)
                      }
                    } else {
                      await logOut()
                    }
                  }}
                >
                  {' '}
                  {isAuthenticated ? 'Log Out' : 'Log In'}
                </button>

                {!isAuthenticated && (
                  <button
                    className="mt-8 bg-black active:bg-gray-900 focus:outline-none text-white shadow rounded px-4 py-1"
                    disabled={
                      (!email.length || !password.length) && !isAuthenticated
                    }
                    onClick={async () => {
                      if (!isAuthenticated && email.length && password.length) {
                        try {
                          await signUp({ email, password })

                          resetForm()
                        } catch (e) {
                          const supabaseError = JSON.parse(e.message)
                          alert(supabaseError.msg)
                          console.log(e)
                        }
                      }
                    }}
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <div className="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
