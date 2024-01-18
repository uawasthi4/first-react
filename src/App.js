import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// JSX (transpiled before it reaches the JS) -> PARCEL -> BABEL

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(Render)

// JSX heading element
const heading = (
  <h2 id="heading">JSX is not HTML, it's a HTML like syntax 😒</h2>
);

const TitleComponent = () => <h1>Welcome to First React App !!! 😎</h1>;

// Functional Component & Component Composition
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    {heading}
    <h3 id="head">React Functional Component 😁</h3>
  </div>
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);
