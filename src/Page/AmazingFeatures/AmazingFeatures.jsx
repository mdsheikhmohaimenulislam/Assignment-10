import React, { use } from "react";
import {
  Leaf,
  ShieldCheck,
  Sun,
  Droplets,
  Truck,
  Users,
  HeartPulse,
} from "lucide-react";
import { ThemeContext } from "../../Theme/ThemeContext";

const features = [
  {
    icon: <Leaf size={32} className="text-green-600" />,
    title: "Wide Plant Collection",
    desc: "Explore a diverse range of indoor & outdoor plants with detailed care guides.",
  },
  {
    icon: <ShieldCheck size={32} className="text-green-600" />,
    title: "Verified Quality",
    desc: "All plants are handpicked and quality-checked by our experts.",
  },
  {
    icon: <Sun size={32} className="text-green-600" />,
    title: "Light Recommendations",
    desc: "Get suggestions for the best plants based on your room's lighting.",
  },
  {
    icon: <Droplets size={32} className="text-green-600" />,
    title: "Watering Reminders",
    desc: "Never forget to water your plants with smart schedule alerts.",
  },
  {
    icon: <HeartPulse size={32} className="text-green-600" />,
    title: "Fresh & Healthy Plants",
    desc: "We ensure every plant is handpicked, well-nurtured, and delivered in perfect condition.",
  },
  {
    icon: <Users size={32} className="text-green-600" />,
    title: "Plant Community",
    desc: "Join a growing community of plant lovers, share tips and get help.",
  },
];

const AmazingFeatures = () => {
  const { theme } = use(ThemeContext);

  return (
    <section
      className={`mt-12 px-6 py-6 ${theme === "dark" ? "bg-gray-600 text-white" : "bg-base-300 text-black"}`}
    >
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-extrabold p-5 ">🌟 Amazing Features</h2>
        <p className=" mb-10 text-lg">
          Everything you need to make your plant parenting journey easier and
          joyful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white  p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                className={` font-bold ${
                  theme === "dark" ? " text-black" : " text-black"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`${
                  theme === "dark" ? " text-black" : " text-black"
                }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
