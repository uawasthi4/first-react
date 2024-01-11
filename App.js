const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello from h1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hello from h2 tag!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello from child 2 - h1 tag!"),
    React.createElement("h2", { id: "heading" }, "Hello from child 2 - h2 tag!"),
  ]),
]);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
