
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { bookDetailApi } from '../../services/allApi'
import Modal from '../../components/Modal'
import { loadStripe } from '@stripe/stripe-js';
import { bookPaymentApi } from '../../services/allApi'
import { ToastContainer, toast } from 'react-toastify'

function BookDetails() {

  const { bid } = useParams()

  const [book, setBook] = useState()

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    getBookDetails()
  }, [bid])

  const getBookDetails = async () => {
    const response = await bookDetailApi(bid)
    if (response.status === 200) {
      setBook(response.data)
    }
  }

  const handlePaymnet = async (book) => {
    console.log(book)
    const stripe = await loadStripe(import.meta.env.VITE_stripe)
    console.log(stripe)

    const response = await bookPaymentApi(bid)
    console.log(response)
    if (response.status == 200) {
      const checkoutUR = response.data?.url
      window.location.href = checkoutUR
    }
    else {
      toast.warning("something went wrong")
    }
  }


  return (
    <>
      <Header />

      {
        book && (
          <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 px-4 py-12">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-2xl">

              {/* Book Image - Center */}
              <div className="flex justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 px-6 py-10">
                <div className="rounded-2xl bg-white p-4 shadow-lg">
                  <img src={book.imageUrl} alt={book.title} className="h-80 w-full max-w-xs object-contain" />
                </div>
              </div>

              {/* Book Details */}
              <div className="space-y-7 p-6 sm:p-10">

                {/* Title and Author */}
                <div className="text-center">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-600"> Discover Your Next Read</p>

                  <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">{book.title}</h1>

                  <button className='hover:text-amber-950 rounded-3xl font-extrabold text-amber-700' onClick={() => setIsOpen(true)}>
                    View Images
                  </button>

                  <p className="mt-3 text-lg text-gray-500">
                    By <span className="font-semibold text-amber-700">{book.author}</span>
                  </p>
                </div>

                {/* Price */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                  <p className="mb-2 text-sm font-medium text-gray-500"> Book Price</p>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {
                      book.discountPrice != null &&
                      Number(book.discountPrice) < Number(book.price) && (
                        <span className="text-lg text-gray-400 line-through">
                          ₹{book.price}
                        </span>
                      )}

                    <span className="text-3xl font-extrabold text-amber-700">
                      ₹
                      {
                        book.discountPrice != null &&
                          Number(book.discountPrice) < Number(book.price)
                          ? book.discountPrice
                          : book.price
                      }
                    </span>

                    {
                      book.discountPrice != null &&
                      Number(book.discountPrice) < Number(book.price) &&
                      Number(book.price) > 0 && (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          {
                            Math.round(
                              ((Number(book.price) - Number(book.discountPrice)) /
                                Number(book.price)) * 100
                            )}
                          % OFF
                        </span>
                      )}
                  </div>
                </div>

                {/* Book Information */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Publisher', value: book.publisher },
                    { label: 'Language', value: book.language },
                    { label: 'ISBN', value: book.isbn },
                    { label: 'Category', value: book.category },
                    { label: 'Pages', value: book.noOfpages },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-gray-100 p-5 transition hover:border-amber-300 hover:bg-amber-50">
                      <p className="mb-1 text-sm font-medium text-gray-400"> {item.label} </p>
                      <p className="break-words font-semibold text-gray-800"> {item.value || 'Not specified'}</p>
                    </div>
                  ))}
                </div>

                {/* About Book */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">About This Book</h2>

                  <p className="whitespace-pre-line leading-8 text-gray-600">
                    {book.abstract || 'No description available.'}
                  </p>
                </div>

                {/* Buy Button */}
                <button onClick={() => handlePaymnet(book)} className="w-full rounded-xl bg-amber-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-amber-700 hover:shadow-xl">
                  Buy Now  {''} <p>Rs.{book.discountPrice}</p>
                </button>

              </div>

              <ToastContainer position='top-center' autoClose={'3000'} />
            </div>
          </div>
        )}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={book?.uploadedImages}
      />


      <Footer />
    </>
  )
}

export default BookDetails