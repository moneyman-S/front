import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";


type Props = {
  onHide: () => void;
  show: boolean;
};

export default (props: Props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Criação de categoria
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Categoria" />
            </Col>
          </Row>
        </Form>
        <Form>
          <Row>
            <Col lg="2" className="mt-5">
              <Form.Select>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
        <br />
        <Form>
          <Row>
            <Col lg="2">
              <Form.Select>
                <option></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Salvar</Button>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal >
  )
}
