import React from "react";
import { Form, Button, Row, Container, Col } from "react-bootstrap";
import "./LoginForm.css";
import { LinkContainer } from "react-router-bootstrap";

type LoginProps = {
  readonly optional?: string;
}
//eslint-disable-next-line import/no-anonymous-default-export
const LoginForm: React.FunctionComponent<LoginProps> = (props: LoginProps) => {
  return (
    <Form>
      <Container className="mb-4">
        <Row className="d-flex justify-content-center">
          <Col md="5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Nome de usuário ou e-mail" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md="2">
            <Row className="mb-2">
              <LinkContainer to="/home"><Button variant="success" type="submit">Login</Button></LinkContainer>
            </Row>
            <Row>
              <Button variant="secondary" type="submit">
                Cadastre-se
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </Form >
  );
};
export default LoginForm;
