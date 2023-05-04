import React, { useState } from 'react'

const ProductIdInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)

    const handlePlus = () => setQuantity(quantity + 1)
const handleMinus = () => {
    if (quantity - 1 >= 1)
    setQuantity(quantity - 1)
}

  return (
    <section>
<h3>{product?.brand}</h3>
<h2>{product?.title}</h2>
<p>{product?.description}</p>
<footer>
    <div>
        <span>Price</span>
        <span>{product?.price}</span>
    </div>
    <div>
        <span>Quantity</span>
        <div>
<button onClick={handleMinus}>-</button>
<button>{quantity}</button>
<button onClick={handlePlus}>+</button>
        </div>
    </div>
    <button>Add to cart <i className='bx bx-cart btn_produtId'></i></button>
</footer>
    </section>
  )
}

export default ProductIdInfo