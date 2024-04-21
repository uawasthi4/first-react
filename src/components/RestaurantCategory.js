import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/**Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {" "}
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          {!showItems ? <span>🔽</span> : <span>🔼</span>}
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/**Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
