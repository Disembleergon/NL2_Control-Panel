import React from "react";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <input type="text" placeholder="IP-adress" className="menuInput"></input>
      <button className="menuButton">CONNECT</button>
    </div>
  );
}

export default Menu;
