import { Link } from "react-router";
import { CartContext } from "../cart-context.jsx";
import { useContext } from "react";

function NavBar () {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
          <p data-testid='cartCount'>{ cart.length }</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;