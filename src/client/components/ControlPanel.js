import React, { useEffect, useState } from "react";
import "../styles/ControlPanel.css";
import dispatch_off from "../assets/greenBtn_off.png";
import dispatch_on from "../assets/greenBtn_on.png";
import IndustrialSwitch from "./buttons/IndustrialSwitch";
import EmergencyButton from "./buttons/EmergencyButton";
import DispatchButton from "./buttons/DispatchButton";
import KeySwitch from "./buttons/KeySwitch";

const dispatchBtnIcons = [dispatch_off, dispatch_on];

function ControlPanel() {
  const sendRequest = (action) => {
    // prepare data
    let data = {
      action: action,
      connectionTest: false,
    };

    // send data to server with a http post request
    fetch(
      `http://${sessionStorage.getItem("nl2-control-panel_entered-ip")}:4641`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
        mode: "cors",
      }
    ).catch(() => {
      alert("Couldn't connect to server");
      // go back to home screen
      window.open("/", "_self");
    });
  };

  // state of the control panel [off/on]
  let [panelState, setPanelState] = useState(false); // false = off

  // -------- dispatch-button states ----------
  let [dispatch1Btn, setDispatch1Btn] = useState({
    state: false,
    icon: dispatchBtnIcons[0],
  });
  let [dispatch2Btn, setDispatch2Btn] = useState({
    state: false,
    icon: dispatchBtnIcons[0],
  });

  // --------- dispatch-button logic ----------

  let [dispatchRunning, setDispatchRunning] = useState(false);

  const checkDispatch = () => {
    // cancel if both dispatch buttons aren't activated
    if (!dispatch1Btn.state || !dispatch2Btn.state) return;
    setDispatchRunning(true);

    // prevent multiple requests with one dispatch
    if (!dispatchRunning) sendRequest("dispatch");

    // turn off light after timeout
    setTimeout(() => {
      setDispatch1Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatch2Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatchRunning(false);
    }, 3500);
  };

  useEffect(checkDispatch, [checkDispatch, dispatch1Btn]);
  useEffect(checkDispatch, [checkDispatch, dispatch2Btn]);

  return (
    <div className="controlpanelRoute">
      <DispatchButton
        buttonNumber="1"
        dispatchRunning={dispatchRunning}
        buttonState={dispatch1Btn}
        setButtonState={setDispatch1Btn}
        buttonIcons={dispatchBtnIcons}
        panelState={panelState}
      />

      <DispatchButton
        buttonNumber="2"
        dispatchRunning={dispatchRunning}
        buttonState={dispatch2Btn}
        setButtonState={setDispatch2Btn}
        buttonIcons={dispatchBtnIcons}
        panelState={panelState}
      />

      <IndustrialSwitch
        type="Harness"
        sendRequest={sendRequest}
        left_state="harnessOpen"
        right_state="harnessClose"
        panelState={panelState}
      />
      <IndustrialSwitch
        type="Gates"
        sendRequest={sendRequest}
        left_state="gatesOpen"
        right_state="gatesClose"
        panelState={panelState}
      />
      <IndustrialSwitch
        type="Platform"
        open="RAISE"
        close="LOWER"
        sendRequest={sendRequest}
        left_state="platformRaise"
        right_state="platformLower"
        panelState={panelState}
      />
      <IndustrialSwitch
        type="Car"
        open="UNLOCK"
        close="LOCK"
        sendRequest={sendRequest}
        left_state="carUnlock"
        right_state="carLock"
        panelState={panelState}
      />

      <KeySwitch panelState={panelState} setPanelState={setPanelState} />
      <EmergencyButton sendRequest={sendRequest} panelState={panelState} />
    </div>
  );
}

export default ControlPanel;
