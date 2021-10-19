import React, { useState } from "react";
import "../styles/ControlPanel.css";
import dispatch_off from "../assets/greenBtn_off.png";
import dispatch_on from "../assets/greenBtn_on.png";
import switch_off from "../assets/switch_right.png";
import switch_on from "../assets/switch_left.png";
import emergency_off from "../assets/emergencyBtn_released.png";
import emergency_on from "../assets/emergencyBtn_pressed.png";

// ------- button icons ----------
const dispatchBtnIcons = [dispatch_off, dispatch_on];
const switchIcons = [switch_off, switch_on];
const emergencyBtnIcons = [emergency_off, emergency_on];

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
  let [harnessBtn, setHarnessBtn] = useState({
    state: false,
    icon: switchIcons[0],
  });
  let [gatesBtn, setGatesBtn] = useState({
    state: false,
    icon: switchIcons[0],
  });
  let [platformBtn, setPlatformBtn] = useState({
    state: false,
    icon: switchIcons[0],
  });
  let [emergencyBtn, setEmergencyBtn] = useState({
    state: false,
    icon: emergencyBtnIcons[0],
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

  const harnessBtn_clicked = () => {
    setHarnessBtn({
      state: !harnessBtn.state,
      icon: switchIcons[+!harnessBtn.state],
    });
  };

  const gatesBtn_clicked = () => {
    setGatesBtn({
      state: !gatesBtn.state,
      icon: switchIcons[+!gatesBtn.state],
    });
  };

  const platformBtn_clicked = () => {
    setPlatformBtn({
      state: !platformBtn.state,
      icon: switchIcons[+!platformBtn.state],
    });
  };

  const emergencyBtn_clicked = () => {
    setEmergencyBtn({
      state: !emergencyBtn.state,
      icon: emergencyBtnIcons[+!emergencyBtn.state],
    });
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
      <div
        className="switch"
        id="harnessSwitch"
        style={{ backgroundImage: `url(${harnessBtn.icon})` }}
        onClick={harnessBtn_clicked}
      >
        <h1 className="switchTitle" id="harnessTitle">
          HARNESS
        </h1>
        <div className="subSigns">
          <p className="openSign" id="openSignHarness">
            OPEN
          </p>
          <p className="closeSign" id="closeSignHarness">
            CLOSE
          </p>
        </div>
      </div>
      <div
        className="switch"
        id="gatesSwitch"
        style={{ backgroundImage: `url(${gatesBtn.icon})` }}
        onClick={gatesBtn_clicked}
      >
        <h1 className="switchTitle" id="gatesTitle">
          GATES
        </h1>
        <div className="subSigns">
          <p className="openSign" id="openSignGates">
            OPEN
          </p>
          <p className="closeSign" id="closeSignGates">
            CLOSE
          </p>
        </div>
      </div>
      <div
        className="switch"
        id="platformSwitch"
        style={{ backgroundImage: `url(${platformBtn.icon})` }}
        onClick={platformBtn_clicked}
      >
        <h1 className="switchTitle" id="platformTitle">
          PLATFORM
        </h1>
        <div className="subSigns">
          <p className="openSign" id="openSignPlatform">
            OPEN
          </p>
          <p className="closeSign" id="closeSignPlatform">
            CLOSE
          </p>
        </div>
      </div>
      <div
        className="emergencyBtn"
        style={{ backgroundImage: `url(${emergencyBtn.icon})` }}
        onClick={emergencyBtn_clicked}
      ></div>
    </div>
  );
}

export default ControlPanel;
