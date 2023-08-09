import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
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

const AddPackage = () => {
  const [planName, setPlanName] = useState("");
  const [planType, setPlanType] = useState("");
  const [profitShare, setProfitShare] = useState("");
  const [settelementTime, setSettelementTime] = useState("");
  const [lockinPeriod, setLockinPeriod] = useState("");
  const [locking_no, setLokinNo] = useState("");
  const [compoundLevel, setCompoundLevel] = useState("");
  const [available, setAvailable] = useState("");
  const [short_desc, setShortDes] = useState("");

  const handlePackages = async (e) => {
    console.log(e);
    e.preventDefault();

    const data = {
      planName,
      planType,
      profitShare,
      settelementTime,
      lockinPeriod,
      locking_no,
      compoundLevel,
      available,
      short_desc,
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
      console.log(response);

      // Reset the form inputs

      setPlanName("");
      setPlanType("");
      setProfitShare("");
      setSettelementTime("");
      setLockinPeriod("");
      setLokinNo("");
      setCompoundLevel("");
      setShortDes("");
      alert(response?.data?.message)
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">ADD PACKAGE</h2>
      </div>
      <Row className="container-fluid mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handlePackages}>
                <Row>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Plan Name</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-globe"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setPlanName(e.target.value)}
                          placeholder="Plan Name"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Plan Type</Label>
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
                          <option>Dynamic</option>
                          <option>Flat</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup>
                      <Label>Profit Share</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-square-share-nodes"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setProfitShare(e.target.value)}
                          placeholder="Profit Share"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup>
                      <Label>Settelement Time</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-calendar-day"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setSettelementTime(e.target.value)}
                        >
                          <option>Monthly</option>
                          <option>Quarterly</option>
                          <option>Yearly</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup>
                      <Label>Lockin Period</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-business-time"></i>
                            <input
                              type="number"
                              min={1} className="ml-2 "
                              style={{ width: '50px', border: '1px solid gray' }}
                              onChange={(e) => setLokinNo(e.target.value)}
                            />
                          </InputGroupText>

                        </InputGroupAddon>

                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setLockinPeriod(e.target.value)}
                        >
                          <option>Month</option>
                          <option>Days</option>
                        </Input>
                        {/* </select> */}
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup>
                      <Label>Compound Level</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-layer-group"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setCompoundLevel(e.target.value)}
                          placeholder="Compound Level"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Available</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-memory"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setAvailable(e.target.value)}
                        >
                          <option>All</option>
                          <option>New</option>
                          <option>Existing</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup>
                      <Label for="exampleFile">File</Label>
                      <Input id="exampleFile" name="file" type="file" />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="exampleText">Description</Label>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i class="fa-regular fa-keyboard"></i>
                      </InputGroupText>
                    </InputGroupAddon>

                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      onChange={(e) => setShortDes(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <button className="btn btn-primary w-50" type="submit">
                    ADD PACKAGE
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddPackage;
