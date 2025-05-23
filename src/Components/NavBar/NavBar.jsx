import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { IoIosContact } from "react-icons/io";

import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { ThemeContext } from "../../Theme/ThemeContext";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const NavBar = () => {
  const { logOutHandle, user } = use(AuthContext);
  const { theme, handleToggleTheme } = use(ThemeContext);

  //   logOut section
  const handleLogOut = () => {
    logOutHandle()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    toast.error("Log Out", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const Links = (
    <>
      {user && (
        <>
          <NavLink className="font-extrabold text-xl" to="/AddPlants">
            Add Plants
          </NavLink>
          <NavLink className="font-extrabold text-xl" to="/MyPlants">
            My Plants
          </NavLink>
        </>
      )}
    </>
  );

  // ${theme === "dark"? "bg-gray-600" : "bg-base-300"}

  return (
    <div className="w-11/12 mx-auto flex justify-between mb-10 p-3">
      <div
        className={`navbar shadow-sm ${
          theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu  menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${theme === "dark"? "bg-gray-600 text-white" : "bg-base-300 text-black"}`}
            >
              <NavLink className="text-xl font-extrabold" to="/">
                Home
              </NavLink>
              <NavLink className="text-xl font-extrabold" to="/Plant">
                All Plants
              </NavLink>
              {Links}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="font-extrabold bg-green-700 text-xl p-2 cursor-pointer"
                >
                  Log Out
                </button>
              ) : (
                <Link
                  to="/login"
                  className="font-extrabold text-xl p-2 cursor-pointer"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center ">
              <img
                className="ml-3 md:ml-0 w-[50px] h-[50px]"
                src="/logo.png"
                alt=""
              />
              <h1 className="ml-0 md:text-2xl font-extrabold">GreenNest</h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 menu-horizontal mr-10 px-1">
            <NavLink className="text-xl font-extrabold" to="/">
              Home
            </NavLink>
            <NavLink className="text-xl font-extrabold" to="/Plant">
              All Plants
            </NavLink>
            {Links}
          </ul>
        </div>
        <div className="flex items-center relative group navbar-end space-x-3">
          {/* User Avatar */}
          {user && user.photoURL ? (
            <img
              className="w-[45px] h-[45px] rounded-full cursor-pointer"
              src={user.photoURL}
              alt="User Avatar"
            />
          ) : (
            <IoIosContact size={45} className="cursor-pointer" />
          )}

          {/* Hover Name Box */}
          {user && (
            <div className="absolute -top-[38px] mr-15  right-0 bg-white border rounded shadow-md px-4 py-2 text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              {user.displayName || "User"}
            </div>
          )}

          {/* Auth Button */}
          <div className="btn hidden md:block px-10 bg-green-800 text-base-100 p-2 cursor-pointer">
            {user ? (
              <Link onClick={handleLogOut}>Log Out</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>

          {/* Theme section */}

          <button onClick={handleToggleTheme}>
            {theme === "dark" ? (
              <IoMoonOutline size={25} />
            ) : (
              <IoSunnyOutline size={25} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
