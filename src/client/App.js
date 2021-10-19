import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ControlPanel from "./components/ControlPanel";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/panel" exact component={ControlPanel} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
