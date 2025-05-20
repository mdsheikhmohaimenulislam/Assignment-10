import React from "react";
import { Link, NavLink } from "react-router";
// import { IoIosContact } from "react-icons/io";

// import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
// import { toast } from "react-toastify";

const NavBar = () => {
//   const { logOutHandle, user } = use(AuthContext);

  // logOut section
//   const handleLogOut = () => {
//     logOutHandle()
//       .then(() => {})
//       .catch((error) => {
//         console.log(error);
//       });
//     toast.error("Log Out", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

// const Links = (
//   <>
//     {user && (
//       <>
//         <NavLink className="font-extrabold text-xl" to="/AddPlants">
//           Add Plants
//         </NavLink>
//         <NavLink className="font-extrabold text-xl" to="/MyPlants">
//           My Plants
//         </NavLink>
//       </>
//     )}
//   </>
// );


  return (
    <div className="w-11/12 mx-auto flex justify-between mb-10 bg-base-200 p-3 mt-5">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* {Links} */}
              <NavLink className="text-xl font-extrabold" to="/profile">
                Home
              </NavLink>
              <NavLink className="text-xl font-extrabold" to="/profile">
                All Plants
              </NavLink>
            </ul>
          </div>
          <Link to="/">
          <div className="flex items-center">
            <img
              className="-ml-6 md:ml-0 w-[50px] h-[50px]"
              src="/logo.png"
              alt=""
            />
            <h1 className="ml-0">GreenNest</h1>
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-10 menu-horizontal mr-10 px-1">
            {/* {Links} */}
            <NavLink className="text-xl font-extrabold" to="/profile">
              Home
            </NavLink>
            <NavLink className="text-xl font-extrabold" to="/profile">
            All Plants
            </NavLink>
          </ul>
        </div>
<div className="flex navbar-end">
{/* {user && user.photoURL ? (
          <img
            className="w-[45px] h-[45px] hidden md:block rounded-full"
            src={user.photoURL}
            alt="photo"
          />
        ) : (
          <IoIosContact size={45} />
        )}
        <div className="btn  px-10 bg-secondary text-base-100 p-2 cursor-pointer">
          {user ? (
            <Link onClick={handleLogOut}>Log Out</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div> */}
</div>
      </div>
    </div>
  );
};

export default NavBar;
