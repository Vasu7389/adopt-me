import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
//after vite and react installation, we can use/import above lines

//1st step for react query after package installtion
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

//step 3:
// const App = () => {
//   return React.createElement("div", { id: "my-id" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Leo",
//       animal: "Dog",
//       breed: "Husky",
//     }),
//     React.createElement(Pet, {
//       name: "Jenny",
//       animal: "Dog",
//       breed: "Doberman",
//     }),
//     React.createElement(Pet, {
//       name: "Sherin",
//       animal: "Dog",
//       breed: "Desi",
//     }),
//   ]);
// };

// const App = () => {
//   return (
//     <div id="my-id">
//       <h1>Adopt Me!</h1>
//       <Pet name="Leo" animal="Dog" breed="Husky" />
//       <Pet name="Jenny" animal="Dog" breed="Doberman" />
//       <Pet name="Sherin" animal="Dog" breed="Desi" />
//     </div>
//   );
// };

const App = () => {
  return (
    <div id="my-id">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);

//step 4: install dependencies
//npm i -D prettier@2.7.1
//  we can give our configs in .prettierrc, so that vscode will check that file is there and apply the configs from it. Otherwise use default!

//npm i -D eslint eslint-config-prettier
//create eslintrc.json config

//npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0

//npm i react@18.2.0 react-dom@18.2.0

//npm install react-router-dom@6.4.1

//npm install @tanstack/react-query@4.10.1
