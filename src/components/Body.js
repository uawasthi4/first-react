import resData from "../utils/mockData";
import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";

const BodyComponent = () => {
  const [resList, setResList] = useState(resData);
  function filterList() {
    setResList(resData.filter((restaurant) => restaurant.info.avgRating >= 4));
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterList}>
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
