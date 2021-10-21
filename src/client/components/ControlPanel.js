import React, { useEffect, useState } from "react";
import "../styles/ControlPanel.css";
import dispatch_off from "../assets/greenBtn_off.png";
import dispatch_on from "../assets/greenBtn_on.png";
import IndustrialSwitch from "./IndustrialSwitch";
import EmergencyButton from "./EmergencyButton";
import DispatchButton from "./DispatchButton";

const dispatchBtnIcons = [dispatch_off, dispatch_on];

function ControlPanel() {
  const sendRequest = (action) => {
    let data = {
      action: action,
      connectionTest: false,
    };

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
      window.open("/", "_self");
    });
  };

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
      />

      <DispatchButton
        buttonNumber="2"
        dispatchRunning={dispatchRunning}
        buttonState={dispatch2Btn}
        setButtonState={setDispatch2Btn}
        buttonIcons={dispatchBtnIcons}
      />

      <IndustrialSwitch
        type="Harness"
        sendRequest={sendRequest}
        left_state="harnessOpen"
        right_state="harnessClose"
      />
      <IndustrialSwitch
        type="Gates"
        sendRequest={sendRequest}
        left_state="gatesOpen"
        right_state="gatesClose"
      />
      <IndustrialSwitch
        type="Platform"
        open="RAISE"
        close="LOWER"
        sendRequest={sendRequest}
        left_state="platformRaise"
        right_state="platformLower"
      />
      <EmergencyButton sendRequest={sendRequest} />
    </div>
  );
}

export default ControlPanel;
