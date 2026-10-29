import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <>
    <Header/>

    <div className="min-h-[60vh]">
        <div className="grid grid-cols-2">
            <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" className='m-10' width={'50%'} alt="" />
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className="text-2xl text-red-800">Payment Failed</h1>
                <Link to={'/'} className='text-amber-800'>Back to Home</Link>
            </div>
        </div>
    </div>


    <Footer/>
    </>
  )
}

export default PaymentFailed