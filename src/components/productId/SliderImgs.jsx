import React from 'react'
import "./styles/sliderImg.css"

const SliderImgs = ({product}) => {
  
    return (
    <div>
        <img  className='sliderImg' src={product?.images[0].url} alt="" />
    </div>
  )
}

export default SliderImgs