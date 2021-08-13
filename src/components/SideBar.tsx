import React, { ReactElement } from "react";
import "./SideBar.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHome, faTable, faCog, faUser, faHeadset } from "@fortawesome/free-solid-svg-icons";

type SideBarProps = {

}

const SideBar = (props: SideBarProps): ReactElement<SideBarProps> => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Col className="sidebar" >
          <Nav defaultActiveKey="/Home" className="flex-column">
            <Nav.Item className="nav-item">
              <Nav.Link className="link" href="/"><FontAwesomeIcon className="sidebar-icon" icon={faUser} /> User</Nav.Link>
            </Nav.Item >
            <Nav.Item className="nav-item">
              <Nav.Link className="link" href="/Home"><FontAwesomeIcon className="sidebar-icon" icon={faHome} /> Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="link" href="#"><FontAwesomeIcon className="sidebar-icon" icon={faTable} /> Tables</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="link" href="#"><FontAwesomeIcon className="sidebar-icon" icon={faCog} /> Configuration</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link className="link" href="#"><FontAwesomeIcon className="sidebar-icon" icon={faHeadset} /> Contact-us</Nav.Link>
            </Nav.Item>

            <Button
              onClick={() => setOpen(!open)}
              variant="success"
              size="sm"
              className=""
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;
