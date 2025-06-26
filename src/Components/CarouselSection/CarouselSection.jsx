import { useRef, useState } from "react";

const images = [
  {
    url: "/Carousel1.jpg",
    title: "Plants Make People Happy",
    subtitle: "New Stock Available, At This Season!",
  },
  {
    url: "/Carousel2.jpg",
    title: "Happiness Grows Here",
    subtitle: "Find your leafy companion today.",
  },
  {
    url: "/Carousel3.jpg",
    title: "Plants for the Soul",
    subtitle: "Explore our seasonal selection – happiness is just a pot away."
  },
  {
    url: "/Carousel4.jpg",
    title: "Grow Your Happy Place",
    subtitle: "Start your green journey.",
  },
  {
    url: "/Carousel5.jpg",
    title: "Fresh Finds for Plant Lovers",
    subtitle: "Bring nature indoors today.",
  },
];

const CarouselSection = () => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Button click: page redirect (DOM full reload)
  const handleButtonClick = () => {
    window.location.href = "/AddPlants";
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${images[current].url})` }}
    >
      {/* Button on top */}
      <div className="absolute top-100 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={handleButtonClick}
          className="btn bg-green-800 text-white px-6 py-2 rounded-full  transition"
        >
          Go to My Plants
        </button>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg mb-4">
          {images[current].title}
        </h1>
        <p className="text-white text-base md:text-xl lg:text-2xl font-medium drop-shadow-sm max-w-2xl mb-6">
          {images[current].subtitle}
        </p>
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-6">
        <button
          onClick={handlePrev}
          className="btn btn-circle hover:bg-green-600 bg-black/50 text-white border-none"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-black/50 text-white hover:bg-black/70 border-none"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
