import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'

function Settings() {
  return (
    <>
      <AdminHeader />

      {/* Main Section */}
      <div className="min-h-[70vh] grid grid-cols-12">

        {/* Sidebar */}
        <div className="col-span-3">
          <AdminSidebar />
        </div>

        {/* Settings Content */}
        <div className="col-span-9 p-4">

          <h1 className="text-3xl text-center font-bold mb-5">
            Admin Settings
          </h1>

          {/* Text + Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Text */}
            <div className="text-justify leading-6">

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus tempore assumenda rem dolor itaque officia ab
                fugit, saepe facilis temporibus reiciendis. Eaque, maiores
                sed delectus suscipit velit porro nulla doloremque.
              </p>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minus doloremque amet similique nostrum voluptas debitis a,
                beatae adipisci quis. Quos recusandae delectus quaerat,
                natus illum architecto sequi libero reprehenderit voluptatem.
              </p>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus tempore assumenda rem dolor itaque officia ab
                fugit, saepe facilis temporibus reiciendis. Eaque, maiores
                sed delectus suscipit velit porro nulla doloremque.
              </p>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, provident consectetur et omnis maxime, hic minus
                dolorum aliquid temporibus id.
              </p>

            </div>

            {/* Right Side */}
            <div className="bg-black text-white p-3">

              {/* Profile Image */}
              <div className="relative">

                <img
                  src="https://img.freepik.com/free-vector/business-user-cog_78370-7040.jpg"
                  alt="Admin"
                  className="w-full h-64 object-cover"
                />

                {/* Edit Button */}
                <button className="absolute bottom-3 right-3 bg-yellow-400 p-2 rounded">
                  ✎
                </button>

              </div>

              {/* Username */}
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mt-4 border border-gray-500 rounded"
              />

              {/* Password */}
              <input
                type="text"
                placeholder="123"
                className="w-full p-2 mt-4 border border-gray-500 rounded"
              />

              {/* Confirm Password */}
              <input
                type="text"
                placeholder="Confirm Password"
                className="w-full p-2 mt-4 border border-gray-500 rounded"
              />

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-4">

                <button className="bg-red-500 text-white p-2">
                  Reset
                </button>

                <button className="bg-green-500 text-white p-2">
                  Update
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <AdminFooter />
    </>
  )
}

export default Settings