import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, price, image }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [portion, setPortion] = useState<string>('full');
  const gstRate = 0.18; // GST rate of 18%
  const [totalPrice, setTotalPrice] = useState<number>(price * (1 + gstRate));

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setTotalPrice((price * newQuantity) * (1 + gstRate));
  };

  const handlePortionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPortion = event.target.value;
    setPortion(newPortion);
    // Adjust total price based on portion and quantity
    const portionMultiplier = newPortion === 'full' ? 1 : 0.5;
    setTotalPrice((price * quantity * portionMultiplier) * (1 + gstRate));
  };

  return (
    <div className="bg-black shadow-md rounded-md p-4 w-64">
      <img src={image} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h2 className="text-lg font-semibold mb-2 text-white">{title}</h2>
      <p className="text-gray-400 mb-2">{description}</p>
      <div className="flex items-center mb-2">
        <label htmlFor="quantity" className="mr-2 text-gray-300">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="border border-gray-300 rounded-md py-1 px-2 text-sm w-16 mr-2 bg-gray-800 text-gray-300"
        />
        <select
          value={portion}
          onChange={handlePortionChange}
          className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-300 bg-gray-800"
        >
          <option value="full" className="bg-gray-800">Full</option>
          <option value="half" className="bg-gray-800">Half</option>
        </select>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-300">Price (excl. GST):</span>
        <span className="text-gray-300">${price.toFixed(2)}</span>
      </div>   
      <div className="flex justify-between">
        <span className="text-gray-300">GST (18%):</span>
        <span className="text-gray-300">${(price * quantity * gstRate).toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-300">Total Price (incl. GST):</span>
        <span className="text-gray-300">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Card;
