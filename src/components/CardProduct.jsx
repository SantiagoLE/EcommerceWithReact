import React from 'react'
import "./styles/cardProduct.css"

const CardProduct = ({ product }) => {
  console.log(product);

  return (
    <article className='cardProduct'>
      <header className='cardProdcut_img_contain'>
        <img className='cardProduct_img' src={product.images[0].url} alt={product.title} />
      </header>
      <section className='cardProduct_section'>
        <h4 className='cardProduct_marca'>{product.brand}</h4>
        <h3 className='cardProduct_name'>{product.title}</h3>
      </section>
          <span className='cardProduct_price-title'>Price</span>
          <span className='cardProduct_price-value'>$ {product.price}</span>
        <button className='cardProduct_icon-cart'>
        <i className='bx bxs-cart' ></i>
        </button>
    </article>
  )
}

export default CardProduct