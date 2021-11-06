import React, { useState } from "react";
import emergency_off from "../../assets/emergencyBtn_released.png";
import emergency_on from "../../assets/emergencyBtn_pressed.png";

const emergencyBtnIcons = [emergency_off, emergency_on];

function EmergencyButton(props) {
  let [emergencyState, setEmergencyState] = useState({
    state: false,
    icon: emergencyBtnIcons[0],
  });

  const btnClick = () => {
    let new_state = !emergencyState.state;

    // send request if panel isn't turned off
    if (props.panelState) {
      if (new_state) props.sendRequest("emergencyOn");
      else props.sendRequest("emergencyOff");
    }

    setEmergencyState({
      state: new_state,
      icon: emergencyBtnIcons[+new_state],
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
