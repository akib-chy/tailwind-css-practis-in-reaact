import React from "react";

const PricingOption = ({ prices }) => {
  const { price, name } = prices;
  return (
    <div className="bg-white p-4 rounded-lg mt-5">
      <h2 className="bg-indigo-300 py-4 rounded-lg text-2xl font-bold">
        {name}
      </h2>
      <p>
        <small className="text-5xl font-bold mt-4">{price}</small>
        <small className="font-bold text-xl text-gray-500">/mo</small>
      </p>
    </div>
  );
};

export default PricingOption;
