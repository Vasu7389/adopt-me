import React from "react";
import { createRoot } from "react-dom";
//after vite and react installation, we can use/import above lines

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

//step 3:
const App = () => {
  return React.createElement("div", { id: "my-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Dog",
      breed: "Husky",
    }),
    React.createElement(Pet, {
      name: "Jenny",
      animal: "Dog",
      breed: "Doberman",
    }),
    React.createElement(Pet, {
      name: "Sherin",
      animal: "Dog",
      breed: "Desi",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

//step 4: install dependencies
//npm i -D prettier@2.7.1
//  we can give our configs in .prettierrc, so that vscode will check that file is there and apply the configs from it. Otherwise use default!

//npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0
//create eslintrc.json config

//npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0

//npm i  react@18.2.0 react-dom@18.2.0
