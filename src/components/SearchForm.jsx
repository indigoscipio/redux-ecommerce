import React from "react";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    console.log(`searching for ${searchQuery}`);
  };

  return (
    <form
      className="flex justify-center items-center"
      onSubmit={handleSubmitForm}
    >
      <input
        id="searchProductInput"
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        value={searchQuery}
        placeholder="Search products..."
        className="border-b-2 border-gray-300 p-2 mr-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Search product
      </button>
    </form>
  );
};

export default SearchForm;
