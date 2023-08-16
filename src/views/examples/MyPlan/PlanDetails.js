import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const { user, setUpdate, update } = useContext(AuthContext);
  console.log(user);
  const wallet = user?.wallet;
  const navigate = useNavigate();

  const [transactioninfo, setTransactioninfo] = useState([]);

  // Fetch for transiction 
  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_usertransaction/${user?.id}`)
      .then((res) => res.json())
      .then((data) => setTransactioninfo(data));

  }, []);



  //  Sweet Alert
  const warningAlert = () => {
    swal({
      title: "Insuffucient Balance!",
      text: "Please add money to your wallet by deposit",
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


  const [inputAmount, setInputAmount] = useState(p?.min);
  const [isOutOfRange, setIsOutOfRange] = useState(false);

  // For Date 
  const current = new Date();
  const purchase_dt = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;

  const handleAmountChange = (e) => {
    const newValue = +e.target.value;
    if (newValue < p.min || newValue > p.max) {
      setIsOutOfRange(true);
    } else {
      setIsOutOfRange(false);
      setInputAmount(newValue);
    }
  };


  const handleInvestmentAmount = async (e) => {
    e.preventDefault();


    // for deduct
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

        const response = await axios.post(
          "https://indian.munihaelectronics.com/public/api/deductMoneyforpkgpurchase",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );


        window.localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...user, wallet: wallet - inputAmount })
        );
        setUpdate(!update)

        // For Purchuse Plan
        const purchase_date = purchase_dt;
        const planId = id;
        const status = "Active";
        const transaction_id = response.data?.transaction_id;
        const purchaseData = {
          userId: user?.id,
          planId,
          purchase_date,
          status,
          transaction_id,
        };
        console.log(purchaseData);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/purchase_pkg", purchaseData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          console.log(response)

        }
        catch (error) {
          console.error("Error creating payment:", error);

        }

        // window.location.reload();


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
      navigate("/user/deposit");
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
                <span className="ml-1">{p?.profitShare}% </span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">Minimum Amount INR{p?.min} </span>
              </h5>
              <h5 className=" mt-3 text-center">
                <span className="ml-1">Maximum Amount INR{p?.max} </span>
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
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={isOutOfRange}
                  >
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
                  <th className="text-center">Sl No</th>
                  <th className="text-center">Amount</th>
                  {/* <th>Transiction Type</th> */}
                  <th className="text-center">Method Type</th>
                  <th className="text-center">Description</th>
                </tr>
              </thead>
              <tbody>
                {transactioninfo.slice(-6).map((tnx, index) => (
                  tnx.tnx_type === "DR" ? (
                    <tr key={index}>
                      <th className="text-center" scope="row">
                        {index + 1}
                      </th>
                      <td className="text-center">{tnx?.amount}</td>
                      {/* <td className="text-center">{tnx?.tnx_type}</td> */}
                      <td className="text-center">{tnx?.method_type}</td>
                      <td className="text-center">{tnx?.description}</td>
                    </tr>
                  ) : null
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetails;
