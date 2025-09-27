import { Outlet, Link } from "react-router";
import styles from './layout.module.css';

function Layout () {
  return (
    <div>
      <Banner />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

const Banner = () => {
  return (
    <div>
      <Logo />
      <NavBar />
    </div>
  )
}

const Logo = () => {
  return <h1>ShopEase</h1>;
}

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>Cart</Link>
    </nav>
  )
}

export default Layout;