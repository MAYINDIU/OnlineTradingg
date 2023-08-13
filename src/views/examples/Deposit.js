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
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import swal from "sweetalert";

const Deposit = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  const [userInfo,setUserInfo] = useState({})
  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/SingleUser/${user?.id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);
  const wallet = userInfo?.wallet;

  console.log(wallet)
  const typeOfPayment=["Cashfree","HandCash"]
  const [paytype, setPayType] = useState(null);
  const [successText, setSuccessText] = useState('');
 

  const [transactioninfo, setTransactioninfo] = useState([]);
  const [depositAmount, setDepositAmount] = useState("");
  const navigate = useNavigate();
  // var d = depositAmount;
  // var w = wallet ;
  // var final = d+w
  const w=parseInt(wallet);
  const newWallet = w +(depositAmount+0);
 
  
  //  success payment 
  
  // const location = useLocation();
  //   const query = new URLSearchParams(location.search);
  
  const [transactionDetails, setTransactionDetails] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("order_id");
  const orderToken = queryParams.get("order_token");
  console.log('Show', orderId,orderToken)

 

  
 
  const handleDeposit = async (e) => {
    console.log(e);
    e.preventDefault();

    const formData = {
      name: user?.name,
      email: user?.email,
      mobile: user?.mobile_no,
      amount: depositAmount,
    };
    console.log(formData)
    const depositData = {
      userid: user?.id,
      amount: depositAmount,
      method_type: "CashFree",
      description: 'Payment deposited by Cashfreee',
    };
console.log('Deposit Amount',depositData)
    if(paytype=='Cashfree' || paytype=='Handcash'){
      try {
        if (paytype === 'Cashfree') {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/create-payment",
            formData
          );
          const paymentLink = response.data.payment_link;
          window.location.href = paymentLink;
        } 
        else {
          navigate("/user/index");
        }
      } catch (error) {
        console.error("Error creating payment:", error);
        // Handle error here
      }
      try{
        const response = await axios.post(
          "https://indian.munihaelectronics.com/public/api/deposit",depositData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // window.localStorage.setItem('userInfo',JSON.stringify({...user, wallet:wallet + depositAmount}))
        // window.location.reload()
       
          setSuccessText( response)
       
        }
        catch (error) {
          console.error("Error creating payment:", error);
          
        }

    }
    //Post Deposit 
   
  };

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/cashfree/payments/success?order_id=${orderId}&order_token=${orderToken}`
    )
      .then((res) => res.json())
      .then((data) => setTransactionDetails(data));
  }, []);
console.log(transactionDetails)

if(transactionDetails.order_amount > 0){
  swal({
    title: "Deposited Successflly",
    text: 'Success',
    icon: "success",
  });
 
  navigate('/user/index')
}

// Add Wallet 
// const handlePackages = async (e) => {
//   console.log(e);
//   e.preventDefault();

//   const data = {
  
//   };
//   console.log(data);
//   try {
//     const response = await axios.post(
//       "https://indian.munihaelectronics.com/public/api/package-add",
//       data,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );
//     console.log(response);

//     // Reset the form inputs
    
    
//     alert(response?.data?.message)
//   } catch (error) {
//     toast.error(error?.response?.data?.error);
//   }
// };

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
                            {typeOfPayment?.map(typ=><option value={typ} className="p-5">{typ}</option>)}
                          
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <div className=" mt-2 text-center col">
                    <button className="btn btn-primary" type="submit" disabled={depositAmount== "" || paytype == null }>
                      Add Deposit
                    </button>
                  </div>
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
                {transactioninfo.map((tnx, index) => (
                  <tr>
                    <th className="text-center" scope="row">
                      {index + 1}
                    </th>
                    <td className="text-center">{tnx?.created_at}</td>
                    <td className="text-center">{tnx?.userid}</td>
                    <td className="text-center">{tnx?.amount}</td>
                    <td className="text-center">{tnx?.description}</td>
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
