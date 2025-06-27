import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import DashMyPlantsBodyTB from "./DashMyPlantsBodyTB";

const DashMyPlants = () => {
  const { user } = use(AuthContext);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch only user's plants
    if (user?.email) {
      fetch("https://mango-server-seven.vercel.app/plants")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((plant) => plant.email === user.email);
          setPlants(filtered);
        });
    }
    document.title = "My Plants";
  }, []);

  return (
    <>
      <div className="flex overflow-scroll justify-center mt-10"></div>
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
              {plants.map((plant) => (
                <DashMyPlantsBodyTB key={plant._id} plant={plant} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default DashMyPlants;
