import React from "react";
import ReactDOM from "react-dom/client";

import Pet from "./Pet";

// vite does live code inclusion: tree shaking. So we don't need to worry about just importing the chunks
// from the react libraries. Things will be handled by react

// But it's always good to import stuffs that we actually need

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

export default App;
