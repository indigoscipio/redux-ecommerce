import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center">
      <Link to={`/product/${product.id}`} className="w-full">
        <div className="w-36 h-36 mb-4 overflow-hidden rounded-md">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-500 mb-2">Rating: {product.rating}</p>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
