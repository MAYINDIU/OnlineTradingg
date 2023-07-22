import React from 'react'
import { Link, Outlet } from 'react-router-dom'
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
                            <Link className='text-dark text-decoration-none' to={`/transactions/withdrawal`}>
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
                            </Link>

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
                <Outlet></Outlet>
            </Container>

        </div >
    )
}

export default Transactions