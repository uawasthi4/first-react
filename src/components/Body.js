import RestaurantCard, {
  withTopRatedLabel,
} from "../components/RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardTopRated = withTopRatedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  function filterList() {
    setFilteredList(
      resList.filter((restaurant) => restaurant.info.avgRating >= 4.2)
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9298689&lng=77.6848366&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResList(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredList(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you're offline. Please check your internet connection!!!
      </h1>
    );
  }

  // Conditional Rendering
  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-3 p-3">
          <input
            type="text"
            className="border border-solid border-black rounded-md py-1 px-2"
            placeholder="Enter Restaurant Name"
            data-testid={"searchInput"}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-3 py-2 m-3 bg-pink-300 rounded-lg hover:bg-pink-500"
            onClick={() => {
              setFilteredList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-3 py-2 m-3 bg-pink-300 rounded-lg hover:bg-pink-500"
            onClick={filterList}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="flex items-center m-3 p-3">
          <label>User Name: </label>
          <input
            type="text"
            className="border border-solid border-black rounded-md py-1 px-2 ml-1"
            placeholder="Enter User Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/**If a restaurant is promoted, add a promoted label to it */}
            {restaurant.info.avgRating >= 4.2 ? (
              <RestaurantCardTopRated resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
