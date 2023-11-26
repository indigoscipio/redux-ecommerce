import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../api/productsApi";
import { addToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const { data: product, isLoading, error } = useGetSingleProductQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-4">{product.title}</h2>
      <div className="mb-4">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-auto"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-600">Product ID: {product.id}</span>
        <span className="text-blue-500 font-semibold">
          Price: ${product.price}
        </span>
      </div>
      <div className="mb-4">
        <span className="text-gray-600">Category: {product.category}</span>
      </div>
      <p className="text-gray-800">{product.description}</p>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;
