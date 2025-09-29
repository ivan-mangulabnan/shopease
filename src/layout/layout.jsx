import { Outlet, Link } from "react-router";
import styles from './layout.module.css';

function Layout () {
  return (
    <div className={styles.layout}>
      <Banner />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Logo />
      <NavBar />
    </div>
  )
}

const Logo = () => {
  return <h1 className={styles.logo}>ShopEase</h1>;
}

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Layout;