import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const Benefit = ({ benefit }) => {
  return (
    <div className="flex items-center text-xl">
      <p className="w-4 h-4 text-green-500">
        <CheckCircleIcon></CheckCircleIcon>
      </p>
      <p>{benefit}</p>
    </div>
  );
};

export default Benefit;
