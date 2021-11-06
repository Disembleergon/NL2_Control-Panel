import React from "react";

function DispatchButton(props) {
  const buttonClick = () => {
    // cancel if dispatch is running or the panel is turned off
    if (props.dispatchRunning || !props.panelState) return;

    props.setButtonState({
      state: !props.buttonState.state,
      icon: props.buttonIcons[+!props.buttonState.state],
    });
  };

  return (
    <div
      className="dispatchBtn"
      id={`dispatchBtn${props.buttonNumber}`}
      style={{ backgroundImage: `url(${props.buttonState.icon})` }}
      onClick={buttonClick}
    >
      <h1 className="dispatchTitle" id={`dispatchTitle${props.buttonNumber}`}>
        DISPATCH
      </h1>
    </div>
  );
}

export default DispatchButton;
