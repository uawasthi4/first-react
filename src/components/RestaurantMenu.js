import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const restaurantInfo = useRestaurantMenu();

  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.data?.cards?.[2].card?.card?.info;
  const { itemCards } =
    restaurantInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      .cards?.[2]?.card?.card;

  const itemCategories =
    restaurantInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (cardObj) =>
        cardObj.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-4 p-4">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {/**Categories' Accordion */}
      {itemCategories.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            setShowIndex={() =>
              setShowIndex(showIndex !== index ? index : null)
            }
            showItems={index === showIndex && true}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
