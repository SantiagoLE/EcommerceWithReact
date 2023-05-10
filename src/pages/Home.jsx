import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import "./styles/home.css"
import { useRef, useState } from 'react'
import FilterCategory from '../components/home/FilterCategory'

const Home = () => {
    const {productsGlobal} = useSelector(state => state)
const [inputValue, setInputValue] = useState("")

    const input = useRef()

    const handleChangeInput = ( ) => {
setInputValue(input.current.value.toLowerCase().trim())
    }

    const productFilter = productsGlobal?.filter(prod => prod.title.toLowerCase().trim().includes(inputValue))

    return (
      <div className='cardProducts-cotain'>
        <input ref={input} onChange={handleChangeInput} type="text" />
        <FilterCategory/>
          {
              productFilter?.map(prod => (

                  <CardProduct
                  key={prod.id}
                  product={prod}
                  />
              ))
          }
      </div>
    )
}

export default Home