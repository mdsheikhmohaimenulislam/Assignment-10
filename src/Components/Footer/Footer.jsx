import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { ThemeContext } from "../../Theme/ThemeContext";
import { Link } from "react-router";

const Footer = () => {
  const { googleHandle } = use(AuthContext);
  const { theme } = use(ThemeContext);

  // google set up
  const googleSignInHandle = () => {
    googleHandle()
      .then((res) => {
        // console.log(res);
        if (res) {
          toast.success("Successful", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <footer
        className={`footer footer-horizontal footer-center text-base-content rounded p-10  ${
          theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"
        }`}
      >
        <div className="flex items-center">
          <img
            className="-ml-6 md:ml-0 w-[50px] h-[50px]"
            src="/logo.png"
            alt=""
          />
          <h1 className="ml-0 text-2xl font-extrabold">GreenNest</h1>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/Plant" className="link link-hover">
            All Plants
          </Link>
          <Link to="/greenNest" className="link link-hover">
            Support
          </Link>
          <Link to="/contactForm" className="link link-hover">
            contactForm
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <button
              onClick={googleSignInHandle}
              aria-label="Log in with Google"
              className="rounded-sm cursor-pointer"
            >
              <FcGoogle size={30} />
            </button>
            <Link to="https://www.youtube.com/">
              <IoLogoYoutube
                className="text-red-600 cursor-pointer"
                size={30}
              />
            </Link>
            <Link to="https://www.facebook.com/mohymimislam">
              <FaFacebook size={30} className="text-blue-600 cursor-pointer" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
