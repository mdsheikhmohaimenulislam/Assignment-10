import React, { use } from "react";
import { FaCheck, FaSnowflake, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../Theme/ThemeContext";

import { FaCloudRain, FaHome,} from "react-icons/fa";

const routineData = [
  {
    icon: <FaCloudRain className="text-blue-400" />,
    title: "Rainy Routine Care",
    tips: [
      "Avoid overwatering due to high humidity.",
      "Ensure proper drainage to prevent root rot.",
      "Keep leaves dry to avoid fungal infections.",
      "Place plants in bright, indirect light.",
      "Clean pots regularly to prevent pests.",
    ],
  },
  {
    icon: <FaHome className="text-purple-500" />,
    title: "Indoor Plant Routine",
    tips: [
      "Rotate pots for even light exposure.",
      "Dust leaves weekly to maximize photosynthesis.",
      "Use a tray or mat to avoid water damage.",
      "Check soil moisture before watering.",
      "Keep away from air conditioners and heaters.",
    ],
  },
];



const Routine = () => {

    const { theme} = use(ThemeContext);


  return (
    <div className={`my-16 bg-base-300 rounded-lg p-4 lg:p-8 ${
          theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"
        }`}>
      <div className="text-center mb-8">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white ": "text-black"}`}>
          Routine Plant Care Tips
        </h2>
        <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${theme === "dark" ? "text-white ": "text-black"}`}>
          Adjust your plant care routine with the changing seasons to keep your
          green friends thriving all year round.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {routineData.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden px-4 py-5 lg:p-6"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3 mr-4">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-600 mt-1 mr-2" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;
