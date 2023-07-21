import React from 'react'
import { Card, CardBody, CardTitle, Col, Container, Row } from 'reactstrap'

const Transactions = () => {
    return (
        <div>

            <Container fluid className="container-fluid header bg-gradient-info pb-5 pt-5 pt-md-8">
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

        </div >
    )
}

export default Transactions
