import React from 'react';
import { useCart } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const total = state.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>
      {state.cartItems.length === 0 ? (
        <div className="text-gray-600 text-xl font-semibold mb-4">
          Your cart is empty.
          <Link to="/" className="text-blue-500 ml-2 hover:underline">Go back to home</Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {state.cartItems.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xl font-semibold">
            Total: ₹{total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
