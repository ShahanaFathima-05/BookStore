import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'

function Resources() {

  const [toggle, setToggle] = useState(true)

  const activeStyle = 'border border-b-0 p-3'
  const inactiveStyle = 'border-b p-3'

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <AdminHeader />

      {/* Sidebar + Content */}
      <div className="flex flex-1 w-full">

        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <AdminSidebar />
        </div>

        {/* Resources Content */}
        <div className="flex-1 p-6">

          <h1 className="text-3xl font-bold text-center mb-6">
            Resources
          </h1>

          {/* Books / Users */}
          <div className="flex justify-center mb-6">

            <button
              className={toggle ? activeStyle : inactiveStyle}
              onClick={() => setToggle(true)}
            >
              Books
            </button>

            <button
              className={!toggle ? activeStyle : inactiveStyle}
              onClick={() => setToggle(false)}
            >
              Users
            </button>

          </div>

          {/* Books */}
          {toggle ? (

            <div className="flex justify-center">

              <div className="w-64 shadow-2xl">

                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvdgaJ2gjdr9IwrNGGQNpNkCAcnXLD6MUtSZOZvyyJqOo6YLMyj8M69PLdXSUFPZ1Y_leMIbFyUuZaWmu2tuF9oMxMaMm5ixfPahzYxtU&usqp=CAc"
                  alt="Fourty Rules of Love"
                  className="w-full h-72 object-cover"
                />

                <h2 className="text-center my-2">
                  Fourty Rules of Love
                </h2>

                <h3 className="text-center text-green-700 mb-2">
                  $300
                </h3>

                <button className="w-full bg-green-600 text-white p-2">
                  Approve
                </button>

              </div>

            </div>

          ) : (

            /* Users */
            <div className="flex justify-center">

              <div className="w-72 bg-gray-400 border border-gray-700 p-3">

                <p className="text-center mb-3">
                  User ID : 787809u56789
                </p>

                <div className="flex items-center gap-3">

                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0">

                    <img
                      src="/admin.png"
                      alt="User"
                      className="w-14 h-14 rounded-full"
                    />

                  </div>

                  <div>
                    <p className="text-orange-600">
                      Username
                    </p>

                    <p className="text-green-700">
                      User Email ID
                    </p>
                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

      {/* Footer */}
      <AdminFooter />

    </div>
  )
}

export default Resources