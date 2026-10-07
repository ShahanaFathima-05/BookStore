import React, { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {

  const [dropDown, setDropdown] = useState(false);

  const [dp, setdp] = useState("");
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      const userToken = sessionStorage.getItem('token')
      const userobj = JSON.parse(sessionStorage.getItem('user'))
      setToken(userToken)
      setName(userobj.name || userobj.username || '')
      setdp(userobj.picture)
    }

  }, [])

  return (
    <header className="w-full">

      {/* Top Header */}
      <div className="flex p-4 items-center justify-between bg-amber-900 text-white">

        {/* Left Side: Logo */}
        <div className="flex-1 flex justify-start items-center">

          <img
            className="w-[50px] h-[50px] rounded-full"
            src="https://thumbs.dreamstime.com/b/book-store-facade-icon-colored-flat-shop-front-veiw-vector-illustration-84201777.jpg"
            alt=""
          />

        </div>

        {/* Center: Title */}
        <h1 className="flex-1 text-center text-xl font-bold">
          BookStore
        </h1>

        {/* Right Side */}
        <div className="flex-1 flex justify-end gap-4 items-center">

          {/* Social Icons */}
          <FaInstagram className="cursor-pointer hover:text-pink-600" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaFacebook className="cursor-pointer hover:text-blue-600" />

          {
            token === '' ?

            <Link
              to="/auth"
              className="border-2 px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Login
            </Link>

            :

            <div className="relative">

              <button
                onClick={() => setDropdown(!dropDown)}
                className="border-2 px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors flex items-center gap-2"
              >

                {
                dp && (
                  <img src={dp} alt="profile" className="w-7 h-7 rounded-full"/>
                )
                }

                {name || 'User'}

                {
                  dropDown
                    ?
                    <FaAngleUp />
                    :
                    <FaAngleDown />
                }

              </button>

              {
                dropDown &&
                <div className="absolute right-0 top-12 w-32 bg-white text-black rounded-lg shadow-lg p-2 z-50">

                  <Link
                    to="/profile"
                    className="block px-3 py-2 rounded hover:bg-gray-200"
                    onClick={() => setDropdown(false)}
                  >
                    Profile
                  </Link>

                  <button
                    className="w-full text-left px-3 py-2 rounded hover:bg-gray-200 text-red-600"
                    onClick={() => setDropdown(false)}
                  >
                    Logout
                  </button>

                </div>
              }

            </div>
          }

        </div>

      </div>

      {/* Navigation */}
      <div className="w-full bg-black py-2 text-white flex justify-center gap-6">

        <Link
          to="/"
          className="hover:text-blue-400"
        >
          Home
        </Link>

        <Link
          to="/books"
          className="hover:text-blue-400"
        >
          Books
        </Link>

        <Link
          to="/contact"
          className="hover:text-blue-400"
        >
          Contact
        </Link>

      </div>

    </header>
  );
}

export default Header;