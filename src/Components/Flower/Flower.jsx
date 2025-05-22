import React, { use } from "react";
import SingleFlower from "./SingleFlower";

const flowerPromise = fetch("/Flowers.json").then((res) => res.json());

const Flower = () => {
  const flowers = use(flowerPromise);

  return (
    <div className="mb-80">
        <h1 className="text-5xl font-bold text-center underline mt-60 mb-20">Own Flower </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {flowers.map((flower) => (
          <SingleFlower key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
};

export default Flower;
