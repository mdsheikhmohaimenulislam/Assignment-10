import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import SingleMyPlants from "./SingleMyPlants";
import NavBar from "../../Components/NavBar/NavBar";
import Swal from "sweetalert2";
import Footer from "../../Components/Footer/Footer";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/plants")
      .then((res) => res.json())
      .then((data) => {
        const filterPlants = data.filter(
          (plant) => plant.email === user?.email
        );
        setPlants(filterPlants);
      });
      document.title = "My Plants";
  }, []);

  // Deleted section
  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result);
      // Start Deleted the Plant
      fetch(`http://localhost:5000/plants/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Plant has been deleted.",
              icon: "success",
            });
          }
          // filter section
          const remainingPlant = plants.filter(
            (filterPlant) => filterPlant._id !== id
          );
          setPlants(remainingPlant);
        });
    });
  };

  return (
    <>
      <NavBar />
      <div className="w-11/12 mx-auto mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plants.map((plant, index) => (
          <SingleMyPlants
            handleDeleted={handleDeleted}
            setPlants={setPlants}
            plants={plants}
            key={index}
            plant={plant}
          />
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default MyPlants;
