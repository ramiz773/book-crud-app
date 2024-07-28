import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import axios from 'axios'

function EditBook() {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [publishYear,setPublishYear]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]= useState(null)
  const navigate = useNavigate()
const {id}=useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3001/api/books/${id}`).then((res)=>{
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false)
      setError(null)
    }).catch((error)=>{
      setError(error.message)
      setLoading(false)
    })
  },[])

  const handleEditBook = ()=>{
    const book = {
      title , author, publishYear 
    }
    setLoading(true)
    axios.put(`http://localhost:3001/api/books/${id}`,book).then((res)=>{
      setLoading(false)
      setError(null)
      console.log(res.data);
      navigate('/')
    }).catch((error)=>{
      setError(error.message)
      console.log(error.message);
      setLoading(false)
    })

  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='title'>Title</label>
          <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='title' required/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='author'>Author</label>
          <input type="text" value={author} onChange={(e)=>{
            setAuthor(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='author'required/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='publishYear'>Publish Year</label>
          <input type="number" value={publishYear} onChange={(e)=>{
            setPublishYear(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='publishYear'required/>
        </div>
        <button className='p-2 bg-sky-300 m-8 rounded-sm' onClick={handleEditBook}>save</button>
      </div>
      
    </div>
  )
}

export default EditBook