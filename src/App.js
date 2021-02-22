import React from "react";

import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./Styles/Global";
import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
