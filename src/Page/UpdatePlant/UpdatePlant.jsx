import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link, useLoaderData, useNavigate } from "react-router";
import { Bounce, toast } from "react-toastify";
import Lottie from "lottie-react";
import animation from "/public/Animation.json";

const UpdatePlant = () => {
  const { user } = use(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCare, setSelectedCare] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const plant = useLoaderData();
  if (!plant || !plant._id) {
    return (
      <div className="w-2/5 mx-auto ">
        <Lottie animationData={animation} />
        <div className="text-center mt-20 text-5xl">
          <button
            onClick={handleBack}
            className="btn bg-green-700 text-white rounded-md"
          >
            Back
          </button>
        </div>
      </div>
    );
  }
  const {
    photo,
    name,
    Description,
    WateringFrequency,
    LastWateredDate,
    NextWateringDate,
    Health,
    _id,
  } = plant;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatePlants = Object.fromEntries(formData.entries());

    // Send update plants to the db
    fetch(`https://mango-server-seven.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePlants),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Plant Update Successfully", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      });
  };

  const handleSelect = (value) => {
    setSelectedCategory(value);
  };

  const handleSelectCare = (value) => {
    setSelectedCare(value);
  };

  return (
    <>
      <div>
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
          <h1 className="text-center font-extrabold text-4xl mb-15">
            Update Plant
          </h1>
          <form
            onSubmit={handleUpdate}
            className="container flex flex-col mx-auto space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              {/* 1 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Plant Image</legend>
                <input
                  type="photoURL"
                  name="photo"
                  defaultValue={photo}
                  className="input"
                  placeholder="Plant URL"
                />
              </fieldset>
              {/* 2 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Plant Name</legend>
                <input
                  type="text"
                  defaultValue={name}
                  name="name"
                  className="input"
                  placeholder="Plant Name"
                />
              </fieldset>
              {/* 3 */}

              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Category</legend>

                <div className="dropdown dropdown-top">
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
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a onClick={() => handleSelect("succulent")}>succulent</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelect("fern")}>fern</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelect("flowering")}>flowering</a>
                    </li>
                  </ul>
                </div>
              </fieldset>

              {/* 4 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Description</legend>
                <input
                  type="text"
                  defaultValue={Description}
                  name="Description"
                  className="input"
                  placeholder="Description"
                />
              </fieldset>
              {/* 5 */}
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
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a onClick={() => handleSelectCare("easy")}>easy</a>
                    </li>
                    <li>
                      <a onClick={() => handleSelectCare("moderate")}>
                        moderate
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleSelectCare("difficult")}>
                        difficult
                      </a>
                    </li>
                  </ul>
                </div>
              </fieldset>
              {/* 6 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Watering Frequency</legend>
                <input
                  type="text"
                  defaultValue={WateringFrequency}
                  name="WateringFrequency"
                  className="input"
                  placeholder="Watering Frequency"
                />
              </fieldset>
              {/* 7 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Last Watered Date</legend>
                <input
                  type="date"
                  name="LastWateredDate"
                  defaultValue={LastWateredDate}
                  className="input"
                  placeholder="Last Watered Date"
                />
              </fieldset>
              {/* 8 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Next Watering Date</legend>
                <input
                  type="date"
                  name="NextWateringDate"
                  defaultValue={NextWateringDate}
                  className="input"
                  placeholder="Next Watering Date"
                />
              </fieldset>
              {/* 9 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Health Status</legend>
                <input
                  type="text"
                  name="Health"
                  defaultValue={Health}
                  className="input"
                  placeholder="Health Status"
                />
              </fieldset>
              {/* 10 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">User Name</legend>
                <input
                  readOnly
                  type="text"
                  name="displayName"
                  value={user?.displayName || ""}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
              {/* 11 */}
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">User Email</legend>
                <input
                  readOnly
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  className="input"
                  placeholder="My awesome page"
                />
              </fieldset>
            </div>
            <button type="submit" className="w-full btn text-2xl p-8 mb-20">
              Update Plant
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default UpdatePlant;
