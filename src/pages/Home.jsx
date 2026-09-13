import { useEffect,useState } from 'react'
import React from 'react'
import Preloader from '../components/Preloader'
import Header from '../User/components/Header'
import Footer from '../User/components/Footer'
import { FaSearch } from "react-icons/fa";

function Home() {

  const [loadStatus,setLoadStatus]=useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setLoadStatus(false)
    },2000)
  },[])

  return (
    <>
    {
      loadStatus ?
      <Preloader/>
      :
      <>
       <Header/>

       <div>
         <section className="w-full">
          <div className="h-[70vh] bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D')]
           bg-no-repeat bg-cover ">
            <div className="text-white bg-[rgba(0,0,0,0,3)] h-full flex flex-col items-center justify-center gap-2">
              <h1 className="text-5xl">Wonderful Gifts</h1>
              <h4 className="text-3xl">Give your Family and Friends a Book</h4>
              <div className="relative">
                <input type="text" placeholder='Search Books' className="w-full bg-white text-black px-3 py-3 rounded-2xl" />
                <FaSearch className='absolute top-3 right-4 text-black'/>
              </div>
            </div>
          </div>
         </section>

         <section className="w-full">
          <h1 className="text-2xl text-center my-2">New Arrivals</h1>
          <h1 className="text-3xl text-center my-2">Explore Latest Collections</h1>
          <div className="flex flex-wrap justify-around my-5">
            <div className="w-[16rem] shadow-2xl p-3">
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvdgaJ2gjdr9IwrNGGQNpNkCAcnXLD6MUtSZOZvyyJqOo6YLMyj8M69PLdXSUFPZ1Y_leMIbFyUuZaWmu2tuF9oMxMaMm5ixfPahzYxtU&usqp=CAc" alt=""className="h-75 w-full object-cover"/>
              <h1 className="my-2 text-center font-bold">Forty Rules Of Love</h1>
              <h2 className="text-center text-green-900">₹399</h2>
            </div>
          </div>
         </section>

         <section className="w-full my-5 mx-5 mt-5">
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="px-4">
              <h1 className="text-center text-2xl my-1 font-bold">FEATURED AUTHORS</h1>
              <h1 className="text-center text-3xl my-1 font-semibold">CAIVATE WITH EVERY WORDS</h1>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio similique animi iste eius ab veritatis amet asperiores aperiam quaerat officiis, inventore nisi ipsam? Facilis a eos repellat expedita possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet laborum unde cum porro, esse perspiciatis voluptatum eius nesciunt incidunt fuga cumque? In, expedita nihil. Aspernatur numquam nisi illum esse!
              </p>
               <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odio similique animi iste eius ab veritatis amet asperiores aperiam quaerat officiis, inventore nisi ipsam? Facilis a eos repellat expedita possimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet laborum unde cum porro, esse perspiciatis voluptatum eius nesciunt incidunt fuga cumque? In, expedita nihil. Aspernatur numquam nisi illum esse!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum laudantium aspernatur modi nam. Assumenda eligendi at consequatur a veritatis obcaecati, sint soluta nihil, pariatur maiores amet eaque nobis doloribus accusamus?
              </p>
            </div>
            <div className="px-3 flex justify-center items-center">
             <img src="https://kashmirlife.net/wp-content/uploads/2020/09/Turkish-Novelist-Elif-Shafak.jpg" alt=""
             height={'350px'} width={'350px'} />
            </div>
          </div>
         </section>

         <section className="w-full px-5 my-4">
           <h1 className="text-center text-xl font-bold">Testimonials</h1>
           <h1 className="text-center my-2 text-2xl font-semibold">See what other people are saying</h1>
           <div className='flex flex-col items-center mb-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiltHrAC0sf9iDs5okSkJaUA2S95aBeGg_l9JM2hDhkRpGYJ5n74wVB-5q&s=10" alt="" className="w-75 h-75 rounded-full" />
            <h1 className='font-bold'>Elif Shafak</h1>
           </div>
           <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eius ut est, quibusdam ducimus autem, similique dolorum voluptatum corporis, vitae et assumenda! Explicabo laudantium obcaecati modi animi itaque tenetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magni harum adipisci facere ipsam et est sed ratione facilis, quae doloremque libero labore incidunt quibusdam dolor. Odit deleniti sit rem!
          </p>  
         </section>
         
       </div>
       
       <Footer/>

      </>
    }
    </>
  )
}

export default Home