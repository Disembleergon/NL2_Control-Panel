import React from "react";
import "../styles/ControlPanel.css";

function ControlPanel() {
  return (
    <div className="controlpanelRoute">
      <div className="dispatchBtn" id="dispatchBtn1">
        <h1 className="dispatchTitle" id="dispatchTitle1">
          DISPATCH
        </h1>
      </div>
      <div className="dispatchBtn" id="dispatchBtn2">
        <h1 className="dispatchTitle" id="dispatchTitle2">
          DISPATCH
        </h1>
      </div>
      <div className="switch" id="harnessSwitch">
        <h1 class="switchTitle" id="harnessTitle">
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
      <div className="switch" id="gatesSwitch">
        <h1 class="switchTitle" id="gatesTitle">
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
      <div className="switch" id="platformSwitch">
        <h1 class="switchTitle" id="platformTitle">
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
      <div className="emergencyBtn"></div>
    </div>
  );
}

export default ControlPanel;
