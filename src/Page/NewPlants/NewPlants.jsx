import React, { useEffect, useState } from "react";
import SingleNewPlant from "../SingleNewPlant/SingleNewPlant";

const NewPlants = () => {
  const [newPlants, setNewPlants] = useState([]);

  useEffect(() => {
    fetch("https://mango-server-seven.vercel.app/new-plants")
      .then((res) => res.json())
      .then((data) => {
        setNewPlants(data);
      });
    document.title = "Home";
  }, []);

  return (
    <div className="mt-20 mb-20">
      <h1 className="text-5xl text-center mb-20 font-extrabold underline">
        New Plants
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {newPlants.map((newPlant, index) => (
          <SingleNewPlant key={index} newPlant={newPlant} />
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
