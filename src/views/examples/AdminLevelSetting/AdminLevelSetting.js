import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";

const AdminLevelSetting = () => {
  const [level, setLevel] = useState("");
  const [commission, setCommission] = useState("");
  const [levelList, setLevelList] = useState([]);

  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/level-setting`)
      .then((res) => res.json())
      .then((data) => setLevelList(data));
  }, []);

  const handlelevelsetting = async (e) => {
    console.log(e);
    e.preventDefault();

    const data = {
      level,
      commission,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://indian.munihaelectronics.com/public/api/create-level-setting",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      // Reset the form inputs

      setLevel("");
      setCommission("");

      alert(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">ADD LEVEL</h2>
      </div>
      <Row className=" mx-auto container mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" onSubmit={handlelevelsetting}>
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
                          className="text-dark"
                          onChange={(e) => setLevel(e.target.value)}
                          placeholder="Level Name"
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
                          id="exampleSelect"
                          name="select"
                          type="text"
                          placeholder="Commission"
                          onChange={(e) => setCommission(e.target.value)}
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>

                <div className="text-center mt-3">
                  <button className="btn btn-primary " type="submit">
                    ADD LEVEL
                  </button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-3 container mx-auto">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0 text-center">Level List</h3>
                </div>
              </Row>
            </CardHeader>
            <Table className="" hover bordered responsive>
              <thead className="text-white bg-gradient-info">
                <tr>
                  <th className="text-center">Sl No</th>
                  <th className="text-center">Level Name</th>
                  <th className="text-center">Commission</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {levelList.map((list, index) => (
                  <tr key={index}>
                    <th className="text-center" scope="row">
                      {index + 1}
                    </th>

                    {/* <td className="text-center">{tnx?.tnx_type}</td> */}
                    <td className="text-center">{list?.level}</td>
                    <td className="text-center">{list?.commission}</td>
                    <td className="flex text-center">
                      <Link to={`/admin/updateadminevel/${list?.id}`}>
                        <i
                          className="fa-solid fa-pen-to-square text-info mr-2"
                          style={{ width: "30px", fontSize: "23px" }}
                        ></i>
                      </Link>
                    </td>
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

export default AdminLevelSetting;
