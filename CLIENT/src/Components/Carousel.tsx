import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons

const Carousel: React.FC = () => {
  const foodItemImages = [
    'https://imgmedia.lbb.in/media/2019/06/5d00d22c7d22ab29a877f01b_1560334892622.jpg',
    'https://static.toiimg.com/thumb/width-600,height-400,msid-59108535.cms',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState<string[]>(foodItemImages);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? foodItemImages.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === foodItemImages.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
  
    return () => clearInterval(interval);
  }, []); // Only runs once on component mount

  useEffect(() => {
    setFilteredImages(
      foodItemImages.filter((imageUrl) => imageUrl.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]); // Only update when searchQuery changes

  return (
    <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-80">
        {/* Map over food item images and create carousel items */}
        {filteredImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item=""
          >
            <img
              src={imageUrl}
              className="absolute inset-0 w-full h-full object-cover transition-opacity"
              alt={`Food Item ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/50 rounded-full hover:bg-black-300 focus:outline-none"
        data-carousel-prev=""
        onClick={goToPrevSlide}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white/50 rounded-full hover:bg-gray-300 focus:outline-none"
        data-carousel-next=""
        onClick={goToNextSlide}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Search bar */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center">
        <FiSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          className="w-40 sm:w-64 py-2  pl-8 pr-3 bg-transparent border border-gray-300 rounded-full text-sm focus:outline-none focus:border-blue-500 text-cyan-500"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Carousel;
