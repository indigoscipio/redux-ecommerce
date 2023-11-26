import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
