import React from "react";
import { Button, Col, Container, DropdownButton, Row, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Table from "../components/Table";
import "./Planning.css";
type Props = {

}
const Planning: React.FunctionComponent<Props> = (props: Props) => {
  return <div></div>;
  /*
  return (
    <Container>
      <Row>
        <Col>
          <DropdownButton id="dropdown-button" title="Modo" className="w-100">
            <DropdownItem>1° Opção</DropdownItem>
            <DropdownItem>2° Opção</DropdownItem>
            <DropdownItem>3° Opção</DropdownItem>
          </DropdownButton>
        </Col>

        <Col>
          <Row>
            <Col>
              <Button><FontAwesomeIcon icon={faArrowLeft} /></Button>
            </Col>
            <Col md="8">
              <input type="date" className="form-control" />
            </Col>
            <Col className="ml-2">
              <Button><FontAwesomeIcon icon={faArrowRight} /></Button>
            </Col>
          </Row>
        </Col>

        <Col>
          <Button>Criar previsão de transação</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table />
        </Col>
      </Row>
    </Container>
  );
  */
};
export default Planning;
