import Logo from "../logo/logo.jsx";
import NavBar from "../navbar/navbar.jsx";

function Banner () {
  return (
    <div data-testid='banner'>
      <Logo />
      <NavBar />
    </div>
  )
}

export default Banner;