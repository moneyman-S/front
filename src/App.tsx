import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Planning from "./pages/Planning"
import Categories from "./pages/Categories"

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Home">
          <Planning />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>

      </Switch>

    </Router>
  )
}

export default App;
