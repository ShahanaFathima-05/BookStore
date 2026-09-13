
import React from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from 'react';

function Auth() {
  
  const [authStatus,setauthStatus]=useState(false)

  return (
    <div className="w-full min-h-screen bg-[url('https://img.magnific.com/free-photo/anime-style-cozy-home-interior-with-furnishings_23-2151176468.jpg?w=360')] bg-no-repeat bg-cover bg-center">

      <div className="flex flex-col items-center justify-center min-h-screen">

        <h1 className="text-white text-4xl font-bold mb-6">BookStore</h1>

        <div className="bg-black/80 p-8 md:p-10 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-white rounded-xl">
          <div className="flex flex-col items-center">
            <IoPersonCircleSharp className="text-8xl" />
            {
              authStatus ?
              <h1 className="text-2xl font-bold mb-5">Register</h1>
              :
              <h1 className="text-2xl font-bold mb-5">Login</h1>
            }           
            

            
            <input type="email" placeholder="Email" className="w-full bg-white text-black rounded-2xl p-3 mb-3 outline-none"/>

            {
              authStatus &&
               <input type="text" placeholder="Username" className="w-full bg-white text-black rounded-2xl p-3 mb-3 outline-none"/>
            }
            <input type="password" placeholder="Password" className="w-full bg-white text-black rounded-2xl p-3 mb-3 outline-none"/>

           
            <div className="w-full flex flex-col sm:flex-row justify-between gap-2 mb-4 text-sm">
              <p className="text-yellow-500"> Don't share password with others</p>
              <p className="text-blue-500 underline cursor-pointer">Forgot password</p>
            </div>

            {
              authStatus ?
              <button className="w-full p-3 rounded-2xl bg-green-600 hover:bg-green-700 font-bold"> Register</button>
              :
              <button className="w-full p-3 rounded-2xl bg-green-600 hover:bg-green-700 font-bold"> Login</button>
            }
            

          
            <p className="mt-4">
              {
                authStatus ?
                <span>Already a User</span>
                :
                <span>Are you new?</span>
              }
              {
                authStatus ?
                <span className="text-blue-500 underline cursor-pointer ml-1" onClick={()=>setauthStatus(!authStatus)}>Login</span>
                :
                <span className="text-blue-500 underline cursor-pointer ml-1" onClick={()=>setauthStatus(!authStatus)}>Register</span>
              }
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Auth

