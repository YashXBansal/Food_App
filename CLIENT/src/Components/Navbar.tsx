import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">Food Delivery App</Link>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <Link to="/" onClick={closeDrawer} className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Home</Link>
            <Link to="/menu" onClick={closeDrawer} className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Menu</Link>
            <Link to="/cart" onClick={closeDrawer} className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Cart</Link>
            <Link to="/login" onClick={closeDrawer} className="px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Login</Link>
          </div>
          <div className="flex sm:hidden">
            <button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Main menu"
              aria-expanded={isDrawerOpen ? 'true' : 'false'}
            >
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div ref={drawerRef} className="sm:hidden bg-gray-800 absolute top-0 right-0 w-64 h-full z-50">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-2">
              <Link to="/" className="text-white text-lg font-semibold">Menu</Link>
              <button
                onClick={closeDrawer}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col mt-4">
              <Link to="/" onClick={closeDrawer} className="px-4 py-2 text-sm text-white hover:bg-gray-700">Home</Link>
              <Link to="/menu" onClick={closeDrawer} className="px-4 py-2 text-sm text-white hover:bg-gray-700">Menu</Link>
              <Link to="/cart" onClick={closeDrawer} className="px-4 py-2 text-sm text-white hover:bg-gray-700">Cart</Link>
              <Link to="/login" onClick={closeDrawer} className="px-4 py-2 text-sm text-white hover:bg-gray-700">Login</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
