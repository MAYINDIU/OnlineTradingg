import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
import { useContext } from "react";
import { AuthContext } from "Context/AuthProvider";
import cashfree from "../../../src/assets/img/icons/common/cashfree.png";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import swal from "sweetalert";
import Transactions from "./Transactions";
import { reload } from "firebase/auth";

const Deposit = () => {
  const { user, setUpdate, update } = useContext(AuthContext);
  console.log(user);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/SingleUser/${user?.id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  const wallet = userInfo?.wallet;
  console.log(wallet);

  const typeOfPayment = ["Cashfree", "HandCash"];
  const [paytype, setPayType] = useState(null);
  // const [successText, setSuccessText] = useState('');

  const [transactioninfo, setTransactioninfo] = useState([]);
  const [depositAmount, setDepositAmount] = useState("");
  console.log(depositAmount);
  const navigate = useNavigate();
  const w = parseInt(wallet);
  const newWallet = w + depositAmount;

  const [transactionDetails, setTransactionDetails] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("order_id");
  const orderToken = queryParams.get("order_token");
  console.log("Show", orderId, orderToken);

  // Show Recent 5 Transactions
  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/show_usertransaction/${user?.id}`
    )
      .then((res) => res.json())
      .then((data) => setTransactioninfo(data));
  }, []);

  const test = async (e) => {
    const depositData = {
      userid: user?.id,
      amount: transactionDetails?.order_amount,
      method_type: "CashFree",
      description: "Payment deposited by Cashfreee",
    };
    console.log("Deposit Amount", depositData);
    const emailData = {
      to: user?.email,
      deposit_amount: transactionDetails?.order_amount,
    };
    try {
      const response = await axios.post(
        "https://indian.munihaelectronics.com/public/api/deposit",
        depositData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // setSuccessText(response)
    } catch (error) {
      console.error("Error creating payment:", error);
    }
    try {
      const response = axios.post(
        "https://indian.munihaelectronics.com/public/api/send-user-deposit-email",
        emailData
      );
      if (response.status === 200) {
        // swal({
        //   title: "Successflly Mailed!",
        //   text: response?.data?.message,
        //   icon: "Mailed",
        // });
      } else {
        // Display error message to the user
      }
    } catch (error) {
      // Handle errors
    }
  };

  const handleDeposit = async (e) => {
    console.log(e);
    e.preventDefault();

    const formData = {
      name: user?.name,
      email: user?.email,
      mobile: user?.mobile_no,
      amount: depositAmount,
    };
    console.log(formData);

    if (paytype == "Cashfree" || paytype == "Handcash") {
      try {
        if (paytype === "Cashfree") {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/create-payment",
            formData
          );
          const paymentLink = response.data.payment_link;
          window.location.href = paymentLink;
        } else {
          navigate("/user/index");
        }
      } catch (error) {
        console.error("Error creating payment:", error);
        // Handle error here
      }
    }
  };

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/cashfree/payments/success?order_id=${orderId}&order_token=${orderToken}`
    )
      .then((res) => res.json())
      .then((data) => setTransactionDetails(data));
  }, []);
  console.log(transactionDetails);
  // transactionDetails.order_amount > 0 && transactionDetails.payment_status==='success'

  console.log(transactionDetails.payment_status);

  if (transactionDetails.cf_settlement_id != null) {
    test();

    const userDataString = localStorage.getItem("userInfo"); // Change 'userInfo' to your actual local storage key
    let userData = {};

    if (userDataString) {
      try {
        userData = JSON.parse(userDataString);
      } catch (error) {
        console.error("Error parsing userData from local storage", error);
      }
    }

    // Step 2: Update wallet balance in userData object
    const amountToAdd = transactionDetails.order_amount; // Example amount to add
    const newWalletBalance = parseFloat(userData.wallet) + amountToAdd;

    window.localStorage.setItem(
      "userInfo",
      JSON.stringify({ ...user, wallet: newWalletBalance })
    );
    setUpdate(!update);
    swal({
      title: "Deposited Successfully",
      text: "Success",
      icon: "success",
    });
    navigate("/user/index");
  }
  // else{
  //   swal({
  //     title: "Deposit Faiure",
  //     text: 'fail',
  //     icon: "warning",
  //   });
  // }

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white font-weight-bold">Deposit For buy plan</h2>
      </div>

      <Row className="container-fluid">
        <Col lg="12" xl="8" className=" mt--7">
          <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <Form role="form" onSubmit={handleDeposit}>
                <Label for="exampleEmail">Enter Deposit Amount*</Label>
                <Input
                  id="amount"
                  name="amount"
                  placeholder="Enter Amount"
                  type="number"
                  required
                  onChange={(e) => setDepositAmount(+e.target.value)}
                />

                {/* <Label className='mt-3' for="exampleEmail">
                   Choose Payment Method from the list below
                  </Label> */}

                <Row>
                  <Col lg="12" xl="12" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Select Payment Method*</Label>
                      <InputGroup className="input-group-alternative">
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setPayType(e.target.value)}
                        >
                          <option className="p-5">--select--</option>
                          {typeOfPayment?.map((typ) => (
                            <option value={typ} className="p-5">
                              {typ}
                            </option>
                          ))}
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <div className=" mt-2 text-center col">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      disabled={depositAmount == "" || paytype == null}
                    >
                      Add Deposit
                    </button>
                  </div>
                  {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  type="submit"
                      disabled={depositAmount == "" || paytype == null}>
                    Add Deposit
                  </button> */}
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>

        <Col lg="12" xl="4" className=" mt--7 ">
          <Card className="card-stats shadow-lg  shadow-sm--hover h-100  mb-4 mb-xl-0 ">
            <CardBody>
              <Row className="container-fluid">
                <h4> Total Deposit: </h4>

                <h4 className="ml-3">{newWallet}</h4>
              </Row>

              <hr />

              <p className="text-center">View Deposit History</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* {
          <h2 className="text-center">{transactionDetails?.order_amount}</h2>
        } */}
      <Row className="mt-5 mb-3 container-fluid">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">
                    Recent Deposit History (
                    {transactioninfo.length < 5 ? transactioninfo.length : "5"})
                  </h3>
                </div>
                <div className="col text-right">
                  <Link to="/user/transactions/deposit">
                    <Button color="primary" href="#pablo" size="sm">
                      See all
                    </Button>
                  </Link>
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
                {transactioninfo.slice(-6).map((tnx, index) =>
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
                )}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Deposit;
