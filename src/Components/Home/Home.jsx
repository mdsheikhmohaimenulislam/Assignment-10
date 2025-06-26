
import NewPlants from "../../Page/NewPlants/NewPlants";
import PlantCareTips from "../../Page/PlantCareTips/PlantCareTips";
import SpecialOffer from "../../Page/SpecialOffer/SpecialOffer";
// import PlantCareMistake from "../../Page/PlantCareMistake/PlantCareMistake";
import CarouselSection from "../CarouselSection/CarouselSection";
// import Flower from "../Flower/Flower";
import GreenNest from "../GreenNest/GreenNest";
import Routine from "../Routine /Routine";




const Home = () => {
  return (
    <>
      <CarouselSection />
      <SpecialOffer/>
      <NewPlants/>
      {/* <Flower/> */}
      {/* <PlantCareMistake/> */}
      <Routine/>
      <PlantCareTips/>
      <GreenNest/>
    </>
  );
};

export default Home;
