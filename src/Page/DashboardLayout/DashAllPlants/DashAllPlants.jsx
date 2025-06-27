import React, { useEffect, useState } from 'react';
import DashAllPlantsBd from './DashAllPlantsBd';

const DashAllPlants = () => {
  const [plants, setPlants] = useState([]);



  useEffect(() => {
    fetch(`https://mango-server-seven.vercel.app/plants`)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
    document.title = "All Plants";
  }, []);



    return (
    <>
      <div className="flex justify-center mt-10">

      </div>
      <section>
        <div className="overflow-x-auto">
          <table className={`table mb-10 `}>
            {/* head */}
            <thead>
              <tr>
                <th>photo</th>
                <th>Name</th>
                <th>Category</th>
                <th className="hidden md:block">WateringFrequency</th>
                <th>Care</th>
                <th className="hidden lg:block">NextWateringDate</th>
                <th>Details</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {plants.map((plant, index) => (
                <DashAllPlantsBd key={index} plant={plant} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
    );
};

export default DashAllPlants;