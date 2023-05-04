import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import {getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import Header from './pages/shared/Header'
import ProductId from './pages/ProductId'



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [] )


  return (
    < div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductId/>}/>
      </Routes>



    </div>
  )
}

export default App
