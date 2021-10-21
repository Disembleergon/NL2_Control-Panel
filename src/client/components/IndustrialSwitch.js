import React, { useState } from "react";
import switch_off from "../assets/switch_right.png";
import switch_on from "../assets/switch_left.png";

const switchIcons = [switch_off, switch_on];

function IndustrialSwitch(props) {
  let [switchState, setSwitchState] = useState({
    state: false,
    icon: switchIcons[0],
  });

  const clickSwitch = () => {
    let new_state = !switchState.state;
    if (new_state) props.sendRequest(props.left_state);
    else props.sendRequest(props.right_state);

    setSwitchState({
      state: new_state,
      icon: switchIcons[+new_state],
    });
  };

  return (
    <div
      className="switch"
      id={`${props.type.toLowerCase()}Switch`}
      style={{ backgroundImage: `url(${switchState.icon})` }}
      onClick={clickSwitch}
    >
      <h1 className="switchTitle" id={`${props.type.toLowerCase()}Title`}>
        {props.type.toUpperCase()}
      </h1>
      <div className="subSigns">
        <p className="openSign" id={`openSign${props.type}`}>
          {props.open === undefined ? "OPEN" : props.open}
        </p>
        <p className="closeSign" id={`closeSign${props.type}`}>
          {props.close === undefined ? "CLOSE" : props.close}
        </p>
      </div>
    </div>
  );
}

export default IndustrialSwitch;
