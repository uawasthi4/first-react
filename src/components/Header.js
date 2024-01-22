import AppLogo from "./../../assets/images/AppLogo.png";
import { useState } from "react";

const HeaderComponent = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" height={100} width={200} src={AppLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              setButtonName((prevName) =>
                prevName === "Login" ? "Logout" : "Login"
              )
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
