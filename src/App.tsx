import React from "react";
import "./App.css";
import SideBar from"./components/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Planning from "./pages/Planning";

const App: React.FunctionComponent<unknown> = () => {
  return (

    <div className="d-flex">
      <div className="flex-shrink-3">
        <SideBar />
      </div>
      <Router>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Home">
            <Planning />
          </Route>
        </Switch>

      </Router>
    </div>
  );
};

export default App;
