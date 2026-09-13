import React from 'react'

function ProfileUpdate({ setsideBar }) {
  return (
    <div className="h-screen w-screen fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.5)]">
      <div className="h-screen w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white fixed top-0 left-0 shadow-lg">
        <div className="bg-black text-white p-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <button onClick={() => setsideBar(false)} className="hover:text-red-500">Close</button>
        </div>
        <div className="flex justify-center my-5">
          <label htmlFor="fileimg" className="cursor-pointer">
            <input type="file" id="fileimg" className="hidden" accept="image/*" />
            <img src="https://www.svgrepo.com/show/487313/edit-profile.svg" alt="Edit profile" className="w-28 h-28"/>
          </label>
        </div>
        <div className="p-5">
          <input type="email" placeholder="Email" className="border w-full p-3 mb-3 rounded"/>
          <input type="text" placeholder="Username" className="border w-full p-3 mb-3 rounded"/>
          <input type="password" placeholder="Password" className="border w-full p-3 mb-3 rounded"/>
          <textarea placeholder="Bio" rows="4" className="border w-full p-3 mb-3 rounded resize-none"/>
          <div className="flex justify-between">
            <button className="bg-white border text-black px-5 py-2 rounded">Update</button>
            <button onClick={() => setsideBar(false)} className="bg-black text-white px-5 py-2 rounded">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileUpdate
