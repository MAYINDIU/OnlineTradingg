import React, { useContext, useState } from 'react';
import axios from "axios";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
  } from "reactstrap";
import { AuthContext } from 'Context/AuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
const loginAlert = () => {
    swal({
      title: "You Created successfully",
      icon: "success",
      button: "Done",
    });
  };
const CreateUser = () => {
    const { setUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [adminRole,setRole] = useState('')
    const navigate = useNavigate()

    const handleSubmit =async (event) => {

        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const mobileNo = form.mobileNo.value;
        const referalCode = form.refferalCode.value || "root";
        const status = "1";
        const role = adminRole
    
        const formdata = new FormData();
        formdata.append("name", userName);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("referal_code", referalCode);
        formdata.append("mobile_no", mobileNo);
        formdata.append("status", status);
        formdata.append("role", role);
        
    
       
    
        axios
          .post(
            "https://indian.munihaelectronics.com/public/api/create-user",
            formdata
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
    
        swal({
          title: "User Created Successflly",
          text: 'Success',
          icon: "success",
        });
              navigate('/admin/alluser')
      };
    return (
        <>
         <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        
      </div>
        <Col lg="12" md="8" className="mt--7 container-fluid mb-3">
          <Card className="bg-secondary shadow border-0">
          
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
              <h2 className="text-info text-center font-weight-bold">Create User</h2>
              </div>
  
              <Form role="form" onSubmit={handleSubmit}>
                <Row>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-user text-info"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input className="text-dark" placeholder="Name" type="text" name="name" />
                  </InputGroup>
                </FormGroup>
                </Col>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83 text-info" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    className="text-dark"
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      name="email"
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open text-info" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    className="text-dark"
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      name="password"
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid text-info">+91</i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    className="text-dark"
                      placeholder={`Mobile Number`}
                      type="number"
                      name="mobileNo"
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                      <i class="fa-solid fa-hand-holding text-info"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    className="text-dark"
                      placeholder="Refferal Code"
                      type="text"
                      name="refferalCode"
                    />
                  </InputGroup>
                </FormGroup>
                </Col>
                <Col lg="12" xl="6" className=" mt-3">
                <FormGroup className="mb-3">
                     
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid text-info fa-rectangle-list"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setRole(e.target.value)}
                        >
                            <option>----Select Role----</option>
                          <option>admin</option>
                          <option>user</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                    </Col>
                    </Row>
                <div className="text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
              
                <div className="text-center">
                  <div className="text-center">
                    <Button className="my-4 w-25" color="primary" type="submit" >
                      CREATE AN ACCOUNT
                    </Button>
                  </div>
                </div>
              </Form>
  
              
            </CardBody>
          </Card>
        </Col>
      </>
    );
};

export default CreateUser;