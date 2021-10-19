import React from "react";
import "../styles/Menu.css";

function Menu() {
  let onBtnClick = () => {
    let IP_adress = document.querySelector(".menuInput").innerHTML;
    sessionStorage.setItem("nl2-control-panel_entered-ip", IP_adress);
    window.open("/panel", "_self");
  };

  return (
    <div className="menuRoute">
      <div className="menu">
        <input
          type="text"
          placeholder="IP-adress"
          className="menuInput"
        ></input>
        <button className="menuButton" onClick={onBtnClick}>
          CONNECT
        </button>
      </div>
    </div>
  );
}

export default Menu;
