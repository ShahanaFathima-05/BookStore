import React, { useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5"
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Auth() {

  const [authStatus, setauthStatus] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="w-full min-h-screen bg-[url('https://img.magnific.com/free-photo/anime-style-cozy-home-interior-with-furnishings_23-2151176468.jpg?w=360')] bg-no-repeat bg-cover bg-center">

      <div className="flex flex-col items-center justify-center min-h-screen">

        <h1 className="text-white text-4xl font-bold mb-6">
          BookStore
        </h1>

        <div className="bg-black/80 p-8 md:p-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-white rounded-xl">

          <div className="flex flex-col items-center">

            <IoPersonCircleSharp className="text-8xl" />

            {
              authStatus ?
                <h1 className="text-2xl font-bold mb-5">
                  Register
                </h1>
                :
                <h1 className="text-2xl font-bold mb-5">
                  Login
                </h1>
            }

            <form
              onSubmit={formik.handleSubmit} className="w-full">


              <input type="email" placeholder="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="w-full bg-white text-black rounded-2xl p-3 mb-1 outline-none"/>

              {
                formik.touched.email && formik.errors.email &&
                <div className="text-red-500 text-sm mb-3">{formik.errors.email}</div>
              }


             

              {
                authStatus &&
                <>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className="w-full bg-white text-black rounded-2xl p-3 mb-1 outline-none"
                  />

                  {
                    formik.touched.username && formik.errors.username &&
                    <div className="text-red-500 text-sm mb-3">
                      {formik.errors.username}
                    </div>
                  }
                </>
              }


              {/* Password */}

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full bg-white text-black rounded-2xl p-3 mb-1 outline-none"
              />

              {
                formik.touched.password && formik.errors.password &&
                <div className="text-red-500 text-sm mb-3">
                  {formik.errors.password}
                </div>
              }


              {/* Forgot password */}

              <div className="w-full flex flex-col sm:flex-row justify-between gap-2 mb-4 text-sm">

                <p className="text-yellow-500">
                  Don't share password with others
                </p>

                <p className="text-blue-500 underline cursor-pointer">
                  Forgot password
                </p>

              </div>


              {/* Submit button */}

              {
                authStatus ?
                  <button
                    type="submit"
                    className="w-full p-3 rounded-2xl bg-green-600 hover:bg-green-700 font-bold"
                  >
                    Register
                  </button>
                  :
                  <button
                    type="submit"
                    className="w-full p-3 rounded-2xl bg-green-600 hover:bg-green-700 font-bold"
                  >
                    Login
                  </button>
              }

            </form>


            {/* Change Login/Register */}

            <p className="mt-4">

              {
                authStatus ?
                  <span>Already a User</span>
                  :
                  <span>Are you new?</span>
              }

              {
                authStatus ?
                  <span
                    className="text-blue-500 underline cursor-pointer ml-1"
                    onClick={() => setauthStatus(!authStatus)}
                  >
                    Login
                  </span>
                  :
                  <span
                    className="text-blue-500 underline cursor-pointer ml-1"
                    onClick={() => setauthStatus(!authStatus)}
                  >
                    Register
                  </span>
              }

            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Auth