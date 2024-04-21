import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";
import { useParams } from "react-router-dom";

{/**Custom Hook */}
const useRestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const resJson = await data.json();
    setResMenu(resJson);
  };

  return resMenu;
};

export default useRestaurantMenu;
