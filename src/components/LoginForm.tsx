import { Form, Button, Row, Container, Col } from "react-bootstrap"
import "./LoginForm.css"
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

type LoginProps = {
  optional?: string;
}
//eslint-disable-next-line import/no-anonymous-default-export
export default (props: LoginProps) => {
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
              <LinkContainer to="/home"><Button variant="primary" type="submit">Login</Button></LinkContainer>
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
  )
}
