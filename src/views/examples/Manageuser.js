import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Card, CardBody, CardTitle, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row } from 'reactstrap';

const Manageuser = () => {
    const { id } = useParams();
    const [isInfoClicked, setIsInfoClicked] = useState(true);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isAddDeduct, setIsDeduct] = useState(false);
    const [user, setUser] = useState([]);
    const [wallet, setWallet] = useState("");
    const [amount, setAmount] = useState("");
    const [method_type, setPlanType] = useState("");
    const [deductamount, setDeductAmount] = useState("");
    
    // console.log(method_type,amount,wallet,id);
    const handleDeductamount = async (e) => {
        console.log(e);
        e.preventDefault();
        const userid=id;
        const amount=deductamount;
        const data = {
            userid,
            amount

        };
        console.log(data);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/deduct",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
    
          // Reset the form inputs
          
          setDeductAmount("");
      
          alert(response?.data?.message)
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      };

      //Deposit amount
    const handleDeposit = async (e) => {
        console.log(e);
        e.preventDefault();
        const description="Deposited";
        const userid=id;
        const data = {
            userid,
            amount,
            method_type,
            description

        };
        console.log(data);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/deposit",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
    
          // Reset the form inputs
          
          setWallet("");
          setPlanType("");
          setAmount("");
    
          alert(response?.data?.message)
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      };


    // Fetch User
    useEffect(() => {
        const url = `https://indian.munihaelectronics.com/public/api/SingleUser/${id}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);


    const handleInfoClick = () => {
        setIsInfoClicked(true);
        setIsAddClicked(false);
        setIsDeduct(false);
    };
    const handleAddClick = () => {
        setIsAddClicked(true);
        setIsInfoClicked(false);
        setIsDeduct(false);
    };
    const handledeductClick = () => {
        setIsInfoClicked(false);
        setIsAddClicked(false);
        setIsDeduct(true);
    };
    return (
        <div>
            <Container fluid className="container-fluid header bg-gradient-info pb-8 pt-5 pt-md-8">
                {/* <h2 className='text-white font-weight-bold'>User</h2> */}
                <div className="container-fluid ">
                    <Row>
                        <Col lg="4" xl="4" >
                            {/* <Link className='text-decoration-none text-primary' to={`/admin/${id}/info`}>
                                
                            </Link> */}
                            <Card className={isInfoClicked ? 'bg-default w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center' : 'bg-secondary w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center'} >
                                <CardBody onClick={handleInfoClick}>
                                    {/* <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                            <i className="fa-solid fa-download" />
                                        </div> */}
                                    <CardTitle
                                        tag="h4"
                                        className={isInfoClicked ? 'text-white text-uppercase mb-0' : 'text-uppercase mb-0'}
                                    > <i className="fa-solid fa-user-pen mx-3"></i>
                                        User Information
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" xl="4">
                            <Card className={isAddClicked ? 'bg-default w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center' : 'bg-secondary w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center'}>
                                <CardBody onClick={handleAddClick}>
                                    {/* <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                            <i className="fa-solid fa-download" />
                                        </div> */}
                                    <CardTitle
                                        tag="h4"
                                        className={isAddClicked ? 'text-white text-uppercase mb-0' : 'text-uppercase mb-0'}
                                    >
                                        <i className="fa-solid fa-plus mx-3"></i>
                                        Add Money
                                    </CardTitle>
                                </CardBody>
                            </Card>

                        </Col>
                        <Col lg="4" xl="4">
                            <Card className={isAddDeduct ? 'bg-default w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center' : 'bg-secondary w-75 shadow border-0 card-stats bg mb-4 mb-xl-0 text-center'}>
                                <CardBody onClick={handledeductClick}>
                                    {/* <div className="icon icon-shape bg-primary text-white rounded-circle shadow mb-2">
                                            <i className="fa-solid fa-download" />
                                        </div> */}
                                    <CardTitle
                                        tag="h4"
                                        className={isAddDeduct ? 'text-white text-uppercase mb-0' : 'text-uppercase mb-0'}
                                    >
                                        <i className="fa-solid fa-minus mx-3"></i>
                                       Deduct Amount
                                    </CardTitle>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className=' mb-7'>
                <div className={isInfoClicked ? '' : 'd-none'}>
                    <Row className="container-fluid mb-3">
                        <Col lg="12" xl="12" className=" mt--7">
                            <Card className="bg-secondary shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <Form role="form">
                                        <Row>
                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>First Name</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-user"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.name}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>Last Name</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-user"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.last_name}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup>
                                                    <Label>Balance </Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-dollar"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.wallet}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup>
                                                    <Label>Status</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-globe"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.status}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup>
                                                    <Label>Email</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-envelope"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.email}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup>
                                                    <Label>Referral Code</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-qrcode"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            // onChange={(e) => setPlanName(e.target.value)}
                                                            placeholder={user?.referal_code}
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <div className="text-center">
                                            <button className="btn btn-primary " type="submit">
                                                Update
                                            </button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div className={isAddClicked ? '' : 'd-none'}>
                    <Row className="container-fluid mb-3">
                        <Col lg="12" xl="12" className=" mt--7">
                            <Card className="bg-secondary shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <Form role="form" onSubmit={handleDeposit}>
                                    <p className='text-center'>Selected User ID: {user?.id}</p>
                                        <Row>
                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>Wallet</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-envelope"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                         onChange={(e) => setWallet(e.target.value)}
                                                            placeholder={user.wallet}
                                                            type="number"
                                                            disabled
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>Add Amount</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-dollar"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            onChange={(e) => setAmount(e.target.value)}
                                                            placeholder="Type Deposit Amount"
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                           

                                            <Col lg="12" xl="12" className=" mt-1">
                                                <FormGroup className="mb-3">
                                                    <Label>Payment Type</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-rectangle-list"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            id="exampleSelect"
                                                            name="select"
                                                            type="select"
                                                        onChange={(e) => setPlanType(e.target.value)}
                                                        >
                                                            <option>OFFICE CASH</option>
                                                            <option>OFFICE CASH</option>
                                                        </Input>
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <div className="text-center mt-5">
                                            <button className="btn btn-primary " type="submit">
                                                Add Deposit
                                            </button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
           

                <div className={isAddDeduct ? '' : 'd-none'}>
                    <Row className="container-fluid mb-3">
                        <Col lg="12" xl="12" className=" mt--7">
                            <Card className="bg-secondary shadow border-0">
                                <CardBody className="px-lg-5 py-lg-5">
                                    <Form role="form" onSubmit={handleDeductamount}>
                                        <Row>
                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>Wallet</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-envelope"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                        //  onChange={(e) => setWallet(e.target.value)}
                                                            placeholder={user.wallet}
                                                            type="number"
                                                            disabled
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>

                                            <Col lg="12" xl="6" className=" mt-3">
                                                <FormGroup className="mb-3">
                                                    <Label>Add Amount</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-dollar"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            onChange={(e) => setDeductAmount(e.target.value)}
                                                            placeholder="Type Deduct Amount"
                                                            type="text"
                                                        />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                           

                                            <Col lg="12" xl="12" className=" mt-1">
                                                <FormGroup className="mb-3">
                                                    <Label>Payment Type</Label>
                                                    <InputGroup className="input-group-alternative">
                                                        <InputGroupAddon addonType="prepend">
                                                            <InputGroupText>
                                                                <i class="fa-solid fa-rectangle-list"></i>
                                                            </InputGroupText>
                                                        </InputGroupAddon>
                                                        <Input
                                                            id="exampleSelect"
                                                            name="select"
                                                            type="select"
                                                        // onChange={(e) => setPlanType(e.target.value)}
                                                        >
                                                            <option>OFFICE CASH</option>
                                                            {/* <option>OFFICE CASH</option> */}
                                                        </Input>
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <div className="text-center mt-5">
                                            <button className="btn btn-primary " type="submit">
                                               Deduct Amount
                                            </button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
       
                </Container>
        </div >
    );
};

export default Manageuser;