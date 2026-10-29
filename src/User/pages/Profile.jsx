
import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaUserEdit } from "react-icons/fa"
import ProfileUpdate from '../components/ProfileUpdate'
import { useEffect } from 'react'
import axiosInstance from '../../api/axiosInstance'
import SellBook from '../components/SellBook'
import { userAddedBooksApi } from '../../services/allApi'
import { ToastContainer, toast } from 'react-toastify'
import { deleteBookApi } from '../../services/allApi'
import { purchasedBooksApi } from '../../services/allApi'

function Profile() {

  const [sideBar, setsideBar] = useState(false)

  const [sellStatus, setSellstatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  const [userBooklist, setUserBooklist] = useState([])
  const [purchaseBooklist, setPurchaseBooklist] = useState([])

  const [dp, setdp] = useState("")
  const [name, setName] = useState("")
  const [email, setemail] = useState('')
  const [bio, setBio] = useState('')

  const trueStyle = 'border-t-1 border-s-1 border-e-1 p-3'
  const falseStyle = 'border-b-1 p-3'


  useEffect(() => {
    if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      const userobj = JSON.parse(sessionStorage.getItem('user'))
      setName(userobj.name || userobj.username || '')
      setdp(userobj?.picture)
      setemail(userobj?.email)
      setBio(userobj?.bio)
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      handleUserAddedBook()
    }
  }, [bookStatus])

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
       handlePurchaseBook()
    }
  }, [purchaseStatus])

  const handleUserAddedBook = async () => {
    const response = await userAddedBooksApi()
    if (response.status == 200) {
      setUserBooklist(response.data)
    }
  }

  const handleRemoveBook = async (id) => {
    try {
      const response = await deleteBookApi(id)
      if (response.status == 200) {
        toast.success("Book removed successfully")
        handleUserAddedBook()
      }
      else {
        toast.error("Failed to remove book")
      }
    }
    catch (err) {
      console.log(err)
      toast.error("Failed to remove book")
    }
  }

  const handlePurchaseBook = async (id) => {
    const response = await purchasedBooksApi(id)
    if (response.status == 200) {
      setPurchaseBooklist(response.data)
    }
  }


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
              dp == " " ?
                <img src="" alt="" />
                :
                dp.includes('lh3.googleusercontent.com') ?
                  <img src={dp} alt="profile" className='w-28 h-28' /> :
                  <img src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" className='w-28 h-28' />
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
              <SellBook />

            }


            {
              bookStatus && (
                <div className="border rounded-3 p-3 mb-4 shadow-sm m-4" style={{ width: "90%", margin: "auto" }}>
                  {userBooklist.length > 0 ? (
                    userBooklist.map((item) => (
                      <div className="row align-items-center border-bottom py-3">
                        {/* Book Details */}
                        <div className="col-md-9">
                          <h4 className="fw-bold text-center">{item.title}</h4>
                          <h5 className="text-success text-center">₹{item.price}</h5>
                          <p>{item.abstract}</p>
                          <button className="btn btn-outline-success p-5 rounded-3xl text-amber-50 m-4 bg-green-800" onClick={() => handleApproveBook(item._id || item.id)}>APPROVED</button>
                        </div>

                        {/* Book Image + Remove */}
                        <div className="col-md-3 text-center">
                          <img src={item.imageUrl} alt={item.title} className="img-fluid m-4"
                            style={{ width: "105px", height: "150px", objectFit: "cover", borderRadius: "8px", }} />
                          <br />
                          <button className="btn btn-outline-danger p-5 rounded-3xl text-amber-50 bg-red-800 mt-2" onClick={() => handleRemoveBook(item._id || item.id)}>
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img src="https://y.getyarn.io/34d3abe4-e7eb-4308-895d-e386731a57d9_text.gif" alt="No books available" style={{ maxWidth: "250px", width: "100%" }} />
                      <p className="text-muted mt-3"> No books available yet!</p>
                    </div>
                  )}
                </div>
              )
            }


            {
              purchaseStatus && (
                <div
                  className="border p-3 mb-4"
                  style={{ width: "90%", margin: "auto" }}
                >
                  {
                    purchaseBooklist.length > 0 ? (
                      purchaseBooklist.map((item) => (
                        <div
                          key={item._id || item.id}
                          className="row align-items-center border-bottom py-3"
                        >

                          {/* Book Details */}
                          <div className="col-md-9">
                            <h4 className="fw-bold text-center">
                              {item.title}
                            </h4>

                            <h5 className="text-success text-center">
                              ₹{item.price}
                            </h5>

                            <p>{item.abstract}</p>

                            <button className="btn btn-outline-success">
                              PURCHASED
                            </button>
                          </div>

                          {/* Book Image */}
                          <div className="col-md-3 text-center">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              style={{
                                width: "105px",
                                height: "150px",
                                objectFit: "cover"
                              }}
                            />
                          </div>

                        </div>
                      ))
                    ) : (
                      <p className="text-center">No purchased books found.</p>
                    )
                  }
                </div>
              )
            }

          </div>

          <ToastContainer position='top-center' autoClose={'3000'}/>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Profile

