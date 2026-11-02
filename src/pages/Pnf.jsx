import React from 'react'
import {Link} from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <h1 className='text-4xl font-bold text-red-600'> Page Not Found</h1>
        <img src="https://cdn.svgator.com/images/2024/04/walking-investigator-animation-in-404-error-page.gif" alt="" />
        <Link to='/' className='bg-amber-600 text-white p-3 rounded-lg'>Go Back</Link>
    </div>
    </>
  )
}
export default Pnf