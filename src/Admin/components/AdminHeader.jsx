import React from 'react'
import { CiPower } from "react-icons/ci"

function AdminHeader() {
  return (
    <>
      <div className="w-full">

        {/* Header */}
        <div className="w-full p-3 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://thumbs.dreamstime.com/b/book-store-facade-icon-colored-flat-shop-front-veiw-vector-illustration-84201777.jpg"
              alt="BookStore"
            />

            <h1 className="text-2xl font-bold">
              BookStore
            </h1>
          </div>

          <button className="flex gap-1 items-center p-3 border-2 rounded-lg hover:bg-black hover:text-white">
            Logout
            <CiPower />
          </button>

        </div>

        {/* Black Marquee */}
        <div className="w-full bg-black p-0 m-0">
          <marquee className="w-full p-0 m-0">
            <h1 className="text-white text-base p-0 m-0">
              Welcome, Admin! You're all set to manage and monitor the system.
            </h1>
          </marquee>
        </div>

      </div>
    </>
  )
}

export default AdminHeader