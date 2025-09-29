import { Outlet } from "react-router"

function Shop () {
  return (
    <div data-testid='shop-page'>
      I'm Shop!
      <Outlet />
    </div>
  )
}



function ProductCard ({ product }) {
  return (
    <form>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </form>
  )
}

const Image = ({ source, altText = '' }) => {
  return (
    <div>
      <img src={source} alt={altText} />
    </div>
  )
}

const ProductButtons = () => {
  return (
    <div>
      <button type='submit'>Add To Cart</button>
    </div>
  )
}

const Quantity = () => {
  return (
    <div>
      <button type='button'>Decrease</button>
      <input name="quantity" type='text' required/>
      <button type='button'>Increase</button>
    </div>
  )
}

export default Shop;