import { Sun, Droplet, Thermometer, SprayCan, ShieldCheck, Clock } from 'lucide-react';
import { ThemeContext } from '../../Theme/ThemeContext';
import { use } from 'react';

const PlantCareTips = () => {
const { theme} = use(ThemeContext);

  const tips = [
    {
      icon: <Sun className="w-8 h-8 text-green-600" />,
      title: "Sunlight",
      desc1: "Place your plant where it can get bright, indirect light.",
      desc2: "Rotate the pot weekly to ensure even growth.",
      desc3: "Avoid direct afternoon sun—it can scorch the leaves.",
      desc4: "Use sheer curtains to filter harsh sunlight indoors.",
    },
    {
      icon: <Droplet className="w-8 h-8 text-green-600" />,
      title: "Watering",
      desc1: "Water when the top inch of soil feels dry.",
      desc2: "Use pots with drainage holes to prevent root rot.",
      desc3: "Empty any water in saucers after watering.",
      desc4: "Reduce watering during colder months.",
    },
    {
      icon: <Thermometer className="w-8 h-8 text-green-600" />,
      title: "Temperature",
      desc1: "Maintain room temperature between 18°C to 25°C.",
      desc2: "Avoid sudden temperature changes.",
      desc3: "Keep plants away from air vents and radiators.",
      desc4: "Most plants dislike cold drafts and frost.",
    },
    {
      icon: <SprayCan className="w-8 h-8 text-green-600" />,
      title: "Humidity",
      desc1: "Tropical plants need higher humidity to thrive.",
      desc2: "Mist leaves occasionally in dry environments.",
      desc3: "Group plants together to increase local humidity.",
      desc4: "Use a pebble tray or humidifier if needed.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
      title: "Pest Control",
      desc1: "Inspect leaves weekly for bugs and mold.",
      desc2: "Isolate infected plants immediately.",
      desc3: "Use neem oil spray for natural pest control.",
      desc4: "Wipe leaves to remove dust and insect eggs.",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Routine",
      desc1: "Create a watering and fertilizing calendar.",
      desc2: "Wipe leaves regularly to allow proper breathing.",
      desc3: "Prune dead or yellowing leaves as needed.",
      desc4: "Repot annually or when roots outgrow the pot.",
    },
  ];

  return (



    <section className={`py-10 px-6 mb-10 ${
          theme === "dark" ? "bg-gray-600 text-white" : " bg-base-300 text-black"
        }`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${
          theme === "dark" ? " text-white" : " text-black"
        }`} >
        🌿 Plant Care Tips
      </h2>
      <p className={`text-center mb-10 max-w-2xl mx-auto ${
                  theme === "dark" ? " text-white" : " text-black"
                }`}>
        Follow these simple guidelines to keep your plants healthy and thriving.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="bg-white border border-green-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {tip.icon}
              <h3 className="text-xl font-semibold text-green-700">{tip.title}</h3>
            </div>
            <div className="text-gray-600 space-y-1 list-disc list-inside">
              <p>{tip.desc1}</p>
              <p>{tip.desc2}</p>
              <p>{tip.desc3}</p>
              <p>{tip.desc4}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCareTips;
