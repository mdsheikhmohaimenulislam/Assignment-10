
import { useLoaderData } from "react-router";
import CarouselSection from "../CarouselSection/CarouselSection";
import PlantsCard from "../PlantsCard/PlantsCard";



const Home = () => {
const data = useLoaderData()

  return (
    <>
      <CarouselSection />
<PlantsCard data={data}/>
    </>
  );
};

export default Home;
