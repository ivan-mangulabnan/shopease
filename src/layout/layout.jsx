import { Outlet } from "react-router";
import Banner from "../banner/banner.jsx";
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

export default Layout;