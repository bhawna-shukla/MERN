import React from "react";
import Data from "./DummyData";

const ProductListing = () => {

  const weatherCondition = (temp) => {
    if (temp <= 28) {
      return 'hover:bg-sky-100 text -white'
    }
    else {
      return 'hover:bg-red-200 text-white'
    }
  }


  const displayCards = () => {
    return Data.map((item) => (
      <div className="w-full md:w-1/3 mb-6">
        <div className={`rounded - lg shadow-lg p-4 ${weatherCondition(item.temperature)}`}>
        <img className="w-full h-48 object-cover rounded-lg" src={item.img} alt="" />
        <div className="p-4">
          <h3>{item.location}</h3>
          <hr />
          <h5>Temperature : {item.temperature} </h5>
          <h5> Humidity : {item.humidity} </h5>

        </div>
      </div>
      </div >
    ));
  };
return (
  <div className="p-10">
    <h1 className="font-bold text-center text-5xl text-gray-500 mb-8">
      Today's Sky Story
    </h1>
    <div className="flex flex-wrap mx-auto">
      {displayCards()}
    </div>
  </div>
);
};

export default ProductListing;