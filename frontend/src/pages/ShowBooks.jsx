import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
function ShowBooks() {
  const [book,setBook]=useState({})
  const [loading,setLoading]= useState(false)
  const [error,setError]= useState(null)
  const {id}= useParams()
  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:3001/api/books/${id}`).then((response)=>{
      setBook(response.data)
      setError(null)
      setLoading(false)
    }).catch((error)=>{
      setError(error.message)
      setLoading(false)
    })
  },[id])
  console.log(book);
  return (
    <div className='p-4 '>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading && <Spinner/>}
      {error && <p>{error}</p>}
      {!error && !loading &&
      <div className='flex flex-col border-2 border-sky-400 w-fit rounded-xl p-4'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Title</span>
          <span >{book.title}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Author</span>
          <span >{book.author}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>PUblish Year</span>
          <span >{book.publishYear}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Create Time</span>
          <span >{book.createdAt}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Last Updated</span>
          <span >{book.updatedAt}</span>
        </div>
      </div>
      }
    </div>
  )
}

export default ShowBooks