import React, { useState } from "react";
import key_left from "../../assets/key_left.png";
import key_right from "../../assets/key_right.png";

const keyIcons = [key_left, key_right];

// Key to turn on/off the panel
function KeySwitch(props) {
  let [keyState, setKeyState] = useState({
    state: false,
    icon: keyIcons[0],
  });

  const keyToggle = () => {
    // change icon
    let newState = !keyState.state;
    setKeyState({
      state: newState,
      icon: keyIcons[+newState],
    });

    // turn the panel on or off
    props.setPanelState(!props.panelState);
  };

  return (
    <div
      className="key"
      style={{ backgroundImage: `url(${keyState.icon})` }}
      onClick={keyToggle}
    ></div>
  );
}

export default KeySwitch;
