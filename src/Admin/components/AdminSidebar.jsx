import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function AdminSidebar() {

  const location = useLocation()

  return (
    <div className="bg-black text-white min-h-[70vh] h-full p-4">

      <div className="flex flex-col items-center w-full">

        {/* Admin Image */}
        <img
          src="https://img.freepik.com/free-vector/business-user-cog_78370-7040.jpg"
          alt="Admin"
          className="w-32 h-32 rounded object-cover"
        />

        {/* Title */}
        <h1 className="text-xl font-bold text-center mt-4 mb-6">
          Admin Dashboard
        </h1>

        {/* Menu */}
        <div className="flex flex-col gap-4 w-full max-w-[180px]">

          <Link to="/admin">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="menu"
                checked={location.pathname === '/admin'}
                readOnly
              />
              Dashboard
            </label>
          </Link>

          <Link to="/admin/resource">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="menu"
                checked={location.pathname === '/admin/resource'}
                readOnly
              />
              Resources
            </label>
          </Link>

          <Link to="/admin/sett">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="menu"
                checked={location.pathname === '/admin/sett'}
                readOnly
              />
              Settings
            </label>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default AdminSidebar