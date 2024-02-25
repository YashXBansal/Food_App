import React, { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';

interface CardProps {
  img: string;
  description: string;
  categoryName: string;
  name: string;
}

const Card: React.FC<CardProps> = ({ img, description, categoryName, name }) => {
  const [price, setPrice] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);
  const [portion, setPortion] = useState<string>('full');
  const gstRate = 0.18;
  const [totalPrice, setTotalPrice] = useState<number>(price * (1 + gstRate));
  const { dispatch } = useCart();

  useEffect(() => {
    const portionMultiplier = portion === 'full' ? 1 : 0.5;
    setTotalPrice((price * quantity * portionMultiplier) * (1 + gstRate));
  }, [quantity, portion, price]);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handlePortionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPortion = event.target.value;
    setPortion(newPortion);
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: Math.random().toString(),
        name,
        price,
        quantity,
      },
    });
    alert(`${name} added to cart`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 md:p-6 m-4">
      <img src={img} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="mt-4">
        <h2 className="text-gray-900 font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <p className="text-gray-700 text-sm mb-2">Category: {categoryName}</p>
        <div className="flex items-center mb-4">
          <label htmlFor="quantity" className="mr-2 text-gray-700">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className="border border-gray-300 rounded-md py-1 px-2 text-sm w-16 mr-2 bg-gray-100 text-gray-700"
          />
          <select
            value={portion}
            onChange={handlePortionChange}
            className="border border-gray-300 rounded-md py-1 px-2 text-sm text-gray-700 bg-gray-100"
          >
            <option value="full">Full</option>
            <option value="half">Half</option>
          </select>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-700">
            <span>Price (excl. GST):</span>
            <span className="block">₹{price.toFixed(2)}</span>
          </div>
          <div className="text-gray-700 ml-4 mr-4">
            <span>GST (18%):</span>
            <span className="block">₹{(price * quantity * gstRate).toFixed(2)}</span>
          </div>
          <div className="text-gray-700">
            <span>Total Price (incl. GST):</span>
            <span className="block">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button className="bg-green-500 text-white p-2 rounded mt-2" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
