import React, { ReactElement } from "react";
import "./SideBar.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";

type SideBarProps = {
  readonly model: ModelList;
}

type NavItem = {
  readonly link: string;
  readonly icon: IconDefinition;
  readonly description: string;
}

export type ModelList = {
  readonly dataSet: readonly NavItem[];
}


const SideBar = (props: SideBarProps): ReactElement<SideBarProps> => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Row>
        <Col className={ `sidebar ${open ? "open" : "closed"}`} >
          <Nav defaultActiveKey="/Home" className="flex-column">

            {props.model.dataSet.map((data,i) => 
              <Nav.Item key={`link-${i}`} className="nav-item">
                <Nav.Link className="link" href={data.link}>
                  <FontAwesomeIcon className="sidebar-icon" icon={data.icon}/>
                  <span className="bar-text">{data.description}</span>
                </Nav.Link>
              </Nav.Item> )}

            <Button
              onClick={() => setOpen(!open)}
              variant="success"
              size="sm"
              className="button"
            >
              <FontAwesomeIcon icon={ open ? faAngleLeft : faAngleRight } />
            </Button>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideBar;
