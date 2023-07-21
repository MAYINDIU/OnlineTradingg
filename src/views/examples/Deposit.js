import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Deposit = () => {
    return (
        <div className='bg-gradient-info pb-8 pt-5 pt-md-8'>
            <Container fluid>
                <Row className=''>
                    <Col md='8' className=''>
                        <div>
                            {/* <h1>Enter Amount</h1> */}
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <h1>Enter Amount</h1>
                                    <Form.Control type="number" placeholder="Enter Amount" />
                                </Form.Group>

                                <h1>Choose Payment Method from the list below</h1>


                                <div className=" row row-cols-2 mb-3">
                                    <Form.Check
                                        className='border p-4 rounded col '
                                        reverse
                                        type='radio'
                                        label="BUSD"
                                        name="group1"
                                    />
                                    <Form.Check
                                        className='border p-4 rounded  col '
                                        reverse
                                        type='radio'
                                        label="BUSD"
                                        name="group1"
                                    />
                                    <Form.Check
                                        className='border p-4 rounded  col '
                                        reverse
                                        type='radio'
                                        label="BUSD"
                                        name="group1"
                                    />
                                </div>

                                <Button variant="primary">Process to Payment</Button>
                            </Form>
                        </div>

                    </Col>
                    <Col>
                        <Container className='border rounded'>
                            <div className='p-3 '>
                                <h3>Total Deposit</h3>

                            </div>

                            <hr />

                            <Link>View deposit history</Link>

                        </Container>

                    </Col>
                </Row>

            </Container>


        </div>
    );
};

export default Deposit;