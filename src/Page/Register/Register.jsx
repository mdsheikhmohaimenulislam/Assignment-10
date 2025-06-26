import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const { signInHandle, updateProfileHandle, setUser, googleHandle } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const [showHide, setShowHide] = useState(false);

  const registerHandel = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErrorMessage("");

    const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number and be at least 8 characters long."
      );
      return;
    }

    signInHandle(email, password)
      .then((result) => {
        const user = result.user;

        toast.success("Registered Successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
        });

        updateProfileHandle({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  const googleSignInHandle = () => {
    googleHandle()
      .then((res) => {
        if (res) {
          toast.success("Login with Google Successful!", {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-[url('/banner.jpg')]">
        <div className="relative hero-content flex-col lg:flex-row border-white border-2 rounded-3xl shadow-xl backdrop-blur-xl">
          <div
            className="absolute inset-0 bg-center opacity-40 w-full pointer-events-none rounded-2xl"
            aria-hidden="true"
          ></div>

          <div className="text-center lg:text-left backdrop-blur-3xl rounded-2xl shadow-xl p-5 text-white">
            <h1 className="text-2xl text-center md:text-5xl font-bold w-full">Register Now!</h1>
          </div>

          <div className="card bg-base-100 border-gray-300 w-full max-w-sm shrink-0 border-2">
            <form onSubmit={registerHandel} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                  <span
                    className="absolute right-2 top-10 p-1 rounded-xl cursor-pointer"
                    onClick={() => setShowHide(!showHide)}
                  >
                    {showHide ? <AiTwotoneEye size={18} /> : <AiTwotoneEyeInvisible size={18} />}
                  </span>
                </label>
                <input
                  name="password"
                  type={showHide ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              {errorMessage && (
                <p className="text-red-600 font-semibold mb-2">{errorMessage}</p>
              )}

              <div className="form-control mx-auto mt-6">
                <button className="btn border-2 px-20 shadow-xl">Register</button>
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
                <Link to="/" className="text-green-600 font-extrabold text-sm duration-700">
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

export default Register;
