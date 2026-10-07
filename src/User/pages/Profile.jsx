
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaUserEdit } from "react-icons/fa"
import ProfileUpdate from '../components/ProfileUpdate'
import { useEffect } from 'react'

function Profile() {

  const [sideBar, setsideBar] = useState(false)

  const [sellStatus, setSellstatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  const [dp, setdp] = useState("")
  const [name, setName] = useState("")
  const [email,setemail]=useState('')
  const [bio,setBio]=useState('')

  const trueStyle='border-t-1 border-s-1 border-e-1 p-3'
  const falseStyle='border-b-1 p-3'


  useEffect(()=>{
  if (sessionStorage.getItem('token') && sessionStorage.getItem('user')){
    const userobj = JSON.parse(sessionStorage.getItem('user'))
    setName(userobj.name || userobj.username || '')
    setdp(userobj?.picture)
    setemail(userobj?.email)
    setBio(userobj?.bio)
  }
  },[])

  return (
    <div className="relative">

      <Header />

      {
        sideBar &&
        <ProfileUpdate setsideBar={setsideBar} />
      }

   
      <div className="w-full">
        <div className="relative bg-amber-900 h-[40vh]">
          <div className="absolute h-[50%] -bottom-20 left-7">
            <img 
              src={dp}
              className="h-full"
              alt="Profile"  />
          </div>

        </div>

        <div className="px-7">

          <h1 className="mt-24 font-bold text-2xl" >
            {name}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Bio */}
            <div>
              <p className="text-justify">
                {bio}
              </p>
            </div>

            {/* Edit Button */}
            <div className="flex justify-start md:justify-end">

              <button
                className="rounded bg-amber-900 text-white flex gap-2 items-center p-3 m-3 hover:bg-amber-800"
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

  <div className="bg-amber-900 p-5 m-5 rounded-xl">

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

              <div
  className="border p-3 mb-4"
  style={{ width: "90%", margin: "auto" }}
>
  <div className="row align-items-center">

    {/* Book Details */}
    <div className="col-md-9">

      <h4 className="fw-bold text-center">
        Harry Potter
      </h4>

      <h5 className="text-success text-center">
        ₹500
      </h5>

      <p>
        Harry Potter is a young wizard who discovers his magical
        heritage and begins an exciting journey at Hogwarts School
        of Witchcraft and Wizardry. Along the way, he makes new
        friends, faces dangerous challenges, and uncovers secrets
        about his past. The story is filled with magic, friendship,
        adventure, and unforgettable moments.
      </p>

      <button className="btn btn-outline-success">
        APPROVED
      </button>

    </div>

    {/* Book Image + Remove */}
    <div className="col-md-3 text-center">

      <img
        src="https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
        alt="Harry Potter"
        style={{
          width: "105px",
          height: "150px",
          objectFit: "cover"
        }}
      />

      <br />

      <button className="btn btn-danger mt-2">
        REMOVE
      </button>

    </div>

  </div>
</div>
                                      
            }

            {
              purchaseStatus &&
              
                <div
  className="border p-3 mb-4"
  style={{ width: "90%", margin: "auto" }}
>
  <div className="row align-items-center">

    {/* Book Details */}
    <div className="col-md-9">

      <h4 className="fw-bold text-center">
        Harry Potter
      </h4>

      <h5 className="text-success text-center">
        ₹500
      </h5>

      <p>
        Harry Potter is a young wizard who discovers his magical
        heritage and begins an exciting journey at Hogwarts School
        of Witchcraft and Wizardry. Along the way, he makes new
        friends, faces dangerous challenges, and uncovers secrets
        about his past. The story is filled with magic, friendship,
        adventure, and unforgettable moments.
      </p>

      <button className="btn btn-outline-success">
        PURCHASED
      </button>

    </div>

    {/* Book Image */}
    <div className="col-md-3 text-center">

      <img
        src="https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
        alt="Harry Potter"
        style={{
          width: "105px",
          height: "150px",
          objectFit: "cover"
        }}
      />

    </div>

  </div>
</div>
            }

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile

