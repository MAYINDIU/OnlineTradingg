import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label } from 'reactstrap';

const AddPackage = () => {
    const [planName, setPlanName] = useState("");
    const [planType, setPlanType] = useState("");
    const [profitShare, setProfitShare] = useState("");
    const [settelementTime, setSettelementTime] = useState("");
    const [lockinPeriod, setLockinPeriod] = useState("");
    const [compoundLevel, setCompoundLevel] = useState("");

    const handlePackages = async (e) => {
        console.log(e)
        e.preventDefault();
    
        const data = {
          planName,
          planType,
          profitShare,
          settelementTime,
          lockinPeriod,
          compoundLevel,
         
        };
        console.log(data);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/package-add",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
    
          // Reset the form inputs
          setPlanName("");
          setPlanType("");
          setProfitShare("");
          setSettelementTime("");
          setLockinPeriod("");
          setCompoundLevel("");
         
    
          if (response) {
            toast.success("Succeessfully Added");
          }
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      };
    return (
        <Card className="bg-secondary shadow border-0">
         
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h2>Add Packages</h2>
            </div>
            <Form role="form" onSubmit={handlePackages}>
              <FormGroup className="mb-3">
                    <Label>Email</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setPlanName(e.target.value)}
                    placeholder="Email"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setPlanType(e.target.value)}
                    placeholder="Password"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setProfitShare(e.target.value)}
                    placeholder="Password"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setSettelementTime(e.target.value)}
                    placeholder="Password"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setLockinPeriod(e.target.value)}
                    placeholder="Password"
                    type="text"
                    
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                  onChange={(e) => setCompoundLevel(e.target.value)}
                    placeholder="Password"
                    type="text"
                   
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
              <button
              className='btn btn-info'
                    type="submit"
                  >
                    Save
                  </button>
              </div>
            </Form>
          </CardBody>
        </Card>
    );
};

export default AddPackage;