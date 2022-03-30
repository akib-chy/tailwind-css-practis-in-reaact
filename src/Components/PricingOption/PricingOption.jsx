import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = ({ prices }) => {
  const { price, name, benefits } = prices;
  return (
    <div className="bg-white p-4 rounded-lg mt-5">
      <h2 className="bg-indigo-300 py-4 rounded-lg text-2xl font-bold">
        {name}
      </h2>
      <p>
        <small className="text-5xl font-bold mt-4">{price}</small>
        <small className="font-bold text-xl text-gray-500">/mo</small>
      </p>
      <div>
        <h3 className="text-left text-xl">Benefit:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
        <button className="bg-green-500 w-full py-3 mt-4 text-white text-xl font-bold rounded flex items-center justify-center hover:bg-red-300 duration-500 ease-in-out">
          Buy Now
          <ArrowRightIcon className="w-7 h-7 ml-2"></ArrowRightIcon>
        </button>
      </div>
    </div>
  );
};

export default PricingOption;
