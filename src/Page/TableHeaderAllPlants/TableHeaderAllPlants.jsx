import React, {  useEffect, useState } from "react";
import TableBodyAllPlants from "./TableBodyAllPlants";


const TableHeaderAllPlants = () => {

  const [plants,setPlants] = useState([]);

  const [search, setSearch] = useState("")
  console.log(search);



  useEffect(() => {
    fetch(`http://localhost:5000/plants?searchParams=${search}`)
    .then(res => res.json())
    .then(data => {
        setPlants(data)
    } )
  },[search])

  console.log(plants);



  return (
    <>
      <div className="input ml-80 mb-10">
        <svg
          className="h-[1em] opacity-50 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input name="search" onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
      </div>
      <section>
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
      </section>
    </>
  );
};

export default TableHeaderAllPlants;
