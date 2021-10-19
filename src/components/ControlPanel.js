import React, { useState } from "react";
import "../styles/ControlPanel.css";

function ControlPanel() {
  return (
    <div className="controlpanelRoute">
      <div className="dispatchBtn" id="dispatchBtn1"></div>
      <div className="dispatchBtn" id="dispatchBtn2"></div>
      <div className="switch" id="harnessSwitch"></div>
      <div className="switch" id="gatesSwitch"></div>
      <div className="switch" id="platformSwitch"></div>
      <div className="emergencyBtn"></div>
    </div>
  );
}

export default ControlPanel;
