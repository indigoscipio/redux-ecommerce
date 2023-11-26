import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetAllProductsQuery,
  useGetSearchProductsQuery,
} from "./api/productsApi";
import ProductItem from "./components/ProductItem";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useGetAllProductsQuery();

  const {
    data: searchResults,
    isLoading: isSearching,
    error: searchError,
  } = useGetSearchProductsQuery(searchQuery);
  const cart = useSelector((state) => state.cart);

  if (isLoading || isSearching) return <p>Loading...</p>;
  if (error || searchError) return <p>Error</p>;

  const productsToRender = searchQuery ? searchResults.products : data.products;
  console.log(productsToRender);

  return (
    <div className="container mx-auto p-4">
      <SearchForm onSearch={setSearchQuery} />
      {productsToRender.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productsToRender.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default App;
