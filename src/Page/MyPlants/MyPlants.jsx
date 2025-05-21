import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SingleMyPlants from "./SingleMyPlants";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => {
     
       const filterPlants = data.filter((plant) => plant.email === user?.email);

        setPlants(filterPlants)});
  }, []);


  return (
    <>
    <h1>{plants.length}</h1>
      <div className="w-11/12 mx-auto mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        plants.map((plant, index)=> <SingleMyPlants key={index} plant={plant} />)
      }
      </div>
    </>
  );
};

export default MyPlants;
