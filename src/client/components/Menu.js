import React from "react";
import "../styles/Menu.css";

function Menu() {
  let onBtnClick = () => {
    let IP_adress = document.querySelector(".menuInput").value;

    // data for connection-test
    let data = {
      action: "",
      connectionTest: true,
    };

    fetch(`http://${IP_adress}:4641`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then(() => {
        sessionStorage.setItem("nl2-control-panel_entered-ip", IP_adress);
        window.open("/panel", "_self");
      })
      .catch(() => {
        alert("Couldn't connect to server");
      });
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
