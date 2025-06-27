
import AmazingFeatures from "../../Page/AmazingFeatures/AmazingFeatures";
import NewPlants from "../../Page/NewPlants/NewPlants";
import Plant from "../../Page/Plant/Plant";
import PlantCareTips from "../../Page/PlantCareTips/PlantCareTips";
import SpecialOffer from "../../Page/SpecialOffer/SpecialOffer";
// import PlantCareMistake from "../../Page/PlantCareMistake/PlantCareMistake";
import CarouselSection from "../CarouselSection/CarouselSection";
// import Flower from "../Flower/Flower";
// import GreenNest from "../GreenNest/GreenNest";
import Routine from "../Routine /Routine";




const Home = () => {
  return (
    <>
      <CarouselSection />
      <SpecialOffer/>
      <NewPlants/>
      {/* <Flower/> */}
      {/* <PlantCareMistake/> */}
      <Plant/>
      <AmazingFeatures/>
      <Routine/>
      <PlantCareTips/>
      {/* <GreenNest/> */}
    </>
  );
};

export default Home;
