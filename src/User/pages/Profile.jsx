
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaUserEdit } from "react-icons/fa"
import ProfileUpdate from '../components/ProfileUpdate'

function Profile() {

  const [sideBar, setsideBar] = useState(false)

  const [sellStatus, setSellstatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  const trueStyle='border-t-1 border-s-1 border-e-1 p-3'
  const falseStyle='border-b-1 p-3'

  return (
    <div className="relative">

      <Header />

      {
        sideBar &&
        <ProfileUpdate setsideBar={setsideBar} />
      }

   
      <div className="w-full">
        <div className="relative bg-black h-[40vh]">
          <div className="absolute h-[50%] -bottom-20 left-7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="h-full"
              alt="Profile"
            />
          </div>

        </div>

        <div className="px-7">

          <h1 className="mt-24 font-bold text-2xl">
            Username
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Bio */}
            <div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem ex pariatur aliquid voluptatum nisi veritatis itaque
                facere aliquam. Illum, sit dolore ab nobis adipisci ea?
                Maiores officiis quam ipsam enim.
              </p>
            </div>

            {/* Edit Button */}
            <div className="flex justify-start md:justify-end">

              <button
                className="rounded bg-blue-600 text-white flex gap-2 items-center p-3 m-3 hover:bg-blue-700"
                onClick={() => setsideBar(!sideBar)}
              >
                Edit
                <FaUserEdit />
              </button>

            </div>

          </div>

          {/* Tabs */}
          <div className="w-full py-20">

            <div className="flex justify-center">

              <button className={sellStatus ? trueStyle : falseStyle} onClick={() => {
               setSellstatus(true)
               setBookStatus(false)
             setPurchaseStatus(false)
             }}> Sell Books
             </button>

<button
  className={bookStatus ? trueStyle : falseStyle}
  onClick={() => {
    setSellstatus(false)
    setBookStatus(true)
    setPurchaseStatus(false)
  }}
>
  My Books
</button>

<button
  className={purchaseStatus ? trueStyle : falseStyle}
  onClick={() => {
    setSellstatus(false)
    setBookStatus(false)
    setPurchaseStatus(true)
  }}
>
  Purchases
</button>
            </div>


            {
  sellStatus &&

  <div className="bg-gray-600 p-5 m-5 rounded-xl">

    <h1 className="text-center text-white text-2xl font-bold mb-5">
      Book Details
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Left Column */}
      <div className="px-2">

        <input
          type="text"
          placeholder="Title"
          className="w-full bg-white p-3 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Author"
          className="w-full bg-white p-3 mb-3 rounded"
        />

        <input
          type="number"
          placeholder="No. of pages"
          className="w-full bg-white p-3 mb-3 rounded"
        />
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Image URL' />
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Price' />
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Discount Price' />
        <textarea name="" placeholder='Abstract'  className="w-full bg-white p-3 mb-3 rounded" rows={'8'} id=""></textarea>

      </div>

      {/* Right Column */}
      <div className="px-2">

        <input
          type="number"
          placeholder="Publisher"
          className="w-full bg-white p-3 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Language"
          className="w-full bg-white p-3 mb-3 rounded"
        />
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='ISBN' />
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Category' />
        <label htmlFor="img">
          <input type="file" name="" id="img" className='hidden' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-3SDTEq5gqOtVna-CCX-Up_4F0U4Z72jg_8cVx__uA&s=10" className='rounded-full h-28 w-28 m-5' alt="" />
        </label>
        <div className="flex justify-between">
            <button className="bg-white border text-black px-5 py-2 rounded">submit</button>
            <button className="bg-black text-white px-5 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
    </div>
            }

            {
              bookStatus &&
              
                <h2 className="text-xl font-bold">
                  My Books
                </h2>
               
            }

            {
              purchaseStatus &&
              
                <h2 className="text-xl font-bold">
                  Purchases
                </h2>
               
            }

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile

