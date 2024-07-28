import React from 'react'
import {Routes,Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import ShowBooks from './pages/ShowBooks'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'

const App = () => {
  return (
    <div className=' text-black'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/create' element={<CreateBook/>}/>
        <Route path='/book/details/:id' element={<ShowBooks/>}/>
        <Route path='/book/edit/:id' element={<EditBook/>}/>
        <Route path='/book/delete/:id' element={<DeleteBook/>}/>
      </Routes>
    </div>
  )
}

export default App