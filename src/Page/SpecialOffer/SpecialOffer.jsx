import React from 'react';
import { Gift } from 'lucide-react'; // Optional icon

const SpecialOffer = () => {
  return (
    <section
      className="bg-base-300 b rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 my-6"
      aria-label="Special Eid offer on PC components"
    >
      <div className="flex items-center gap-4">
        <Gift className="text-green-700 w-10 h-10" aria-hidden="true" />
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-green-900 leading-tight">
            🎉 Special Offer!
          </h2>
          <p className="text-green-800 mt-1 text-sm md:text-base">
            Get up to <span className="font-semibold">25% OFF</span> on all Plants components .
          </p>
        </div>
      </div>
      <a
        href="https://www.plantshop.me/ae-en/?srsltid=AfmBOopKJa4BQWg_HHPpKLJtTldx5dYqDm55Ot39aCCAGC8sSaTwTNbx"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
      >
        Shop Now
      </a>
      
    </section>
  );
};

export default SpecialOffer;
