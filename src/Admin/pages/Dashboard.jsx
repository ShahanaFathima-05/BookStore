
import React from 'react'
import { FaUser, FaUserCheck, FaBook } from 'react-icons/fa'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'

import {ResponsiveContainer,BarChart, Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from 'recharts'

function Dashboard() {

  const data = [
    { label: 'Jan', books: 20, users: 10 },
    { label: 'Feb', books: 35, users: 15 },
    { label: 'Mar', books: 25, users: 20 },
    { label: 'Apr', books: 45, users: 30 },
    { label: 'May', books: 30, users: 25 },
    { label: 'Jun', books: 55, users: 40 }
  ]

  return (
    <>
      <AdminHeader />

      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-12">

        {/* Sidebar */}
        <div className="md:col-span-3">
          <AdminSidebar />
        </div>

        {/* Dashboard content */}
        <div className="md:col-span-9 p-4">

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

            <div className="bg-violet-700 text-white p-6 rounded-xl shadow">
              <FaBook size={28} />
              <h2 className="mt-4 text-lg">Total Number of Books</h2>
              <p className="text-3xl font-bold mt-2">100+</p>
            </div>

            <div className="bg-green-700 text-white p-6 rounded-xl shadow">
              <FaUserCheck size={28} />
              <h2 className="mt-4 text-lg">Total Number of Users</h2>
              <p className="text-3xl font-bold mt-2">100+</p>
            </div>

            <div className="bg-amber-600 text-white p-6 rounded-xl shadow">
              <FaUser size={28} />
              <h2 className="mt-4 text-lg">Total Number of Employees</h2>
              <p className="text-3xl font-bold mt-2">20+</p>
            </div>

          </div>

          {/* Chart */}
          <div className="bg-white p-4 md:p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Books and Users Overview</h2>

            <div className="w-full h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5}}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar
                    dataKey="books"
                    name="Books"
                    fill="#6d28d9"
                    radius={[5, 5, 0, 0]}
                  />

                  <Bar
                    dataKey="users"
                    name="Users"
                    fill="#15803d"
                    radius={[5, 5, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      <AdminFooter />
    </>
  )
}

export default Dashboard
