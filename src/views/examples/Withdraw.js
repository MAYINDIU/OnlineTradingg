import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    CardTitle,
    Col,
    Input,
    Label,
  } from "reactstrap";
const Withdraw = () => {

    return (
        <div>
            <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
            <Row className='container-fluid'>
            <Col lg="12" xl="8" className=' mt--7'>
                <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
                  <CardBody>
                  <Label for="exampleEmail">
                   Enter Amount
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    placeholder="Enter Amount"
                    type='number'
                    min='5'
                    />
  
                   <Label className='mt-3' for="exampleEmail">
                   Choose Payment Method from the list below
                  </Label>

                   <Row>
                   <Col lg="12" xl="6" className=' mt-3'>
                        <Card className="shadow-lg   mb-4 mb-xl-0 ">
                        <CardBody>
                        <p>BUSD</p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12" xl="6" className=' mt-3'>
                        <Card className="shadow-lg  mb-4 mb-xl-0 ">
                        <CardBody>
                        <p>USDT</p>
                        </CardBody>
                        </Card>
                    </Col>

                   </Row>
                   <Row>
                   <Col lg="12" xl="6" className=' mt-3'>
                        <Card className="shadow-lg   mb-4 mb-xl-0 ">
                        <CardBody>
                        <p>Bank Transfer</p>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12" xl="6" className=' mt-3'>
                        <Card className="shadow-lg   mb-4 mb-xl-0 ">
                        <CardBody>
                        <p> Paypal</p>
                        </CardBody>
                        </Card>
                    </Col>
                    <div className="col text-center mt-3">
                        <Button className='btn btn-default'>Procced to payment</Button>
                      </div>


                   </Row>
           
                  </CardBody>
                </Card>
              </Col>
            </Row>
            </div>
        </div>
    );
};

export default Withdraw;