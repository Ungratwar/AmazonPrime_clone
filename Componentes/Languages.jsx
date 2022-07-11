import React from "react";
import "./Languages.css";

const Languages =() => {
    return(
      <select className="dropdown">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Japanese">Japanese</option>
          <option value="Dansk">Dansk</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Chinese">Chinese</option>
      </select>
    );
}

export default Languages;