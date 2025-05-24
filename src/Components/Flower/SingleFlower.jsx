import React, { use } from "react";
import { ThemeContext } from "../../Theme/ThemeContext";

const SingleFlower = ({ flower }) => {

   // ${theme === "dark"? "bg-gray-600" : "bg-base-300"}
   const {theme} = use(ThemeContext)

  return (
    <div>
      <div className={`card shadow-sm  ${theme === "dark"? "bg-gray-600 text-white" : "bg-base-300 text-black"}`}>
        <figure>
          <img src={flower.image_url} alt="photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{flower.name}</h2>
          <p>{flower.description}</p>
        </div>
      </div>
      ;
    </div>
  );
};

export default SingleFlower;
