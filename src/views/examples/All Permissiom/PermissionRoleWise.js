import React, { useEffect, useState } from "react";
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
  Table,
} from "reactstrap";

const PermissionRoleWise = () => {
  const [permissions, setPermission] = useState([]);
  const [permissionList, setPermissionList] = useState([]);
//   const [mName,setMName] = useState(null)

  const module = ["User", "Plan"];
  let mName;

  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/all_roles")
      .then((res) => res.json())
      .then((data) => setPermission(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/permission_list/${mName}`
    )
      .then((res) => res.json())
      .then((data) => setPermissionList(data.All_permission));
  }, [mName]);
  
console.log(mName)
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">
          Add Permission
        </h2>
      </div>
      <Row className="container-fluid mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <Row className="text-center">
                  <Col lg="8" xl="8" className=" mt-3">
                    <FormGroup className="mb-3">
                      <Label>Select Role</Label>
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
                          //   onChange={(e) => setPlanType(e.target.value)}
                        >
                          {permissions?.map((p) => (
                            <option>{p.name}</option>
                          ))}
                        </Input>
                      </InputGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <Table className="" hover bordered responsive>
              <thead className="text-white bg-gradient-info">
                <tr>
                  <th className="text-center">Sl No</th>
                  <th className="text-center">Permission Name</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              {/* <tbody>
                {permissionList.map((list, index) => (
                  <tr key={index}>
                    <td className="text-center " scope="row">
                      {index + 1}
                    </td>

                  
                      <td className="text-center">{list?.name}</td>
                  </tr>
                ))}
              </tbody> */}
              <tbody>
                {
                    module.map((m,i)=>{
                        mName = m
                        return  <tr>
                        <td>{m}</td>

                    </tr>
                    })
                }
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PermissionRoleWise;
