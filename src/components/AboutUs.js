// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
// or import { Component } from "react";

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is about us page</h2>
//       {/* <User name="Utkarsh (function)" location="Bangalore (Function)" /> */}
//       <UserClass name="Utkarsh (class)" location="Bangalore (Class)" />
//     </div>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          LoggedInUser:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <span className="text-xl font-bold">{loggedInUser}</span>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is about us page</h2>
        {/* <User name="Utkarsh (function)" location="Bangalore (Function)" /> */}
        <UserClass name="Utkarsh (class)" location="Bangalore (Class)" />
      </div>
    );
  }
}
export default AboutUs;
