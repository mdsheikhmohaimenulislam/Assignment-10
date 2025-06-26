import React, { use, useEffect, useState } from "react";
import {  Link, useLocation, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";

import { AuthContext } from "../../Context/AuthContext/AuthContext";
// import { ThemeContext } from "../../Theme/ThemeContext";

import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginHandle, googleHandle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  // const { theme } = use(ThemeContext);
  const [showHide, setShowHide] = useState(false);

  const loginHandleContent = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validationErrors = [];

    if (!/[A-Z]/.test(password)) {
      validationErrors.push("Must include an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
      validationErrors.push("Must include a lowercase letter.");
    }

    if (password.length < 6) {
      validationErrors.push("Must be at least 6 characters long.");
    }

    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors[0]); // Show the first error
      return;
    }

    setErrorMessage(""); // Clear errors before Firebase attempt

    loginHandle(email, password)
      .then((res) => {
        navigate(location?.state || "/");
        if(res){
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
        setErrorMessage(error.message);
        toast.error("Incorrect password", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const googleSignInHandle = () => {
    googleHandle()
      .then(() => {
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

        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-[url('./banner.jpg')]">
        <div className="relative hero-content flex-col lg:flex-row border-white border-2 rounded-3xl shadow-xl backdrop-blur-xl">
          <div
            className="absolute inset-0 bg-center opacity-40 w-full pointer-events-none rounded-2xl"
            aria-hidden="true"
          ></div>

          <div className="text-center lg:text-left  backdrop-blur-3xl rounded-2xl shadow-xl p-5 text-black">
            <h1 className="text-2xl text-white md:text-5xl font-bold w-full">Log in now!</h1>
          </div>

          <div className="card bg-base-100 border-gray-300 w-full max-w-sm shrink-0 border-2">
            <form onSubmit={loginHandleContent} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label ">
                  <span className="label-text">Password</span>
                  <span
                    className="absolute z-10 top-7 left-70 p-1 rounded-xl cursor-pointer"
                    onClick={() => setShowHide(!showHide)}
                  >
                    {showHide ? <AiTwotoneEye size={18} /> : <AiTwotoneEyeInvisible size={18} />}
                  </span>
                </label>

                <input
                  name="password"
                  type={showHide ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

                <p className="text-gray-500">
                  Don&apos;t have an account?
                  <Link to="/register" className="ml-2 text-blue-600 hover:underline">
                    register
                  </Link>
                </p>
              </div>

              {errorMessage && (
                <p className="text-red-600 font-semibold mb-2">{errorMessage}</p>
              )}

              <div className="form-control mx-auto  mt-6">
                <button className="btn border-2 px-20 shadow-xl">Log In</button>
              </div>

              <div className="form-control mx-auto mt-6">
                <button
                  onClick={googleSignInHandle}
                  type="button"
                  className="btn border-2 hover:border-red-400 shadow-xl flex items-center justify-center gap-2"
                >
                  <FcGoogle size={24} /> Continue with Google
                </button>
              </div>

              <div className="form-control mx-auto mt-4">
                <Link
                  to="/"
                  className="text-green-600 font-extrabold text-sm duration-700"
                >
                  Go Back to Home
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
