import React from "react";
import "./styles.css";
import "./styles2.css";
import "./styles3.css";
import "./styles4.css";
import "./styles5.css";
import Header from "./Header";
import Main from "./Main";
import Mon from "./Mon";
import Mon2 from "./Mon2";
import Mon3 from "./Mon3";
import Mon4 from "./Mon4";
import End from "./End";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Mon />
      <Mon2 />
      <Mon3 />
      <Mon4 />
      <End />
    </div>
  );
}
