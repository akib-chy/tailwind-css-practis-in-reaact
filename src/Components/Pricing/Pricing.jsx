import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricing = [
    { id: 1, name: "Free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 3, name: "Premioum", price: 19.99 },
  ];
  return (
    <div className="bg-indigo-300 p-5 mt-8">
      <h2 className="text-5xl font-mono">This Is Price Section</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sed,
        dolor nemo enim eaque illo. Autem itaque aut soluta voluptas.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {pricing.map((prices) => (
          <PricingOption prices={prices} key={prices.id}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
