import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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
  Table,
} from "reactstrap";
import { toast } from "react-toastify";
const UpdateLevelSetting = () => {
  const [level, setLevel] = useState("");
  const [commission, setCommission] = useState("");
  const [list, setLevelList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/single-level-setting/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLevelList(data));
  }, [id]);

  const updateLevelListId = async (e) => {
    e.preventDefault();
    const data = {
      level: level ? level : list?.level,
      commission: commission ? commission : list?.commission,
    };
    try {
      const response = await axios.post(
        `https://indian.munihaelectronics.com/public/api/update-level-setting/${list?.id}`,
        data
      );
      console.log(response);
      if (response) {
        swal({
          title: "Successfully Updated",
          text: "Success",
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error?.response);
      toast.error(error.response?.data?.error);
    }
  };
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">ALL LEVEL</h2>
      </div>
      <Row className=" mx-auto container mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={updateLevelListId}>
                <Row>
                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Level Name</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid fa-layer-group text-info"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          className="text-dark"
                          onChange={(e) => setLevel(e.target.value)}
                          placeholder="Level Name"
                          defaultValue={list.level}
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>

                  <Col lg="12" xl="6" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Commission</Label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i class="fa-solid text-info fa-rectangle-list"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          required
                          id="exampleSelect"
                          name="select"
                          type="text"
                          placeholder="Commission"
                          defaultValue={list.commission}
                          onChange={(e) => setCommission(e.target.value)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  <button className="btn btn-primary " type="submit">
                    UPDATE
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

export default UpdateLevelSetting;
