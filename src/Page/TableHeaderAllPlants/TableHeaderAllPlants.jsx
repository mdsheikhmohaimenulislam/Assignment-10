import React, { use, useEffect, useState } from "react";
import TableBodyAllPlants from "./TableBodyAllPlants";
import { ThemeContext } from "../../Theme/ThemeContext";

const TableHeaderAllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const {theme} = use(ThemeContext)

  useEffect(() => {
    fetch(`https://mango-server-seven.vercel.app/plants?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
    document.title = "All Plants";
  }, [search]);

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="input  mb-10">
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
          <input
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </div>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className={`table mb-10 ${theme === "dark"? "bg-gray-600" : "bg-base-300"}`}>
            {/* head */}
            <thead className={`${theme === "dark"? "text-white" : "text-black"}`}>
              <tr>
                <th>photo</th>
                <th>Name</th>
                <th>Category</th>
                <th className="hidden md:block">WateringFrequency</th>
                <th>Care</th>
                <th className="hidden lg:block">NextWateringDate</th>
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
