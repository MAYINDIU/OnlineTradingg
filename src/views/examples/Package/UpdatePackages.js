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
      <Row className="container-fluid">
        <Col lg="12" xl="12" className=" mt--7">
      <Card className="bg-secondary shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
          <Form role="form" onSubmit={handleSubmit}>
            <FormGroup className="mb-3">
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
                  defaultValue={pkg?.planName}
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
                  defaultValue={pkg?.planType}
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
                  defaultValue={pkg?.profitShare}
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
                  defaultValue={pkg?.settelementTime}
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
                  defaultValue={pkg?.lockinPeriod}
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
                  defaultValue={pkg?.compoundLevel}
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
                  onChange={(e) => setAvailable(e.target.value)}
                  placeholder="Availale"
                  type="text"
                  defaultValue={pkg?.available}
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
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  name="text"
                  type="textarea"
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
