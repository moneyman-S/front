import { Container, Row, Col } from "react-bootstrap"
import LoginForm from "../components/LoginForm"
import "./Login.css"

type LoginProps = {
  optional?: string;
}
//eslint-disable-next-line import/no-anonymous-default-export
export default (props: LoginProps) => {
  return (
    <Container className="d-flex align-content-between justify-content-sm-between flex-column h-100 p-5">
      <Row className="d-flex justify-content-center mt-5 mb-5">
        <Col md="4" className="ml-6 d-flex justify-content-sm-around" lg="4">
          <h1>Moneyman</h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="align-self-end">
          <LoginForm></LoginForm>
        </Col>
      </Row>
    </Container>
  )
}
