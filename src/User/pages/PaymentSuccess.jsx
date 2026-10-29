import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
    <>
    <Header/>

    <div className="min-h-[60vh]">
        <div className="grid grid-cols-2">
            <div className='flex justify-center items-center'>
                <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
            </div>
            <div className='flex justify-center flex-col items-center'>
                <h1 className="text-2xl text-green-900">Payment Successfull</h1>
                <Link to={'/'} className='text-amber-800'>Back to Home</Link>
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}

export default PaymentSuccess