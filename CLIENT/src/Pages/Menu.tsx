import React from 'react';

function Menu() {
  const foodItems = [
    { name: 'Sushi', cuisine: 'Japanese', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Pizza', cuisine: 'Italian', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Taco', cuisine: 'Mexican', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Burger', cuisine: 'American', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Pad Thai', cuisine: 'Thai', price: 'keeping it real', image: 'pad-https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Croissant', cuisine: 'French', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Sushi Roll', cuisine: 'Japanese', price: 'keeping it real', image: 'sushi-https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Pasta', cuisine: 'Italian', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Taco Salad', cuisine: 'Mexican', price: 'keeping it real', image: 'taco-https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Steak', cuisine: 'American', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Tom Yum Soup', cuisine: 'Thai', price: 'keeping it real', image: 'tom-yum-https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Macarons', cuisine: 'French', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Tempura', cuisine: 'Japanese', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Lasagna', cuisine: 'Italian', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
    { name: 'Burrito', cuisine: 'Mexican', price: 'keeping it real', image: 'https://www.shutterstock.com/image-photo/fettuccine-pasta-italian-cuisine-260nw-1010843569.jpg' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Our Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {foodItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">Cuisine: {item.cuisine}</p>
              <p className="text-gray-600 mb-2">Price: {item.price}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
