import React, { useState,useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Table,
  Col,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import { useContext} from "react";
import { AuthContext } from "Context/AuthProvider";
const Deposit = () => {
  const { user } = useContext(AuthContext);
  const wallet=user?.wallet;
  console.log(wallet);
  const [paytype, setPayType] = useState("");
  const [transactioninfo, setTransactioninfo] = useState([]);
  console.log(transactioninfo);

  const userid=user?.id;
  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_usertransaction/${userid}`)
      .then((res) => res.json())
      .then((data) => setTransactioninfo(data));
  }, []);



    return (
        <div >
        <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className='text-white font-weight-bold'>Deposit For buy plan</h2>
        </div>
 
            <Row className='container-fluid'>
                
              <Col lg="12" xl="8" className=' mt--7'>
                <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
                  <CardBody>
                  <Label for="exampleEmail">
                   Enter Deposit Amount*
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    placeholder="Enter Amount"
                    type='number'
                    min='5'
                    />
  
                   {/* <Label className='mt-3' for="exampleEmail">
                   Choose Payment Method from the list below
                  </Label> */}

                   <Row>
                   <Col lg="12" xl="12" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Select Payment Method*</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa-solid fa-money-bill text-blue"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setPayType(e.target.value)}
                        >
                          <option className='p-5'>CARD</option>
                          <option className='p-5'>CASH</option>
                          <option>MOBILE PAY</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                   {/* <Col lg="12" xl="6" className=' mt-3'>
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
                    </Col> */}

                   </Row>
                   <Row>
                   {/* <Col lg="12" xl="6" className=' mt-3'>
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
                    </Col> */}
                 
                      <div className="text-center col mt-2">
                        <Button className="my-2" color="primary" type="button">
                        Procced to Deposit
                        </Button>
                      </div>

                   </Row>
           
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12" xl="4" className=' mt--7 '>
                <Card className="card-stats shadow-lg  shadow-sm--hover h-100  mb-4 mb-xl-0 ">
                  <CardBody>
                  <Row className='container-fluid'>
                 <h4> Total Deposit: </h4>
            
                  <h4 className='ml-3'>{wallet}</h4>
                  </Row>
            
                  <hr/>
           
                 <p className='text-center'>View Deposit History</p>
               
                  </CardBody>
                </Card>
              </Col>
             </Row>


          <Row className="mt-5 mb-3 container-fluid">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Deposit History (5)</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="" hover bordered responsive>
                <thead className="text-white bg-gradient-info">
               
                  <tr>
                    <th className="text-center" scope="col ">Sl No.</th>
                    <th className="text-center"  scope="col">Date</th>
                    <th className="text-center" scope="col">User ID</th>
                    <th className="text-center" scope="col">Amount</th>
                    <th className="text-center" scope="col">Tnx_Type</th>
                    <th className="text-center" scope="col">Method Type</th>
                  </tr>
                </thead>
                <tbody>
            {transactioninfo.map((tnx, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{tnx?.created_at}</td>
                <td className="text-center">{tnx?.userid}</td>
                <td className="text-center">{tnx?.amount}</td>
                <td className="text-center">{tnx?.tnx_type}</td>
                <td className="text-center">{tnx?.method_type}</td>
              </tr>
            ))}
          </tbody>
              </Table>
            </Card>
          </Col>


        </Row>
      
        </div>
    );
};

export default Deposit;