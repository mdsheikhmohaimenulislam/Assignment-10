import React, { use } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { CiLogout } from "react-icons/ci";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { useNavigate } from "react-router";
import { IoIosAddCircleOutline } from "react-icons/io";

const Dashboard = () => {
  const { logOutHandle } = use(AuthContext);
  const navigate = useNavigate();

  // LogOut Handler
  const handleLogOut = () => {
    logOutHandle()
      .then(() => {
        toast.error("Logged Out", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="drawer lg:drawer-open bg-base-400">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Content Area */}
      <div className="drawer-content flex flex-col bg-base-400">
        {/* Top Navbar (for small screens) */}
        <div className="navbar lg:hidden bg-base-400 w-full">
          <div className="flex-none flex items-center gap-5 md:gap-1">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost"
              aria-label="open sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-6 w-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <div className="flex items-center">
              <img
                className="-ml-6 md:ml-0 w-[50px] h-[50px]"
                src="/logo.png"
                alt="Logo"
              />
              <h1 className="ml-0 text-2xl font-extrabold">GreenNest</h1>
            </div>
          </div>
        </div>

        {/* Main Page Content */}
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side bg-base-500">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu text-white min-h-full w-80 p-4 bg-white">
          {/* Logo */}
          <div className="lg:flex hidden items-center mb-5">
            <img
              className="-ml-6 md:ml-0 w-[50px] h-[50px]"
              src="/logo.png"
              alt="Logo"
            />
            <h1 className="ml-0 text-2xl font-extrabold">GreenNest</h1>
          </div>

          {/* Navigation Links */}
          <li>
            <NavLink className="text-xl text-black font-bold" to="/">
              <FaHome /> Home
            </NavLink>
          </li>
          {/* dashboard */}
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-green-800 text-xl font-bold"
                  : "text-black text-xl font-bold"
              }
            >
              <RxDashboard /> Dashboard
            </NavLink>
          </li>
          {/* All plants */}

          <li>
            <NavLink
              to="/dashboard/dashAllPlants"
              className={({ isActive }) =>
                isActive
                  ? "text-green-800 text-xl font-bold"
                  : "text-black text-xl font-bold"
              }
            >
              <GiPlantsAndAnimals /> All Plants
            </NavLink>
          </li>
          {/* My plants */}
          <li>
            <NavLink
              to="/dashboard/dashMyPlants"
              className={({ isActive }) =>
                isActive
                  ? "text-green-800 text-xl font-bold"
                  : "text-black text-xl font-bold"
              }
            >
              <GiPlantsAndAnimals /> My Plants
            </NavLink>
          </li>
          {/* add plants  */}
          <li>
            <NavLink
              to="/dashboard/dashAddPlant"
              className={({ isActive }) =>
                isActive
                  ? "text-green-800 text-xl font-bold"
                  : "text-black text-xl font-bold"
              }
            >
              <IoIosAddCircleOutline /> Add Plants
            </NavLink>
          </li>
          {/* Profile */}
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-green-800 text-xl font-bold"
                  : "text-black text-xl font-bold"
              }
            >
              <CgProfile /> My Profile
            </NavLink>
          </li>

          {/* Logout Button */}
          <li className="mt-auto">
            <button
              onClick={handleLogOut}
              className="text-black  text-xl font-bold flex items-center gap-2"
            >
              <CiLogout /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
