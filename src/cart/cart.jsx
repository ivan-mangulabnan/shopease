import { Image } from "../product-card/card.jsx";
import { CartContext } from "../cart-context.jsx";
import { useContext } from "react";

function Cart () {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div data-testid='cart-page'>
      { cart.length > 0 && cart.map(item => <Item item={item} setCart={setCart}/>) }
      { cart.length > 0 && <Total cart={cart}/> }
    </div>
  )
}

const Item = ({ item, setCart }) => {
  return (
    <div>
      <div>
        <button type='button'>REMOVE</button>
      </div>
      <Image source={item.image} />
      <h2>{ item.title }</h2>
      <p>{ item.quantity }</p>
      <p>
        <span>Price:</span>
        <span>{ Number(item.quantity) * Number(item.price) }</span>
      </p>
    </div>
  )
}

const Total = ({ cart }) => {
  const totalPrice = cart.reduce((total, current) => {
    const TotalPerItem = Number(current.quantity) * Number(current.price);
    return total += TotalPerItem;
  }, 0);

  return (
    <p>
      <span>TOTAL:</span>
      <span>{ totalPrice }</span>
    </p>
  )
}

export default Cart;