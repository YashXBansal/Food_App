import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const foodItemImages = [
    'https://i.pinimg.com/originals/eb/54/50/eb5450de8f647299d97b11e859200cb7.jpg',
    'https://i.pinimg.com/736x/b2/19/5d/b2195de6497b63689f22aa726ddfca17.jpg',
    'https://i.pinimg.com/736x/de/86/b5/de86b51e081ad1dc12e3d7df07ecbbd1.jpg',
    'https://curlygirlkitchen.com/wp-content/uploads/2021/11/Chocolate-Truffle-Cake-Custard-Ganache-Chips-High-Altitude-001.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? foodItemImages.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === foodItemImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []); // Only runs once on component mount

  return (
    <div className="relative w-full bg-red-200 rounded-lg overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-96 md:h-80 lg:h-96 xl:h-96">
        {/* Map over food item images and create carousel items */}
        {foodItemImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
            data-carousel-item=""
          >
            <img
              src={imageUrl}
              className="absolute inset-0 object-cover object-center"
              style={{height: '100%', width: "100%", objectFit: 'contain'}}
              alt={`Food Item ${index + 1}`}
              // Set aspect ratio based on screen size
             
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
    </div>
  );
};

export default Carousel;
