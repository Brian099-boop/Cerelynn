import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to toggle the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#B7D8E6] h-20 shadow-md fixed top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="flex justify-between items-center w-full h-full px-4">
        {/* Logo - Replaced text with image and made it circular */}
        <div className="flex justify-start items-center">
          <Link to="/">
            <img src="/ogol.jpg" alt="Logo" className="h-14 w-14 rounded-full" /> {/* Rounded logo */}
          </Link>
        </div>

        {/* Navbar Links */}
        <nav className="flex justify-center items-center w-full">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-500 transition duration-200 text-xl">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-800 hover:text-blue-500 transition duration-200 text-xl">Blog</Link> {/* Replaced About with Blog */}
            </li>
            <li>
              <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition duration-200 text-xl">Contact</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-800 hover:text-blue-500 transition duration-200 text-xl">Products</Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu (For Mobile) */}
        <button 
          className="md:hidden text-gray-800" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#B7D8E6] text-center py-4 space-y-4">
          <Link to="/" className="block text-gray-800 hover:text-blue-500 transition duration-200">Home</Link>
          <Link to="/blog" className="block text-gray-800 hover:text-blue-500 transition duration-200">Blog</Link> {/* Replaced About with Blog */}
          <Link to="/contact" className="block text-gray-800 hover:text-blue-500 transition duration-200">Contact</Link>
          <Link to="/products" className="block text-gray-800 hover:text-blue-500 transition duration-200">Products</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
