
import React, { useState, useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import AdminFooter from '../components/AdminFooter'
import {
  adimAllboooksApi,
  approvedbookApi,
  adminAllusersApi
} from '../../services/allApi'

function Resources() {

  const [toggle, setToggle] = useState(true)
  const [allbooks, setallbooks] = useState([])
  const [allusers, setAllusers] = useState([])

  const activeStyle =
    'border border-b-0 p-3 font-semibold text-green-700'

  const inactiveStyle =
    'border-b p-3 text-gray-600 hover:text-green-700'

  useEffect(() => {
    handlebooks()
    handleallusers()
  }, [])

  // Get all books
  const handlebooks = async () => {
    try {
      const response = await adimAllboooksApi()
      console.log(response)

      if (response.status === 200) {
        setallbooks(response.data)
      }
    } catch (error) {
      console.log('Error fetching books:', error)
    }
  }

  // Get all users
  const handleallusers = async () => {
    try {
      const response = await adminAllusersApi()
      console.log(response)

      if (response.status === 200) {
        setAllusers(response.data)
      }
    } catch (error) {
      console.log('Error fetching users:', error)
    }
  }

  // Approve book
  const handleapprovedbook = async (bid) => {
    try {
      const response = await approvedbookApi(bid)

      if (response.status === 200) {
        alert('Book approved successfully')
        handlebooks()
      }
    } catch (error) {
      console.log('Error approving book:', error)
    }
  }

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

        {/* Main Content */}
        <div className="flex-1 p-6">

          <h1 className="text-3xl font-bold text-center mb-6">
            Resources
          </h1>

          {/* Books / Users Toggle */}
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

          {/* Books Section */}
          {toggle ? (

            <div className="flex flex-wrap justify-center gap-6">

              {allbooks.length > 0 ? (

                allbooks.map((item) => (

                  <div
                    key={item._id}
                    className="w-64 overflow-hidden rounded-lg shadow-lg border bg-white"
                  >

                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-72 object-cover"
                    />

                    <div className="p-3">

                      <h2 className="text-center font-semibold my-2">
                        {item.title}
                      </h2>

                      <p className="text-center text-gray-500 text-sm mb-2">
                        {item.author}
                      </p>

                      <h3 className="text-center text-green-700 font-bold mb-3">
                        ₹{item.discountPrice || item.price}
                      </h3>

                      <button
                        className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
                        onClick={() => handleapprovedbook(item._id)}
                      >
                        Approve
                      </button>

                    </div>

                  </div>

                ))

              ) : (

                <p className="text-gray-500 text-center">
                  No books available
                </p>

              )}

            </div>

          ) : (

            /* Users Section */
            <div className="flex flex-wrap justify-center gap-6">

              {allusers.length > 0 ? (

                allusers.map((item) => (

                  <div
                    key={item._id}
                    className="w-72 bg-gray-100 border border-gray-300 rounded-lg p-4 shadow"
                  >

                    <p className="text-center text-sm text-gray-600 mb-3 break-all">
                      User ID: {item._id}
                    </p>

                    <div className="flex items-center gap-3">

                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shrink-0">

                        <img
                          src={item.picture || '/admin.png'}
                          alt={item.username || 'User'}
                          className="w-14 h-14 rounded-full object-cover"
                        />

                      </div>

                      <div className="min-w-0">

                        <p className="text-orange-600 font-semibold break-words">
                          {item.username}
                        </p>

                        <p className="text-green-700 text-sm break-all">
                          {item.email}
                        </p>

                      </div>

                    </div>

                  </div>

                ))

              ) : (

                <p className="text-gray-500 text-center">
                  No users available
                </p>

              )}

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
