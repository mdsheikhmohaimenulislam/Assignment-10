import React, { use, useEffect, useState } from "react";
import DashboardBox from "./DashboardBox";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const DasHome = () => {
  const [allPlants, setAllPlants] = useState([]);
  const [userAddPlants, setUserAddPlants] = useState([]);
  const [categoryList, setCategoryList] = useState({});
  const { user } = use(AuthContext);

  useEffect(() => {
    // Fetch all plants
    fetch("https://mango-server-seven.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data);

        //  Corrected key: "Category"
        const uniqueCategories = [
          ...new Set(data.map((plant) => plant.Category)),
        ];
        setCategoryList(uniqueCategories);
      });

    // Fetch only user's plants
    if (user?.email) {
      fetch("https://mango-server-seven.vercel.app/plants")
        .then((res) => res.json())
        .then((data) => {
          const filtered = data.filter((plant) => plant.email === user.email);
          setUserAddPlants(filtered);
        });
    }

    document.title = "Dashboard";
  }, [user?.email]);



  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-6">
        Welcome GreenNest!
      </h2>

      <div className="flex flex-wrap gap-4 justify-between">
        <DashboardBox
          title="Total Plants Available"
          value={allPlants?.length}
          unit="Plants"
          color="#3b32e6"
        />
        <DashboardBox
          title="Total User Plants Available"
          value={userAddPlants?.length}
          unit="plants"
          color="#fc8c23"
        />
        <DashboardBox
          title="Active User"
          value={user?.displayName}
          unit="Login User"
          color="#2ab4f3"
        />
        <DashboardBox
          title="Category"
          value={categoryList.length}
          color="#fc2d8d"
          unit="Current Category"
        />
      </div>
    </div>
  );
};

export default DasHome;
