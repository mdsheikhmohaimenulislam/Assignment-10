import React, { use } from "react";
import SinglePlantsCard from "./SinglePlantsCard";

const PlantsPromise = fetch("/Data.json").then((res) => res.json());

const PlantsCard = () => {
  const plants = use(PlantsPromise);

  return (
    <div>
      <div className="mt-20">
        <h1 className="mb-15 font-extrabold text-2xl text-center underline">New Plants section</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {plants.map((plant) => (
            <SinglePlantsCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsCard;
