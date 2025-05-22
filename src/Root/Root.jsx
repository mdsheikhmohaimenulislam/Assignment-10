import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
