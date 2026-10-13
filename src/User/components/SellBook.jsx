import React from 'react'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { addBookApi } from '../../services/allApi'

function SellBook() {


    const [book,setBook]=useState({title:"",author:"",noOfpages:"",imageUrl:'',price:"",
        discountPrice:"",abstract:"",publisher:"",language:"",isbn:"",category:"",uploadedImages:[]
    })

    const [preview,setPreview]=useState('')
    const [previewList,setPreviewlist]=useState([])

    const handleFileupload=(e)=>{
        const fileBlob=e.target.files[0]
        const uplaodedfiles=book.uploadedImages
            uplaodedfiles.push(fileBlob)
            setBook({...book,uploadedImages:uplaodedfiles})
            setPreview(URL.createObjectURL(fileBlob))
            const demopreviewlist=previewList
            demopreviewlist.push(URL.createObjectURL(fileBlob))
            setPreviewlist(demopreviewlist)
        }
    

  
const handleSumbit = async () => {
    console.log(book)
    const {
        title, author, noOfpages, imageUrl, price,
        discountPrice, abstract, publisher, language,
        isbn, category, uploadedImages
    } = book

    if (
        !title || !author || !noOfpages || !imageUrl ||
        !price || !discountPrice || !abstract ||
        !publisher || !language || !isbn || !category ||
        uploadedImages.length === 0
    ) {
        alert('Enter valid Inputs')
    }
    else {
        console.log('Api Call')

        const formData = new FormData()

        for (let key in book) {
            if (key !== 'uploadedImages') {
                formData.append(key, book[key])
            }
            else {
                book.uploadedImages.forEach(img => {
                    formData.append('uploadedImages', img)
                })
            }
        }

        const response = await addBookApi(formData)

        if (response.status === 201) {
            alert("Book added successfully")

            setBook({
                title: "",
                author: "",
                noOfpages: "",
                imageUrl: "",
                price: "",
                discountPrice: "",
                abstract: "",
                publisher: "",
                language: "",
                isbn: "",
                category: "",
                uploadedImages: []
            })

            setPreview("")
            setPreviewlist([])
        }
        else{
            console.log(response)
        }
    }
}


  return (
    
  <div className="bg-amber-900 p-5 m-5 rounded-xl">

    <h1 className="text-center text-white text-2xl font-bold mb-5">Book Details</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* Left Column */}
      <div className="px-2">

        <input type="text" placeholder="Title" className="w-full bg-white p-3 mb-3 rounded" value={book.title} name='title' onChange={(e)=>{setBook({...book,title:e.target.value})}}/>
        <input type="text" placeholder="Author" className="w-full bg-white p-3 mb-3 rounded" value={book.author} name='author' onChange={(e)=>{setBook({...book,author:e.target.value})}}/>
        <input type="number" placeholder="No. of pages" className="w-full bg-white p-3 mb-3 rounded" value={book.noOfpages} name='noOfpages' onChange={(e)=>{setBook({...book,noOfpages:e.target.value})}}/>
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Image URL' value={book.imageUrl} name='imageUrl' onChange={(e)=>{setBook({...book,imageUrl:e.target.value})}}/>
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Price'  value={book.price} name='price' onChange={(e)=>{setBook({...book,price:e.target.value})}}/>
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Discount Price' value={book.discountPrice} name='discoutPrice' onChange={(e)=>{setBook({...book,discountPrice:e.target.value})}}/>
        <textarea name="abstract" placeholder='Abstract'  className="w-full bg-white p-3 mb-3 rounded" rows={'8'} id="" value={book.abstract} onChange={(e)=>{setBook({...book,abstract:e.target.value})}}></textarea>

      </div>

      {/* Right Column */}
      <div className="px-2">

        <input type="text" placeholder="Publisher" className="w-full bg-white p-3 mb-3 rounded" value={book.publisher} name='title' onChange={(e)=>{setBook({...book,publisher:e.target.value})}}/>
        <input type="text" placeholder="Language" className="w-full bg-white p-3 mb-3 rounded" value={book.language} name='langusge' onChange={(e)=>{setBook({...book,language:e.target.value})}}/>
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='ISBN' value={book.isbn} name='isbn' onChange={(e)=>{setBook({...book,isbn:e.target.value})}}/>
        <input type="text" className="w-full bg-white p-3 mb-3 rounded" placeholder='Category' value={book.category} name='category' onChange={(e)=>{setBook({...book,category:e.target.value})}}/>

        <label htmlFor="img">
            {
                !preview &&
                <input type="file" name="" id="img" className='hidden' onChange={(e)=>{handleFileupload(e)}} />
            }
          <img src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-3SDTEq5gqOtVna-CCX-Up_4F0U4Z72jg_8cVx__uA&s=10"} className='h-[100px] m-5' alt="" />
        </label>
        {
            preview &&
            <div className="flex justify-around items-center m-2">
                {
                    previewList.map(item=>(
                        <img src={item} className='h-[100px]' alt="" />
                    ))
                }
                {
                    previewList.length < 3 &&
                    <label htmlFor="previewimg">
                      <input type="file" className='hidden' id='previewimg' onChange={(e)=>{handleFileupload(e)}} />
                      <FaPlus className='text-xl'/>
                    </label>
                }
                
            </div>
        }

        <div className="flex justify-between">
            <button className="bg-white border text-black px-5 py-2 rounded" onClick={handleSumbit}>submit</button>
            <button className="bg-black text-white px-5 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SellBook