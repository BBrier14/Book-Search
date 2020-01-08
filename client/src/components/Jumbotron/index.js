//-----Import-----//
import React from "react";
import "./style.css";

//-----Jumbo Component-----//
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

//-----Export-----//
export default Jumbotron;