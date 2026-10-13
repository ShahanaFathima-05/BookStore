
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaUserEdit } from "react-icons/fa"
import ProfileUpdate from '../components/ProfileUpdate'
import { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import SellBook from '../components/SellBook'

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
            {
                dp==" " ?
                <img src="" alt="" />
                :
                dp.includes('lh3.googleusercontent.com')?
                <img src={dp} alt="profile" className='w-28 h-28'/>:
                <img src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`}  alt="" className='w-28 h-28' />
            }
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
            <SellBook/>

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

