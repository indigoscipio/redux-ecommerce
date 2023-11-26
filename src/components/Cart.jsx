import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setQuantity,
  emptyAllCart,
} from "../features/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateGrandTotalPrice = () => {
    return cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrease = (item) => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleSetQuantity = (newQuantity, item) => {
    dispatch(setQuantity({ quantity: newQuantity, id: item.id }));
  };

  const handleEmptyAllCart = () => {
    dispatch(emptyAllCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">My Cart</h2>

      {cart.items.length > 0 ? (
        <div className="cart-container space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-300 py-2"
            >
              <div className="flex-shrink-0 w-16 h-16 mr-4 overflow-hidden rounded-md">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <h4>${item.price}</h4>
                <p>Total Price: ${item.price * item.quantity}</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <input
                    value={item.quantity}
                    type="number"
                    onChange={(e) => handleSetQuantity(e.target.value, item)}
                    className="w-12 text-center border border-gray-300 rounded"
                  />
                  <button
                    onClick={() => handleIncrease(item)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-600 ml-auto"
              >
                Remove
              </button>
            </div>
          ))}
          <h3>Grand Total: ${calculateGrandTotalPrice()}</h3>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleEmptyAllCart}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Empty All Cart
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p>You have 0 items</p>
      )}
    </div>
  );
};

export default Cart;
