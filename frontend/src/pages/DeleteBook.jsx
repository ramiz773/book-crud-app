import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

function DeleteBook() {
  const [loading,setLoading]= useState(false)
  const [error,setError]=useState(null)
  const navigate = useNavigate()

  const {id}= useParams()
  const handleDeleteBook = ()=>{
    axios.delete(`http://localhost:3001/api/books/${id}`).then(()=>{
      setLoading(false)
      setError(null)
      navigate('/')
    }).catch((err)=>{
      console.log(err.message);
      setError(err.message)
      setLoading(false)
    })
  }
  return (
    <div className='p-4'>
       <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1> 
      {loading && <Spinner/>}
      {error && <p>{error.message}</p>}
      {!loading && !error && 
      <div className='felx flex-col justify-center items-center border-2 border-sky-400 rouded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl text-center'>Are you sure you want to delete this book</h3>
        <button className="p-4 bg-red-600 text-white my-8 w-full" onClick={handleDeleteBook}>
          Delete it </button>
      </div>
      }
    </div>
  )
}

export default DeleteBook