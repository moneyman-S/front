import { Col, Container, Row, Table as BootstrapTable } from "react-bootstrap"
import "./Table.css"

type Column<T = unknown> = {
  description: string;
  prop: keyof T;
}

export type TableModel<T = unknown> = {
  data: T[];
  cols: Column<T>[];
}

type TableProps<T = unknown> = {
  model: TableModel<T>
}
// eslint-disable-next-line import/no-anonymous-default-export
const Table = function <T = unknown>(props: TableProps<T>) {
  return (
    <Container>
      <Row>
        <Col>
          <BootstrapTable striped bordered hover variant="light" >
            <thead>
              <tr>
                {props.model.cols.map(({ description }) => <th>{description}</th>)}
              </tr>
            </thead>
            <tbody>
              {props.model.data.map((data) => {
                return (
                  <tr>
                    {props.model.cols.map(({ prop }) => <td>{data[prop]}</td>)}
                  </tr>
                )
              })}
            </tbody>
          </BootstrapTable>
        </Col>
      </Row>
    </Container>
  )
}
export default Table;
