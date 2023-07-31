import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";

const UpdatePackages = () => {
  const { id } = useParams();
  const [pkg, setPackage] = useState({});
  const [planName, setPlanName] = useState("");
  const [planType, setPlanType] = useState("");
  const [profitShare, setProfitShare] = useState("");
  const [settelementTime, setSettelementTime] = useState("");
  const [lockinPeriod, setLockinPeriod] = useState("");
  const [locking_no, setLokinNo] = useState("");
  const [compoundLevel, setCompoundLevel] = useState("");
  const [available, setAvailable] = useState("");
  const [short_desc, setDescription] = useState("");

  const navigate = useNavigate();

  // Fetch Packages
  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/package/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackage(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // update brand with id
  const updatePackageById = async () => {
    const data = {
      planName: planName ? planName : pkg?.planName,
      planType: planType ? planType : pkg?.planType,
      profitShare: profitShare ? profitShare : pkg?.profitShare,
      settelementTime: settelementTime ? settelementTime : pkg?.settelementTime,
      lockinPeriod: lockinPeriod ? lockinPeriod : pkg?.lockinPeriod,
      locking_no: locking_no ? locking_no : pkg?.locklocking_noinPeriod,
      compoundLevel: compoundLevel ? compoundLevel : pkg?.compoundLevel,
      available: available ? available : pkg?.available,
      short_desc: short_desc ? short_desc : pkg?.short_desc,
    };
    try {
      const response = await axios.post(
        `https://indian.munihaelectronics.com/public/api/update-pkg/${pkg?.id}`,
        data
      );

      if (response) {
        navigate("/admin/packages");
      }
    } catch (error) {
      console.log(error?.response);
      toast.error(error.response?.data?.error);
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white font-weight-bold">Update Packages</h2>
      </div>
      <Row className="container-fluid mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handleSubmit}>
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
                          defaultValue={pkg?.planName}
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
                          <option>{pkg?.planType}</option>
                          <option>Minimum amount for investment</option>
                          <option>Maximum amount for investment</option>
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
                          defaultValue={pkg?.profitShare}
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
                          <option>{pkg?.settelementTime}</option>
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
                              min={1}
                              className="ml-2 "
                              style={{
                                width: "50px",
                                border: "1px solid gray",
                              }}
                              onChange={(e) => setLokinNo(e.target.value)}
                              defaultValue={pkg?.locking_no}
                            />
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          id="exampleSelect"
                          name="select"
                          type="select"
                          onChange={(e) => setLockinPeriod(e.target.value)}
                        >
                          <option>{pkg?.lockinPeriod}</option>
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
                          defaultValue={pkg?.compoundLevel}
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
                          <option>{pkg?.available}</option>
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
                      onChange={(e) => setDescription(e.target.value)}
                      defaultValue={pkg?.short_desc}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <button
                    className="btn btn-default w-100"
                    type="submit"
                    onClick={updatePackageById}
                  >
                    Update Package
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

export default UpdatePackages;
