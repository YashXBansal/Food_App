import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-sm">Hi, I am Yash.</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">Menu</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm">123 Street, City, Country</p>
            <p className="text-sm">info@example.com</p>
            <p className="text-sm">+123 456 7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          <p>&copy; 2024 Your Food Delivery App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
