import { Link } from "react-router-dom";
import logo from "../assets/V Polish & Co logo.png";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo-container">
        <img src={logo} alt=" V Polish & Co." className="logo-img" />
        <h2 className="logo-text"> V Polish & Co.</h2>
    </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Book Now</Link>
      </div>
    </nav>
  );
}

export default Navbar;