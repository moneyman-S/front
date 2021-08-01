import { Col, Container, Row, Table } from "react-bootstrap"
import "./Table.css"

type Props = {
    msg: string;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (props: Props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Vencimento</th>
                                <th>Contato</th>
                                <th>Categoria</th>
                                <th>Descrição</th>
                                <th>Tipo</th>
                                <th>Sub-Tipo</th>
                                <th>Carteira/Cartão</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10/12/2021</td>
                                <td>Caixa Federal</td>
                                <td>Empréstimo</td>
                                <td>pagar rapido mãe corre perigo</td>
                                <td>Débito</td>
                                <td>Ocasional</td>
                                <td>Cartão</td>
                                <td>R$ 4000</td>
                            </tr>
                            <tr>
                                <td>10/12/2021</td>
                                <td>Caixa Federal</td>
                                <td>Empréstimo</td>
                                <td>pagar rapido mãe corre perigo</td>
                                <td>Débito</td>
                                <td>Ocasional</td>
                                <td>Cartão</td>
                                <td>R$ 4000</td>
                            </tr>
                            <tr>
                                <td>10/12/2021</td>
                                <td>Caixa Federal</td>
                                <td>Empréstimo</td>
                                <td>pagar rapido mãe corre perigo</td>
                                <td>Débito</td>
                                <td>Ocasional</td>
                                <td>Cartão</td>
                                <td>R$ 4000</td>
                            </tr>
                            <tr>
                                <td>10/12/2021</td>
                                <td>Caixa Federal</td>
                                <td>Empréstimo</td>
                                <td>pagar rapido mãe corre perigo</td>
                                <td>Débito</td>
                                <td>Ocasional</td>
                                <td>Cartão</td>
                                <td>R$ 4000</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
