import React from "react";

const Topcards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$8000</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 txt-lg">+20%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$80000</p>
          <p className="text-gray-600">Annual Revenue</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 txt-lg">+15%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">11000</p>
          <p className="text-gray-600">Clients</p>
        </div>
        <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
          <span className="text-green-700 txt-lg">+8%</span>
        </p>
      </div>
    </div>
  );
};

export default Topcards;
