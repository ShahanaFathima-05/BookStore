
import React from 'react'
import { FaUser, FaUserCheck, FaBook } from 'react-icons/fa'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts'

function Dashboard() {
  // Bar chart data
  const data = [
    { label: 'Jan', books: 20, users: 10 },
    { label: 'Feb', books: 35, users: 15 },
    { label: 'Mar', books: 25, users: 20 },
    { label: 'Apr', books: 45, users: 30 },
    { label: 'May', books: 30, users: 25 },
    { label: 'Jun', books: 55, users: 40 }
  ]

  // Pie chart data
  const data01 = [
    { name: 'Books', value: 55 },
    { name: 'Users', value: 30 },
    { name: 'Employees', value: 15 }
  ]

  const data02 = [
    { name: 'Approved', value: 60 },
    { name: 'Pending', value: 25 },
    { name: 'Rejected', value: 15 }
  ]

  const COLORS = ['#6d28d9', '#15803d', '#f59e0b']

  return (
    <>
      <AdminHeader />

      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-12">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <AdminSidebar />
        </div>

        {/* Dashboard content */}
        <div className="md:col-span-9 p-4 md:p-6">
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

          {/* Charts */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow min-w-0">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Books and Users Overview
              </h2>

              <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
                  >
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

            {/* Pie Charts */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow min-w-0">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Dashboard Statistics
              </h2>

              <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data01}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius="65%"
                      label
                    >
                      {data01.map((entry, index) => (
                        <Cell
                          key={`first-${entry.name}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Approval Status Pie Chart */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow min-w-0 xl:col-span-2">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Book Approval Status
              </h2>

              <div className="w-full h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data02}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius="55%"
                      outerRadius="75%"
                      label
                    >
                      {data02.map((entry, index) => (
                        <Cell
                          key={`second-${entry.name}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminFooter />
    </>
  )
}

export default Dashboard
