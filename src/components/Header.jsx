import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <Link to="/">
        <h2 className="text-2xl font-bold text-white">Ecomm Appz</h2>
      </Link>
      <ul className="flex items-center">
        <Link to="/cart">
          <li className="ml-4 text-white">
            My Cart {cart.items.length ? `(${cart.items.length})` : "(0)"}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
