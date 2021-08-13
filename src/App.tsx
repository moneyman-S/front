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
import 'E:/code/projeto/moneyman/front/src/components/SideBar.css'
import Planning from "./pages/Planning"
import { Col, Row, Container } from 'react-bootstrap';

function App() {
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
  )
}

export default App;
