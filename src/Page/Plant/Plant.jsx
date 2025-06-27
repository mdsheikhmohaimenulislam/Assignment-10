import React, { use } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const Plant = () => {
  const { theme } = use(ThemeContext);

  return (
    <div
      className={` py-10 rounded-b-2xl mt-10 ${
        theme === "dark" ? "bg-gray-600" : "bg-base-300"
      }`}
    >
      <div>
        <h2
          className={`pl-2 font-bold text-xl md:text-2xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          UpComing Plants Event{" "}
        </h2>
      </div>

      <div className="grid grid-cols-2 justify-center gap-5 mt-20  md:m-3">
        <div className="rounded-2xl shadow-xl col-span-2 md:col-span-1">
          <div>
            <img
              className="rounded-2xl max-h-72 m-auto"
              src="https://i.ibb.co/Z6RHtDHF/beautiful-plant-illustration.jpg"
              alt="plants"
            />
          </div>
          <div className="card-body">
            <h2
              className={`card-title ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Areca Palm
            </h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Kentia Palm is a slow-growing, elegant plant with tall, arching
              fronds.
            </p>
            <div className="card-actions justify-end">
              <a href="https://www.plantshop.me/ae-en/tags/shop-all-outdoor-plants">
                <button className="btn">Add Now</button>
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl  shadow-xl col-span-2 md:col-span-1">
          <div>
            <img
              className="rounded-2xl max-h-72  m-auto"
              src="https://i.ibb.co/rRZxzGWs/view-palm-tree-species-with-green-foliage-2.jpg"
              alt="plants"
            />
          </div>
          <div className="card-body">
            <h2
              className={`card-title ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Kentia Palm
            </h2>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              The Yellow Palm, also called Areca Palm, showcases yellow-green
              stems and feathery leaves.
            </p>
            <div className="card-actions justify-end">
              <a href="https://www.plantshop.me/ae-en/tags/shop-all-outdoor-plants">
                <button className="btn ">Shop Now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plant;
