import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
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

const modules = ["User", "Plan"]; // Your hardcoded list of modules
const PermissionTable = () => {
  const [permissions, setPermission] = useState([]);
  const [activeModule, setActiveModule] = useState(false);
  const [roleId, setRoleId] = useState({});

  const [selected, setSelected] = useState(permissions[0].id);

  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/all_roles")
      .then((res) => res.json())
      .then((data) => setPermission(data));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  console.log(selected);

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">
          Add Permission
        </h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
        <Card className="shadow-lg border-0 p-5 ">
          <Form role="form">
            <Row className="text-left">
              <Col lg="12" xl="12" className=" mt-3">
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
                      <select  value={selected} onChange={handleChange}>
                        {permissions?.map((p) => (
                          <option key={p.value} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </Input>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <Table>
            <thead className="text-white bg-gradient-info">
              <tr>
                <th>
                  <Input
                    name="check"
                    type="checkbox"
                    className="mb-2"
                    onClick={() => setActiveModule(!activeModule)}
                  ></Input>{" "}
                  Module
                </th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module) => (
                <ModuleRow
                  key={module}
                  moduleName={module}
                  setActiveModule={setActiveModule}
                  activeModule={activeModule}
                  roleId={roleId}
                />
              ))}
            </tbody>
          </Table>
          <div className="text-center mt-4">
            <button className="btn btn-primary w-25" type="submit">
              Submit
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const ModuleRow = ({ moduleName, activeModule, setActiveModule }) => {
  const [permissionTypes, setPermissionTypes] = useState([]);
  const [permissionTypesForId, setPermissionTypesforId] = useState([]);
  const [active, setActive] = useState(false);

  const fetchPermissionTypes = () => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/permission_list/${moduleName}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.All_permission && Array.isArray(data.All_permission)) {
          setPermissionTypes(
            data.All_permission.map((permission) => permission.name)
          );
        } else {
          console.error(`Invalid API response for module ${moduleName}`);
        }
      })
      .catch((error) => {
        console.error(
          `Error fetching permission types for module ${moduleName}:`,
          error
        );
      });
  };

  useEffect(() => {
    fetchPermissionTypes();
  }, [moduleName]);
  console.log(permissionTypes);
  console.log(permissionTypesForId);

  return (
    <tr>
      <td>
        <Button>
          <Input
            name="check"
            type="checkbox"
            onClick={() => setActive(!active)}
            checked={active || activeModule}
          ></Input>{" "}
          {moduleName}
        </Button>
      </td>

      <td>
        {permissionTypes.map((m) => (
          <Button key={m} className="text-center">
            <Input
              name="check"
              type="checkbox"
              checked={active || activeModule}
            ></Input>{" "}
            {m}{" "}
          </Button>
        ))}

        {/* <Button
      className='mr-2'
      name="check"
      type="checkbox"
      /> */}
      </td>
    </tr>
  );
};

export default PermissionTable;
