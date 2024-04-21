import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[200px] rounded-lg bg-pink-50 hover:bg-pink-200 border border-solid border-pink-500"
    >
      <img
        className="rounded-lg border border-solid h-[200px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-1 text-md w-[166px] text-ellipsis whitespace-nowrap overflow-x-hidden">
        {name}
      </h3>
      <h4 className="text-sm text-ellipsis whitespace-nowrap w-[166px] overflow-x-hidden">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-sm">{avgRating} ⭐</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm">{sla?.slaString}</h4>
    </div>
  );
};

// Higher Order Component
export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-5 p-1 rounded-md text-xs">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
