import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { booklistApi } from '../../services/allApi'
import { useEffect, useState,useContext } from 'react'
import { SearchContext } from '../../contextApi/SharedContext'
import {Link} from 'react-router-dom'

function Books() {

  const [booklist, setBooklist] = useState([])
  const [filter, setFilter] = useState([])
  const [dummyList, setDummyList] = useState([])
  const {search,setSearch}=useContext(SearchContext)

  const handleSearch = () => {
    const books = dummyList.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    setBooklist(books)
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      handleBooklist()
    }
  }, [])

  useEffect(() => {
    handleSearch(search)
  }, [search])

  const handleBooklist = async () => {
    const response = await booklistApi()
    if (response.status === 200) {
      setBooklist(response.data)
      setDummyList(response.data)
      const category_set = new Set(response.data.map((item) => item.category))
      setFilter([...category_set])
    }
  }

  const filterBooks = (filter) => {
    if (filter) {
      const filteredBooks = dummyList.filter(
        item => item?.category === filter
      )
      setBooklist(filteredBooks)
    } else {
      setBooklist(dummyList)
    }
  }

  return (
    <>

      <Header />

      <div className="w-full p-10">
        <div>
          <h1 className="text-center font-bold mt-3">Collections</h1>
          <div className="flex justify-center">
            <input type="search"  onChange={(e)=>{setSearch(e.target.value)}} className='p-2 border m-5 w-[50%]' placeholder='Search By title' />
          </div>
        </div>

        <div className="grid sm:grid-col-1 md:grid-col-12 gap-2" >
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Filters</h1>
            </div>
            <div className="my-3 flex flex-col gap-2">
              <label htmlFor=""><input type="radio" onClick={() => { filterBooks("") }} name="filter" id="" /> No-Filter</label>
              {
                filter.map((item) => (
                  <label htmlFor=""><input type="radio" onClick={() => { filterBooks(item) }} name="filter" id="" /> {item}</label>
                ))
              }

            </div>
          </div>

          <div className="col-span-2">
            <div className="w-full">
              {
                booklist.length > 0 ?
                  <div className="flex flex-wrap justify-around my-5">
                    {
                      booklist.map((item) => (
                        <div className="w-[16rem] shadow-2xl p-3">
                          <Link to={`/booksdetail/${item._id}`}>
                          <img src={item.imageUrl} alt={item.title} className="h-75 w-full object-cover" />
                          </Link>
                          <h1 className="my-2 text-center font-bold">{item.title}</h1>
                        </div>
                      ))
                    }
                  </div>
                  :
                  <div className="flex justify-center items-center h-[50vh]">
                    <img src="https://y.getyarn.io/34d3abe4-e7eb-4308-895d-e386731a57d9_text.gif" alt="" />
                  </div>
              }
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default Books