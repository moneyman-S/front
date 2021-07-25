import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Planning from './pages/Planning';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Planning />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
