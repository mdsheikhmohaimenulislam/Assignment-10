import React, { use } from "react";
import { Link } from "react-router";

import { ThemeContext } from "../../Theme/ThemeContext";

const TableBodyAllPlants = ({ plant }) => {
  const { theme } = use(ThemeContext);

  const {
    photo,
    _id,
    name,
    Category,
    WateringFrequency,
    care,
    NextWateringDate,
  } = plant || {};

    const NextWateringDateConvert = new Date(NextWateringDate).toLocaleDateString()

  return (
    <>
      <tr className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt="photo" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{Category}</td>
        <td>{WateringFrequency}</td>
        <td>{care}</td>
        <td>{NextWateringDateConvert}</td>
        <td>
          <Link to={`/PlantsDetails/${_id}`}>
            <button className="btn btn-ghost btn-xs">Details</button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableBodyAllPlants;
