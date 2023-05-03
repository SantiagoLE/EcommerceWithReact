import React from 'react'

const CardProduct = ({product}) => {
console.log(product);

  return (
    <article>
        <header>
            <img src={product.images[0].url} alt={product.title} />
            </header>
            <section>
                <h4>{product.brand}</h4>
                <h3>{product.title}</h3>
            </section>
            <div>
                <span>Price</span>
                <span>{product.price}</span>
            </div>
            <button>
            <i class='bx bxs-cart' ></i>
            </button>
    </article>
  )
}

export default CardProduct