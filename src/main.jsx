import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart.jsx";
import Root from "./components/Root.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/",
        index: true,
        element: <App />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
