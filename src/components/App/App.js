import React from "react";
import "./App.css";
import { Header } from "../Header/Header";
import { MainContainer } from "../Main";
import { FooterContainer } from "../Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
