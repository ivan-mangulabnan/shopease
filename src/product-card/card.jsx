import { useContext, useState } from "react"
import { CartContext } from "../cart-context.jsx";

function ProductCard ({ product }) {
  return (
    <div>
      <Image source={product.image}/>
      <h2 data-testid='prodTitle'>{product.title}</h2>
      <p data-testid='prodPrice'>{product.price}</p>
      <ProductButtons />
    </div>
  )
}

const Image = ({ source, altText = '' }) => {
  return (
    <div data-testid='imageComponent'>
      <img src={source} alt={altText} />
    </div>
  )
}

const ProductButtons = () => {
  const [inputVal, setInputVal] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCart();
  }

  const increment = () => {
    setInputVal(prev => Number(prev) + 1);
  }

  const decrement = () => {
    if (Number(inputVal) <= 0) return;
    setInputVal(prev => Number(prev) - 1);
  } 

  return (
    <form data-testid='productButtonsComponent' onSubmit={handleSubmit}>
      <button type='submit'>Add To Cart</button>
      <Quantity value={inputVal} onChange={handleInputChange} handleDecrement={decrement} handleIncrement={increment}/>
    </form>
  )
}

const Quantity = ({ value, onChange, handleIncrement, handleDecrement }) => {

  const isValueInvalid = value === '' || isNaN(value);
  const isNegative = value < 0;

  return (
    <div data-testid='quantityComponent'>
      <button disabled={isValueInvalid} data-testid='decrementBtn' type='button' onClick={handleDecrement}>Decrease</button>
      <input name="quantity" type='text' placeholder="0" value={value} onChange={onChange} required/>
      <button disabled={isValueInvalid} data-testid='incrementBtn' type='button' onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export { Image, ProductButtons, Quantity };
export default ProductCard;