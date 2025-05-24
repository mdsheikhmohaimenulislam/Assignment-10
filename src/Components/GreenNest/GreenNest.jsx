import React from "react";
import { GoPeople } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineSmartphone } from "react-icons/md";

const GreenNest = () => {
  return (
    <div className="grid grid-cols-1 overflow-x-hidden md:grid-cols-2 gap-10 mb-30">
      <div className="card w-96 bg-base-100 card-xs shadow-md">
        <div className="card-body p-5">
          <MdOutlineSmartphone size={30} />
          <h1 className="text-2xl">GreenNest</h1>
          <p className="text-base text-gray-500">1 Million plant lovers connected with us</p>
        </div>
      </div>

      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body p-5">
          <GoPeople size={30} />
          <h1 className="text-2xl">Lifetime Support</h1>
          <p className="text-base text-gray-500">We help you grow your garden for lifetime</p>
        </div>
      </div>

      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body p-5">
          <IoHomeOutline size={30} />
          <h1 className="text-2xl">All Bangladesh Delivery</h1>
          <p className="text-base text-gray-500">Delivering greenery across BD since 2015</p>
        </div>
      </div>

      <div className="card w-96 bg-base-100 card-xs shadow-sm">
        <div className="card-body p-5">
          <LiaShippingFastSolid size={30} />
          <h1 className="text-2xl">Secure Shipping</h1>
          <p className="text-base text-gray-500">Diligent care taken to deliver healthy plants Value For Money</p>
        </div>
      </div>
    </div>
  );
};

export default GreenNest;
