import React, { use, useEffect, useState } from "react";
import SingleNewPlant from "../SingleNewPlant/SingleNewPlant";
import { ThemeContext } from "../../Theme/ThemeContext";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);
  const {theme} =use(ThemeContext)

  useEffect(() => {
    fetch("https://mango-server-seven.vercel.app/new-plants")
      .then((res) => res.json())
      .then((data) => {
        setNewPlants(data);
      });
    document.title = "Home";
  }, []);



  return (
    <div className="mt-10 mb-10">
      <h1 className={`text-5xl text-center mb-10 font-extrabold underline  ${theme ==="dark"? " text-white bg" : "text-black"}`}>
        New Plants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 gap-5">
        {newPlants.map((newPlant, index) => (
          <SingleNewPlant key={index} newPlant={newPlant} />
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
