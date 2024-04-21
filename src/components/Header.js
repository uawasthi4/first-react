import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using our Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-4">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-56"
            height={100}
            width={200}
            src={
              "https://penji.co/wp-content/uploads/2024/01/5.-Food-Panda.jpg"
            }
          ></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status: {onlineStatus ? "💚" : "❤️"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4 py-2 bg-pink-300 rounded-lg  hover:bg-pink-500"
            onClick={() =>
              setButtonName((prevName) =>
                prevName === "Login" ? "Logout" : "Login"
              )
            }
          >
            {buttonName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
