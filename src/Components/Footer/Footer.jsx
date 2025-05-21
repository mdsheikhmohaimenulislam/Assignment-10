import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {


      const { googleHandle } = use(AuthContext);

 // google set up
  const googleSignInHandle = () => {
    googleHandle()
      .then((res) => {
        console.log(res);

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

      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-300 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
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
            <a>
              
              <IoLogoYoutube className="text-red-600" size={30} />
            </a>
            <a>
             <FaFacebook size={30} className="text-blue-600" />
            </a>
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
