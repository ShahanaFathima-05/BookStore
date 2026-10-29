
import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AdminFooter from '../components/AdminFooter'
import { adminUpdateApi } from '../../services/allApi'

function Settings() {

  const [profile, setProfile] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    picture: ''
  })

  const [preview, setPreview] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  // Load admin details from sessionStorage
  useEffect(() => {
    const user = sessionStorage.getItem('user')

    if (user) {
      try {
        const admin = JSON.parse(user)

        setProfile({
          username: admin.username || '',
          password: '',
          confirmPassword: '',
          picture: admin.picture || ''
        })

        setPreview(admin.picture || '')
      } catch (error) {
        console.log('Error loading admin details:', error)
      }
    }
  }, [])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target

    setProfile((prev) => ({
      ...prev,
      [name]: value
    }))

    setMessage('')
  }

  // Handle profile picture selection
  const handlePictureChange = (e) => {
    const file = e.target.files?.[0]

    if (file) {
      if (!file.type.startsWith('image/')) {
        setMessage('Please select a valid image file.')
        return
      }

      setProfile((prev) => ({
        ...prev,
        picture: file
      }))

      setPreview(URL.createObjectURL(file))
      setMessage('')
    }
  }

  // Reset form
  const handleReset = () => {
    const user = sessionStorage.getItem('user')

    if (user) {
      try {
        const admin = JSON.parse(user)

        setProfile({
          username: admin.username || '',
          password: '',
          confirmPassword: '',
          picture: admin.picture || ''
        })

        setPreview(admin.picture || '')
        setMessage('')
      } catch (error) {
        console.log('Error resetting form:', error)
      }
    }
  }

  // Update admin profile
  const handleUpdate = async (e) => {
    e.preventDefault()

    const { username, password, confirmPassword, picture } = profile

    if (!username.trim()) {
      setMessage('Please enter a username.')
      return
    }

    if (password && password !== confirmPassword) {
      setMessage('Passwords do not match.')
      return
    }

    if (!sessionStorage.getItem('token')) {
      setMessage('Please log in again.')
      return
    }

    try {
      setLoading(true)
      setMessage('')

      let response

      // Use FormData when uploading a new image
      if (picture instanceof File) {
        const formData = new FormData()

        formData.append('username', username.trim())

        if (password) {
          formData.append('password', password)
        }

        formData.append('picture', picture)

        response = await adminUpdateApi(formData)
      } else {
        // No new image selected
        const data = {
          username: username.trim()
        }

        if (password) {
          data.password = password
        }

        response = await adminUpdateApi(data)
      }

      if (response.status === 200) {
        setMessage('Profile updated successfully!')

        // Update saved user details if returned by backend
        const updatedUser = response.data?.user

        if (updatedUser) {
          sessionStorage.setItem('user', JSON.stringify(updatedUser))
        } else {
          const savedUser = JSON.parse(
            sessionStorage.getItem('user') || '{}'
          )

          sessionStorage.setItem(
            'user',
            JSON.stringify({
              ...savedUser,
              username: username.trim()
            })
          )
        }

        setProfile((prev) => ({
          ...prev,
          password: '',
          confirmPassword: ''
        }))
      } else {
        setMessage('Profile update failed.')
      }

    } catch (error) {
      console.log('Profile update error:', error)

      setMessage(
        error.response?.data?.message ||
        error.response?.data?.msg ||
        'Something went wrong. Profile update failed.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <AdminHeader />

      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <AdminSidebar />
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6">

          <h1 className="text-3xl font-bold text-center mb-8">
            Admin Settings
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Left Section */}
            <div className="flex flex-col justify-center text-gray-700 leading-7">

              <h2 className="text-2xl font-semibold mb-4">
                Manage Your Profile
              </h2>

              <p>
                Welcome to your admin settings. Update your username,
                password, and profile picture here.
              </p>

              <p className="mt-4">
                Choose a profile picture and enter a new password
                if you want to change your current password.
              </p>

              <p className="mt-4">
                Confirm your new password before saving your changes.
              </p>

            </div>

            {/* Profile Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">

              <div className="bg-gray-900 text-white p-5">
                <h2 className="text-xl font-semibold">
                  Profile Information
                </h2>

                <p className="text-sm text-gray-300 mt-1">
                  Update your account details
                </p>
              </div>

              <form onSubmit={handleUpdate} className="p-6">

                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-6">

                  <img
                    src={
                      preview ||
                      'https://img.freepik.com/free-vector/business-user-cog_78370-7040.jpg'
                    }
                    alt="Admin profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                  />

                  <label className="mt-3 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded cursor-pointer font-medium">
                    ✎ Change Picture

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePictureChange}
                      className="hidden"
                    />
                  </label>

                </div>

                {/* Username */}
                <label className="block text-sm font-medium mb-1">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />

                {/* New Password */}
                <label className="block text-sm font-medium mt-4 mb-1">
                  New Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={profile.password}
                  onChange={handleChange}
                  placeholder="Leave blank to keep current password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Confirm Password */}
                <label className="block text-sm font-medium mt-4 mb-1">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={profile.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm new password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                {/* Message */}
                {message && (
                  <p className="mt-4 text-sm text-blue-700">
                    {message}
                  </p>
                )}

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">

                  <button
                    type="button"
                    onClick={handleReset}
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white p-3 rounded-lg"
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white p-3 rounded-lg"
                  >
                    {loading ? 'Updating...' : 'Update'}
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

      <AdminFooter />

    </div>
  )
}

export default Settings
