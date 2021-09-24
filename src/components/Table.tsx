import React, { ReactElement } from "react";
import { Col, Container, Row, Table as BootstrapTable } from "react-bootstrap";
import "./Table.css";

type Column<T = unknown> = {
  readonly description: string;
  readonly prop: keyof T;
}

export type TableModel<T = unknown> = {
  readonly dataSet: readonly T[];
  readonly cols: readonly Column<T>[];
}

type TableProps<T = unknown> = {
  readonly model: TableModel<T>
}
// eslint-disable-next-line import/no-anonymous-default-export
const Table = function <T = unknown>(props: TableProps<T>): ReactElement<TableProps<T>>  {
  
  return (
    <Container>
      <Row>
        <Col>
          <BootstrapTable className="border border-3 border-success rounded-3" striped bordered hover variant="dark">
            <thead>
              <tr>
                {props.model.cols.map(({ description },i) => <th key={`header-${i}`}>{description}</th>)}
              </tr>
            </thead>
            <tbody>
              {props.model.dataSet.map((data,i) => {
                return (
                  <tr key={`row-${i}`}>
                    {props.model.cols.map(({ prop },j) => <td key={`cell-${i}-${j}`}>{data[prop]}</td>)}
                  </tr>
                );
              })}
            </tbody>
          </BootstrapTable>
        </Col>
      </Row>
    </Container>
  );
};

export default Table;
