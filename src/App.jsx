import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import {getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [] )


  return (
    < div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
      
      </Routes>



    </div>
  )
}

export default App
