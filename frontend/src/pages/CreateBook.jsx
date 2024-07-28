import React,{useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CreateBook() {
  const [title,setTitle]=useState('')
  const [author,setAuthor]=useState('')
  const [publishYear,setPublishYear]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]= useState(null)

  const navigate = useNavigate()

  const handleSubmit = ()=>{
    const book = {
      title , author, publishYear 
    }
    setLoading(true)
    axios.post(`http://localhost:3001/api/books`,book).then((res)=>{
      setLoading(false)
      setError(null)
      console.log(res.data);
      navigate('/')
    }).catch((error)=>{
      setError(error.message)
      setLoading(false)
    })

  }


  return (
  

    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='title'>Title</label>
          <input type="text" value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='title'/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='author'>Author</label>
          <input type="text" value={author} onChange={(e)=>{
            setAuthor(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='author'/>
        </div>
        <div className="my-4">
          <label className='text-xl mr-4 text-gray-500' htmlFor='publishYear'>Publish Year</label>
          <input type="number" value={publishYear} onChange={(e)=>{
            setPublishYear(e.target.value)
          }} 
          className='border-2 border-gray-500 px-4 py-2 w-full rounded-sm' id='publishYear'/>
        </div>
        <button className='p-2 bg-sky-300 m-8 rounded-sm' onClick={handleSubmit}>save</button>
      </div>
      
    </div>
  )
}

export default CreateBook