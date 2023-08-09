import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import swal from "sweetalert";

const PlanDetails = () => {
  const [p, setPackage] = useState({});
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const wallet = user?.wallet;

  //  Sweet Alert
  const warningAlert = () => {
    swal({
      title: "Opps!",
      text: "Insuffucient Balance!",
      icon: "warning",
    });
  };

  // Fetch Packages or plan
  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/package/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackage(data));
  }, [id]);

  const [inputAmount, setInputAmount] = useState("");
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  const handleAmountChange = (e) => {
    const newValue = +e.target.value;
    if (newValue < p.min || newValue > p.max) {
      setIsOutOfRange(true);
    } else {
      setIsOutOfRange(false);
      setInputAmount(newValue);
    }
  };

  // Previous Code
  const handleInvestmentAmount = (e) => {
    e.preventDefault();
    console.log(inputAmount);
    const userid = user?.id;
    const amount = inputAmount;
    const data = {
      userid,
      amount,
    };
    console.log(data);
    if (wallet > inputAmount) {
      const proceed = window.confirm("Are You sure to pay for this ?");
      if (proceed) {
        const response = axios.post(
          "https://indian.munihaelectronics.com/public/api/deduct",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);

        swal({
          title: "Successflly Payed!",
          text: response?.data?.message,
          icon: "success",
        });
        
        // cear input 
        setInputAmount("");
        // alert(response?.data?.message);
      }
    } else {
      warningAlert();
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white font-weight-bold">Deposit For buy plan</h2>
      </div>

      <Row className="container-fluid">
        <Col lg="12" xl="4" className=" mt--7 ">
          <Card className="card-stats shadow-lg  shadow-sm--hover h-100  mb-4 mb-xl-0 ">
            <CardBody>
              <div className="text-center">
                <lavel className="mb-3  w-50 rounded-1">Technology Plan</lavel>
              </div>

              <div className="mt-3 text-center">
                <i className=" icon icon-shape bg-primary text-white rounded-circle shadow fa-solid fa-hand-holding-heart" />
              </div>

              <h5 className=" mt-3 text-center">
                <span className="ml-1">{p?.planName} </span>
              </h5>
              <h5 className=" mt-0 text-center">
                <span className="ml-1">{p?.planType} </span>
              </h5>

              <h5 className=" mt-3 text-center">
                <span className="ml-1">{p?.profitShare} </span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">Minimum Amount ${p?.min} </span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">Maximum Amount ${p?.max} </span>
              </h5>
              <h5 className=" mt-0 text-center">
                <span className="ml-1">{p?.settelementTime} </span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">{p?.lockinPeriod}</span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">{p?.compoundLevel} </span>
              </h5>

              <div className="col text-center mt-3">
                {/* condition1 ? condition2 ? Expression1 : Expression2 : Expression3 */}
                {/* {
                  p?.status=="Active"? <Button className='w-50' disabled>Active</Button>: p?.status=="Upgrade"?<Button>Buy Now</Button>: p?.status!="Upgrade"?
                  <Button onClick={() => handlePurchase(p?.id)}  className="btn btn-danger w-50  border-none">
                  Upgrade </Button> :""
                 
                  } */}

                {/* Commented By Al-amin  */}

                {/* {
                  p?.status=="Active"? <Button className='w-50 btn btn-danger text-white' disabled>Active</Button>: p?.status=="Pending"?<Button className='w-50 btn btn-danger text-white' disabled>  {p?.status}</Button>:
                  <Button onClick={() => handlePurchase(p?.id)}  className="btn btn-info w-50  border-none">
                     {p?.status} </Button> 
                    
                  } */}

                {/* {
                    <Button onClick={() => handlePurchase(p?.id)} className="btn btn-primary">
                      <i className="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-cart-shopping" />
                     {p?.status}
                    </Button> } */}
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" xl="8" className=" mt--7">
          <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <Form role="form" onSubmit={handleInvestmentAmount}>
                <Label for="exampleEmail">Trade Invest Amount</Label>
                <Input
                  id="amount"
                  name="inputAmount"
                  placeholder={`Enter Amount ${p.min}-${p.max}`}
                  type="number"
                  defaultValue={inputAmount}
                  min={p.min}
                  max={p.max}
                  onChange={handleAmountChange}
                  style={{ borderColor: isOutOfRange ? "red" : "initial" }}
                />
                {isOutOfRange && (
                  <p style={{ color: "red" }}>
                    Amount must match between package Min and Max
                  </p>
                )}

                {/* <Label className='mt-3' for="exampleEmail">
                   Choose Payment Method from the list below
                  </Label> */}
                <div className=" mt-2 text-right col">
                  <button className="btn btn-primary" type="submit">
                    Pay Now
                  </button>
                </div>
                <Row>
                  {/* Card Section  */}

                  {/* <Col lg="12" xl="12" className=" mt-3">
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
                        //   onChange={(e) => setPayType(e.target.value)}
                        >
                          <option className='p-5'>CARD</option>
                          <option className='p-5'>CASH</option>
                          <option>MOBILE PAY</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col> */}
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
                </Row>
              </Form>
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
                  <th className="text-center" scope="col ">
                    Sl No.
                  </th>
                  <th className="text-center" scope="col">
                    Date
                  </th>
                  <th className="text-center" scope="col">
                    User ID
                  </th>
                  <th className="text-center" scope="col">
                    Amount
                  </th>
                  <th className="text-center" scope="col">
                    Description
                  </th>
                  <th className="text-center" scope="col">
                    Method Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {transactioninfo.map((tnx, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{tnx?.created_at}</td>
                <td className="text-center">{tnx?.userid}</td>
                <td className="text-center">{tnx?.amount}</td>
                <td className="text-center">{tnx?.description}</td>
                <td className="text-center">{tnx?.method_type}</td>
              </tr>
            ))} */}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetails;
