import React from 'react'
import useCrudCart from '../../hooks/useCrudCart';

const ProductInCart = ({prodCart}) => {

const {deleteProductFromCart} = useCrudCart()


  const handleDelete = () => {
    deleteProductFromCart(prodCart.id)
  }

  console.log(prodCart);
  return (
    <article>
<header>
<img src={prodCart.product.images[0].url} alt={prodCart.product.title} />
</header>

<section>
  <h3>{prodCart.product.title}</h3>
</section>
<button onClick={handleDelete}>
<i className='bx bx-trash'></i>
</button>
<footer>
  <span>{prodCart.quantity}</span>
  <div>
    <span>Subtotal:</span>
    <span>{prodCart.quantity * prodCart.product.price}</span>
  </div>
</footer>
    </article>
  )
}

export default ProductInCart