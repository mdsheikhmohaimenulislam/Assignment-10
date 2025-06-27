import React, { use, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";

const DashAddPlant = () => {
     const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCare, setSelectedCare] = useState("");

  useEffect(() => {
    document.title = "Add Plants";
  }, []);

  const handleSelect = (value) => {
    setSelectedCategory(value);
  };

  const handleSelectCare = (value) => {
    setSelectedCare(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const allData = {
      photo: form.photo.value,
      name: form.name.value,
      Category: selectedCategory,
      Description: form.Description.value,
      care: selectedCare,
      WateringFrequency: form.WateringFrequency.value,
      LastWateredDate: form.LastWateredDate.value,
      NextWateringDate: form.NextWateringDate.value,
      Health: form.Health.value,
      displayName: form.displayName.value,
      email: form.email.value,
    };

    fetch("https://mango-server-seven.vercel.app/plants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Plant Added Successfully", {
            position: "top-right",
            autoClose: 3000,
            transition: Bounce,
          });
        }
      });
  };



    return (
    <div className="mt-10">
      <section
        className={`overflow-scroll table mb-10 p-6 rounded-xl`}
      >
        {/* 🔙 Back Home Button */}
        <div className="flex items-center justify-start mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            <FaArrowLeft /> Back Home
          </button>
        </div>

        <h1 className="text-center font-extrabold text-4xl mb-10">
          Add Plants
        </h1>

        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-md shadow-sm">
            {/* Fields */}
            {[
              { name: "photo", label: "Plant Image", placeholder: "Plant URL" },
              { name: "name", label: "Plant Name", placeholder: "Plant Name" },
              {
                name: "Description",
                label: "Description",
                placeholder: "Description",
              },
              {
                name: "WateringFrequency",
                label: "Watering Frequency",
                placeholder: "Watering Frequency",
              },
              {
                name: "LastWateredDate",
                label: "Last Watered Date",
                type: "date",
              },
              {
                name: "NextWateringDate",
                label: "Next Watering Date",
                type: "date",
              },
              {
                name: "Health",
                label: "Health Status",
                placeholder: "Health Status",
              },
              {
                name: "displayName",
                label: "User Name",
                placeholder: "User Name",
                value: user?.displayName || "",
                readOnly: true,
              },
              {
                name: "email",
                label: "User Email",
                placeholder: "Email",
                value: user?.email || "",
                readOnly: true,
              },
            ].map((field, index) => (
              <fieldset
                key={index}
                className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
              >
                <legend className="fieldset-legend">{field.label}</legend>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  className="input"
                  placeholder={field.placeholder}
                  value={field.value}
                  readOnly={field.readOnly}
                />
              </fieldset>
            ))}

            {/* Category Dropdown */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Category</legend>
              <div className="dropdown dropdown-down">
                <div tabIndex={0} className="btn m-1">
                  <input
                    type="text"
                    name="Category"
                    className="input"
                    placeholder="Category"
                    value={selectedCategory}
                    readOnly
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                  {["succulent", "fern", "flowering"].map((c) => (
                    <li key={c}>
                      <a onClick={() => handleSelect(c)}>{c}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>

            {/* Care Dropdown */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
              <legend className="fieldset-legend">Care Level</legend>
              <div className="dropdown dropdown-top">
                <div tabIndex={0} className="btn m-1">
                  <input
                    type="text"
                    name="care"
                    className="input"
                    placeholder="Care Level"
                    value={selectedCare}
                    readOnly
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                  {["easy", "moderate", "difficult"].map((c) => (
                    <li key={c}>
                      <a onClick={() => handleSelectCare(c)}>{c}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
          </div>

          <button type="submit" className="w-full btn text-2xl p-8">
            Add Plant
          </button>
        </form>
      </section>
    </div>
    );
};

export default DashAddPlant;


