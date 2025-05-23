import React, { use } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import { ThemeContext } from "../Theme/ThemeContext";

const Root = () => {

    const {theme} = use(ThemeContext)

  return (
    <div  className={` ${theme === "dark"? "bg-gray-950 " : "bg-white"}`} >
      <NavBar />
      <div className="w-11/12 mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
