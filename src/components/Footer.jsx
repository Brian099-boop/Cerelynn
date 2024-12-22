import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B7D8E6] py-4 mt-8">
      <div className="text-center text-gray-800">
        <p>&copy; 2024 My E-Commerce Site. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/about" className="hover:text-blue-500">About Us</a> | 
          <a href="/contact" className="hover:text-blue-500 ml-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
