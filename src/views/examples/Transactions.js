import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardTitle, Col, Container, Input, Label, Row, Table } from 'reactstrap'

const Transactions = () => {
    return (
        <div>
            <Container fluid className="container-fluid header bg-gradient-info pb-8 pt-5 pt-md-8">
                <h2 className='text-white font-weight-bold'>Transaction Records </h2>
                <div className="">
                    <Row>
                        <Col lg="6" xl="4">
                            <Card className="card-stats bg mb-4 mb-xl-0 text-center">
                                <CardBody>
                                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                        <i className="fa-solid fa-download" />
                                    </div>
                                    <CardTitle
                                        tag="h4"
                                        className="text-uppercase mb-0"
                                    >
                                        Deposit
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6" xl="4">
                            <Card className="card-stats bg mb-4 mb-xl-0 text-center">
                                <CardBody>
                                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                        <i className="fa-solid fa-upload" />
                                    </div>
                                    <CardTitle
                                        tag="h4"
                                        className="text-uppercase mb-0"
                                    >
                                        Withdrawal
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="6" xl="4">
                            <Card className="card-stats bg mb-4 mb-xl-0 text-center">
                                <CardBody>
                                    <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                        <i className="fa-solid fa-arrow-right-to-bracket" />
                                        {/* <i className="fa-solid fa-share-from-square"></i> */}
                                    </div>
                                    <CardTitle
                                        tag="h4"
                                        className="text-uppercase mb-0"
                                    >
                                        Others
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                </div>
            </Container>

            <Container fluid className='mt--7 mb-7'>
                <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">

                    <CardBody className=' d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>

                            <Label className='mr-2'>
                                Show
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                            >
                                <option>
                                    10
                                </option>
                                <option>
                                    25
                                </option>
                                <option>
                                    50
                                </option>
                                <option>
                                    100
                                </option>
                            </Input>
                            <Label className=' ml-2'>
                                entries
                            </Label>
                        </div>

                        <div className='d-flex align-items-center'>
                            <Label className=' mr-2'>
                                Search
                            </Label>
                            <Input
                                id="exampleText"
                                name="text"
                                type="text"
                            />
                        </div>

                    </CardBody>

                    <Table hover>
                        <thead>
                            <tr>
                                <th>
                                    Amount
                                </th>
                                <th>
                                    Payment Mode
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                    Date Created
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Jacob
                                </td>
                                <td>
                                    Thornton
                                </td>
                                <td>
                                    @fat
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Larry
                                </td>
                                <td>
                                    the Bird
                                </td>
                                <td>
                                    @twitter
                                </td>
                            </tr>
                        </tbody>
                    </Table>


                    <CardBody className=' d-flex justify-content-between align-items-center'>

                        <Label >
                            Showing 0 to 0 of 0 entries
                        </Label>


                        <ButtonGroup>
                            <Button outline>
                                Previous
                            </Button>
                            <Button outline>
                                Next
                            </Button>
                        </ButtonGroup>

                    </CardBody>
                </Card>
            </Container>

        </div >
    )
}

export default Transactions
