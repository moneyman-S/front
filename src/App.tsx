import React from 'react';
import SideBar from './components/SideBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Planning from "./pages/Planning"
import { Col, Row, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SideBar />
          <Login />
        </Route>
        <Route path="/Home">
          <Planning />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
