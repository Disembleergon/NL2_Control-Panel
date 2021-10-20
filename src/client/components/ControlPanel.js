import React, { useState } from "react";
import "../styles/ControlPanel.css";
import dispatch_off from "../assets/greenBtn_off.png";
import dispatch_on from "../assets/greenBtn_on.png";
import IndustrialSwitch from "./IndustrialSwitch";
import EmergencyButton from "./EmergencyButton";

const dispatchBtnIcons = [dispatch_off, dispatch_on];

function ControlPanel() {
  // -------- button states ----------
  let [dispatch1Btn, setDispatch1Btn] = useState({
    state: false,
    icon: dispatchBtnIcons[0],
  });
  let [dispatch2Btn, setDispatch2Btn] = useState({
    state: false,
    icon: dispatchBtnIcons[0],
  });

  // --------- button on-click-functions ----------

  let [dispatchRunning, setDispatchRunning] = useState(false);

  const checkDispatch = () => {
    if (!dispatch1Btn.state && !dispatch2Btn.state) return;
    setDispatchRunning(true);

    // turn off light after timeout
    setTimeout(() => {
      setDispatch1Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatch2Btn({ state: false, icon: dispatchBtnIcons[0] });
      setDispatchRunning(false);
    }, 1500);
  };

  const dispatch1Btn_clicked = () => {
    if (dispatchRunning) return;

    setDispatch1Btn({
      state: !dispatch1Btn.state,
      icon: dispatchBtnIcons[+!dispatch1Btn.state],
    });

    checkDispatch();
  };

  const dispatch2Btn_clicked = () => {
    if (dispatchRunning) return;

    setDispatch2Btn({
      state: !dispatch2Btn.state,
      icon: dispatchBtnIcons[+!dispatch2Btn.state],
    });

    checkDispatch();
  };

  return (
    <div className="controlpanelRoute">
      <div
        className="dispatchBtn"
        id="dispatchBtn1"
        style={{ backgroundImage: `url(${dispatch1Btn.icon})` }}
        onClick={dispatch1Btn_clicked}
      >
        <h1 className="dispatchTitle" id="dispatchTitle1">
          DISPATCH
        </h1>
      </div>
      <div
        className="dispatchBtn"
        id="dispatchBtn2"
        style={{ backgroundImage: `url(${dispatch2Btn.icon})` }}
        onClick={dispatch2Btn_clicked}
      >
        <h1 className="dispatchTitle" id="dispatchTitle2">
          DISPATCH
        </h1>
      </div>

      <IndustrialSwitch type="Harness" />
      <IndustrialSwitch type="Gates" />
      <IndustrialSwitch type="Platform" />
      <EmergencyButton />
    </div>
  );
}

export default ControlPanel;
