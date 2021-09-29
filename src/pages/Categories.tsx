import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CreateCategoryDialog from "../components/CreateCategoryDialog";
import "./Categories.css";

type Props = {

};

export default (props: Props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container>
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <CreateCategoryDialog
          show={modalShow}
          onSave={() => {
            setModalShow(false);
            return true;
          }}
          onHide={() => {
            setModalShow(false);
            return true;
          }}
        />
      </>
      <Row>
        <Col>
        </Col>
      </Row>
    </Container>
  );
};
