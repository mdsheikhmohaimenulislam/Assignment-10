
import NewPlants from "../../Page/NewPlants/NewPlants";
import PlantCareMistake from "../../Page/PlantCareMistake/PlantCareMistake";
import CarouselSection from "../CarouselSection/CarouselSection";
import Flower from "../Flower/Flower";
import GreenNest from "../GreenNest/GreenNest";




const Home = () => {
  return (
    <>
      <CarouselSection />
      <NewPlants/>
      <Flower/>
      <PlantCareMistake/>
      <GreenNest/>
    </>
  );
};

export default Home;
