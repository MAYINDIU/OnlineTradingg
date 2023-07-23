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
const Deposit = () => {
    return (
        <div >
        <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className='text-white font-weight-bold'>Fund Your <span className='text-white font-weight-bold'>Account Balance</span> </h2>
        </div>
 
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
                 
                      <div className="text-center col mt-3">
                        <Button className="my-4" color="primary" type="button">
                        Procced to payment
                        </Button>
                      </div>

                   </Row>
           
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="4" className=' mt--7'>
                <Card className="card-stats shadow-lg  shadow-sm--hover  mb-4 mb-xl-0 ">
                  <CardBody>
                  <Row className='container-fluid'>
                 <h4> Total Deposit: </h4>
            
                 <h4 className='ml-3'> $465</h4>
                  </Row>
            
                  <hr/>
           
                 <p className='text-center'>View Deposit History</p>
               
                  </CardBody>
                </Card>
              </Col>
             </Row>
      
        </div>
    );
};

export default Deposit;