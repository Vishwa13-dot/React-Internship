import { Link } from "react-router-dom";
import logo from "../assets/V Polish & Co logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h2 className="text-2xl font-bold text-pink-600">
            V Polish & Co.
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="hover:text-pink-600 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-pink-600 transition duration-300"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="hover:text-pink-600 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition duration-300"
          >
            Book Now
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;