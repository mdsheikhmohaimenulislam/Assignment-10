import React from "react";
import { useLoaderData } from "react-router";
import TableBodyAllPlants from "./TableBodyAllPlants";

const TableHeaderAllPlants = () => {
  const plants = useLoaderData();
  console.log(plants);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>photo</th>
              <th>Name</th>
              <th>Category</th>
              <th className="hidden md:block">WateringFrequency</th>
              <th>Care</th>
              <th className="hidden lg:block">LastWateredDate</th>
              <th>Details</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {plants.map((plant, index) => (
              <TableBodyAllPlants key={index} plant={plant} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableHeaderAllPlants;
