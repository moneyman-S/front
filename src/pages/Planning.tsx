import { Button, Col, Container, DropdownButton, Row, } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import Table, { TableModel } from "../components/Table"
import "./Planning.css"

type PlanningProps = {

}

type TransactionMock = {
    expirationDate: string,
    contact: string,
    category: string,
    description: string,
    type: string,
    subType: string,
    wallet: string,
    value: string,
}

const tableModel: TableModel<TransactionMock> = {
    dataSet: [
        {
            expirationDate: "10/12/2021",
            contact: "Caixa Federal",
            category: "Empréstimo",
            description: "Pagar rapido mamis corre perigo de vida",
            type: "Débito",
            subType: "Ocasional",
            wallet: "Cartão",
            value: "R$ 8.900,82",
        },
        {
            expirationDate: "10/12/2021",
            contact: "Caixa Federal",
            category: "Empréstimo",
            description: "Pagar rapido mamis corre perigo de vida",
            type: "Débito",
            subType: "Ocasional",
            wallet: "Cartão",
            value: "R$ 8.900,82",
        }
    ],
    cols: [
        { description: "Vencimento", prop: "expirationDate" },
        { description: "Contato", prop: "contact" },
        { description: "Categoria", prop: "category" },
        { description: "Descrição", prop: "description" },
        { description: "Tipo", prop: "type" },
        { description: "Sub-Tipo", prop: "subType" },
        { description: "Carteira/Cartão", prop: "wallet" },
        { description: "Valor", prop: "value" }
    ],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: PlanningProps) => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <DropdownButton id="dropdown-button" title="Modo" className="w-100" variant="success">
                        <DropdownItem>1° Opção</DropdownItem>
                        <DropdownItem>2° Opção</DropdownItem>
                        <DropdownItem>3° Opção</DropdownItem>
                    </DropdownButton>
                </Col>

                <Col>
                    <Row>
                        <Col>
                            <Button variant="success"><FontAwesomeIcon icon={faArrowLeft} /></Button>
                        </Col>
                        <Col md="8">
                            <input type="date" className="form-control" />
                        </Col>
                        <Col className="ml-2">
                            <Button variant="success"><FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Col>

                <Col className="d-flex flex-row-reverse">
                    <Button variant="success" className="ml-2">Criar previsão de transação</Button>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Table model={tableModel} />
                </Col>
            </Row>
        </Container>
    )
}