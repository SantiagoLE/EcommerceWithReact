import { useSelector } from 'react-redux'
import CardProduct from '../components/home/CardProduct'
import "./styles/home.css"
import { useRef, useState } from 'react'
import FilterCategory from '../components/home/FilterCategory'
import FilterByPrice from '../components/home/FilterByPrice'

const Home = () => {
    const {productsGlobal} = useSelector(state => state)

const [inputValue, setInputValue] = useState("")

const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
})

    const input = useRef()

    const handleChangeInput = ( ) => {
setInputValue(input.current.value.toLowerCase().trim())
    }

    const productFilter = productsGlobal
    ?.filter(prod => prod.title.toLowerCase().trim().includes(inputValue))
.filter(prod => {
    const from = +fromTo.from
    const to = +fromTo.to
    const price = +prod.price
    if(from && to){
        return from <= price && price <= to
    }
    if (from && !to){
        return from <= price
    }
    if (!from && to){
        return price <= to
    }
    if(!from && !to){
        return true
    }
})



    return (
      <div className='cardProducts-cotain'>
        <input ref={input} onChange={handleChangeInput} type="text" />

        <FilterCategory/>
        
        <FilterByPrice setFromTo={setFromTo}/>
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