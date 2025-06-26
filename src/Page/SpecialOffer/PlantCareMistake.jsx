// import React, { use } from "react";
// import { ThemeContext } from "../../Theme/ThemeContext";
// import SingleMistake from "./SingleMistake";

// const flowerPromise = fetch("/Mistake.json").then((res) => res.json());

// const PlantCareMistake = () => {
//   const flowers = use(flowerPromise);
//   const { theme } = use(ThemeContext);




//   return (
//     <div className="mb-80">
//       <h1
//         className={`text-5xl font-bold text-center underline mt-60 mb-20 ${
//           theme === "dark" ? "text-white" : "text-black"
//         }`}
//       >
//         Top Plant Care Mistakes
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//         {flowers.map((flower) => (
//           <SingleMistake key={flower.id} flower={flower}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlantCareMistake;
