import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'

function Dashboard() {
  return (
    <>
      <AdminHeader />

      {/* Dashboard */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-12">

        {/* Sidebar */}
        <div className="md:col-span-3">
          <AdminSidebar />
        </div>

        {/* Dashboard Content */}
        <div className="md:col-span-9">

          <div className="grid  md:grid-cols-3 gap-2 m-2">

            {/* Total Books */}
            <div className="bg-violet-700 text-white p-10 rounded-lg text-lg">
              <FaBook />
              Total Number of Books
              <br />
              100+
            </div>

            {/* Total Users */}
            <div className="bg-green-700 text-white p-10 rounded-lg text-lg">
              <FaUserCheck />
              Total Number of Users
              <br />
              100+
            </div>

            {/* Total Employees */}
            <div className="bg-amber-600 text-white p-10 rounded-lg text-lg">
              <FaUser />
              Total Number of Employees
              <br />
              20+
            </div>

          </div>

        </div>

      </div>

      <AdminFooter />
    </>
  )
}

export default Dashboard