import "./SideBar.css"
import { Col, Container, Nav, Row } from "react-bootstrap"

type SideBarProps = {

}

export default (props: SideBarProps) => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column position-absolute">
      <Nav.Item>
        <Nav.Link href="">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}