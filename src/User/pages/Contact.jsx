import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMail } from 'react-icons/io5';


function Contact() {
  return (
    <>
    <Header/>

    <div className="w-full">
      <section className="w-full px-30 py-10 my-3">
        <h1 className="text-center text-3xl font-bold m-4 p-2">Contact</h1>
        <p className="text-center-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, itaque nihil? Eligendi eaque eum illum repudiandae. Rem, officia velit obcaecati pariatur eos odio doloremque, laudantium architecto vero veniam assumenda perferendis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iure assumenda doloribus explicabo ullam architecto ipsa dicta vitae quas excepturi nisi id sed nobis qui iusto impedit vero quibusdam blanditiis?
        </p>

        <div className="flex flex-wrap justify-between my-3 p-2">

          <div className="flex items-center mb-3 gap-2">
            <div>
              <FaLocationDot className='text-2xl hover:bg-pink-700'/>
            </div>
            <span>BookStore,calicut</span>
          </div>

          <div className="flex items-center mb-3 gap-2">
            <div>
              <FaPhoneAlt className='text-2xl hover:bg-green-700'/>
            </div>
            <span>9876543210</span>
          </div>

          <div className="flex items-center mb-3 gap-2">
            <div>
              <IoMail className='text-2xl hover:bg-red-700'/>
            </div>
            <span>BookStore@gmail.com</span>
          </div>

        </div>

        <div className="grid  sm:grid-cols-1 md:grid-cols-2 gap-2">
          <div className='bg-gray-900 p-5 rounded-2xl'>
            <h1 className='text-center text-white'>Send A Message</h1>
            <input type="text"  placeholder='Name' className='bg-white w-full mt-5 p-3'/>
            <input type="text"  placeholder='Email' className='bg-white w-full mt-5 p-3'/>
            <textarea name="" placeholder='Message' className='w-full bg-white mt-5 ' rows={7} id=""></textarea>
            <button className="w-full bg-gray-700 text-white hover:bg-black p-2">Send</button>
          </div>
          <div className='rounded-2xl'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.131896072086!2d75.77344221562537!3d11.258984622727242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1788216534595!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  )
}

export default Contact