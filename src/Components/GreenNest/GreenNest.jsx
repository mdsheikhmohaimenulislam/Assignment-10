import React from "react";
import { GoPeople } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineNaturePeople } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

const GreenNest = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center my-20">
      {/* Card 1 */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <MdOutlineSmartphone size={30} />
          <h1 className="text-2xl font-bold">GreenNest</h1>
          <p className="text-base text-gray-500">1 Million plant lovers connected with us</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <GoPeople size={30} />
          <h1 className="text-2xl font-bold">Lifetime Support</h1>
          <p className="text-base text-gray-500">We help you grow your garden for lifetime</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <IoHomeOutline size={30} />
          <h1 className="text-2xl font-bold">All Bangladesh Delivery</h1>
          <p className="text-base text-gray-500">Delivering greenery across BD since 2015</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <LiaShippingFastSolid size={30} />
          <h1 className="text-2xl font-bold">Secure Shipping</h1>
          <p className="text-base text-gray-500">Diligent care taken to deliver healthy plants</p>
        </div>
      </div>

      {/* ✅ Card 5 - New */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <FaLeaf size={30} />
          <h1 className="text-2xl font-bold">Eco-Friendly Packaging</h1>
          <p className="text-base text-gray-500">We use sustainable & recyclable materials</p>
        </div>
      </div>

      {/* ✅ Card 6 - New */}
      <div className="card w-105 lg:w-96 bg-base-100 shadow-md">
        <div className="card-body p-5 items-center text-center">
          <MdOutlineNaturePeople size={30} />
          <h1 className="text-2xl font-bold">Plant Care Guides</h1>
          <p className="text-base text-gray-500">Tips & tutorials for every plant lover</p>
        </div>
      </div>
    </div>
  );
};

export default GreenNest;
