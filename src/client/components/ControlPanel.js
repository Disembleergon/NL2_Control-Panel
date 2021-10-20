import React, { useEffect, useState } from "react";
import "../styles/ControlPanel.css";
import dispatch_off from "../assets/greenBtn_off.png";
import dispatch_on from "../assets/greenBtn_on.png";
import IndustrialSwitch from "./IndustrialSwitch";
import EmergencyButton from "./EmergencyButton";
import DispatchButton from "./DispatchButton";

const dispatchBtnIcons = [dispatch_off, dispatch_on];

function ControlPanel() {
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

    // turn off light after timeout
    setTimeout(() => {
      setDispatch1Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatch2Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatchRunning(false);
    }, 1500);
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

      <IndustrialSwitch type="Harness" />
      <IndustrialSwitch type="Gates" />
      <IndustrialSwitch type="Platform" />
      <EmergencyButton />
    </div>
  );
}

export default ControlPanel;
