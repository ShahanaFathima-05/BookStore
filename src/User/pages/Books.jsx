import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Books() {
  return (
    <>
    
    <Header/>

    <div className="w-full p-10">
      <div>
        <h1 className="text-center font-bold mt-3">Collections</h1>
        <div className="flex justify-center">
          <input type="search" className='p-2 border m-5 w-[50%]' placeholder='Search By title' />
        </div>
      </div>

      <div className="grid sm:grid-col-1 md:grid-col-12 gap-2" >
        <div className="col-span-2">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Filters</h1>

          </div>
          <div className="my-3">
            <label htmlFor=""><input type="radio" name="" id="" /> No-Filter</label>
          </div>
        </div>

        <div className="col-span-2">
          <div className="w-full">
            <div className="flex flex-wrap justify-around my-5">
            <div className="w-[16rem] shadow-2xl p-3">
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRvdgaJ2gjdr9IwrNGGQNpNkCAcnXLD6MUtSZOZvyyJqOo6YLMyj8M69PLdXSUFPZ1Y_leMIbFyUuZaWmu2tuF9oMxMaMm5ixfPahzYxtU&usqp=CAc" alt=""className="h-75 w-full object-cover"/>
              <h1 className="my-2 text-center font-bold">Forty Rules Of Love</h1>
              <h2 className="text-center text-green-900">₹399</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>

    </>
  )
}

export default Books