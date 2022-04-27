import React from "react";
import { Header } from "./components/Header";
import { Page } from "./components/Page";
import "./App.css";

const App = () => {
  console.log(process.env)
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
};

export default App;
