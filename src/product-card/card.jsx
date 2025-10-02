import { useContext, useState } from "react"
import { CartContext } from "../cart-context.jsx";

function ProductCard ({ product }) {
  return (
    <div>
      <Image source={product.image}/>
      <h2 data-testid='prodTitle'>{product.title}</h2>
      <p data-testid='prodPrice'>{product.price}</p>
      <ProductButtons product={product}/>
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

const ProductButtons = ({ product }) => {
  const [inputVal, setInputVal] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  const isInvalid = !inputVal || isNaN(inputVal) || Number(inputVal) < 0 || Number(inputVal) === -0;

  const handleInputChange = (event) => {
    setInputVal(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isInvalid) return;
    
    const isProductAlreadyPresent = cart.some(item => item.id === product.id);

    if (isProductAlreadyPresent) {
      return setCart(prev => prev.map(item => {
        return product.id === item.id ? { ...item, quantity: item.quantity + Number(inputVal) } : item;
      }))
    }

    setCart(prev => [...prev, { id: product.id, quantity: Number(inputVal) }]);
  }

  const increment = () => {
    if (isNaN(inputVal)) return; // Allows zero and negatives to be incremented.
    setInputVal(prev => Number(prev) + 1);
  }

  const decrement = () => {
    if (isInvalid) return;
    setInputVal(prev => Number(prev) - 1);
  } 

  return (
    <form data-testid='productButtonsComponent' onSubmit={handleSubmit}>
      <button type='submit'>Add To Cart</button>
      <Quantity value={inputVal} onChange={handleInputChange} handleDecrement={decrement} handleIncrement={increment} isInvalid={isInvalid}/>
    </form>
  )
}

const Quantity = ({ value, onChange, handleIncrement, handleDecrement, isInvalid }) => {

  return (
    <div data-testid='quantityComponent'>
      <button disabled={isInvalid} data-testid='decrementBtn' type='button' onClick={handleDecrement}>Decrease</button>
      <input name="quantity" type='text' placeholder="0" value={value} onChange={onChange} required/>
      <button data-testid='incrementBtn' type='button' onClick={handleIncrement}>Increase</button>
    </div>
  )
}

export { Image, ProductButtons, Quantity };
export default ProductCard;