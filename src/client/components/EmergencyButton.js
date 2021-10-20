import React, { useState } from "react";
import emergency_off from "../assets/emergencyBtn_released.png";
import emergency_on from "../assets/emergencyBtn_pressed.png";

const emergencyBtnIcons = [emergency_off, emergency_on];

function EmergencyButton() {
  let [emergencyState, setEmergencyState] = useState({
    state: false,
    icon: emergencyBtnIcons[0],
  });

  const btnClick = () => {
    setEmergencyState({
      state: !emergencyState.state,
      icon: emergencyBtnIcons[+!emergencyState.state],
    });
  };

  return (
    <div
      className="emergencyBtn"
      style={{ backgroundImage: `url(${emergencyState.icon})` }}
      onClick={btnClick}
    ></div>
  );
}

export default EmergencyButton;
