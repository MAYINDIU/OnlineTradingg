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
import axios from "axios";
import { toast } from "react-toastify";

const modules = ["User", "Plan"]; // Your hardcoded list of modules
const PermissionTable = () => {
  const [permissions, setPermission] = useState([]);
  const [activeModule, setActiveModule] = useState(false);
  const [roleId, setRoleId] = useState({});

  const [selected, setSelected] = useState('');
const [finalPermission,setFinalPermission] = useState([])

  const getInitialState = () => {
    const value = "Orange";
    return value;
  };
  const [value, setValue] = useState("1");

  console.log(value);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/all_roles")
      .then((res) => res.json())
      .then((data) => setPermission(data));
  }, []);
  const permission_name = finalPermission.map(item => `"${item}"`).join(', ')
  
  const handleRoleAndPermission = async (e) => {
    console.log(e);
    e.preventDefault();

   const formdata = {
    role_id : value,
    permission_name,

   }
    // const formdata = new FormData();
    // formdata.append("role_id", value);

    // for (let i = 0; i < arr.length; i++) {
    //     formdata.append("permission_name", arr[i]);
    // }
   
    
    try {
      const response = await axios.post(
        "https://indian.munihaelectronics.com/public/api/final_permission",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      // Reset the form inputs
      
      
     
      alert(response?.data?.message)
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

console.log(finalPermission)
 
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center font-weight-bold">
          Add Permission
        </h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
        <Card className="shadow-lg border-0 p-5 ">
          <Form role="form" onSubmit={handleRoleAndPermission}>
            <Row className="text-left">
              <Col lg="12" xl="12" className=" mt-3">    
                 <select  value={value} onChange={handleChange}>
                {permissions?.map((p) => (
                  <option className="shadow mt-3" lg="12" xl="12" value={p.id}>{p.name}</option>
                ))}
                </select>
  
               <h1>{value}</h1>
                      
                    {/* </Input> */}
          
              </Col>
            </Row>
          

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
                  setFinalPermission={setFinalPermission}
                  finalPermission={finalPermission}
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
        </Form>
        </Card>
      </div>
    </div>
  );
};


 
  const ModuleRow = ({
  moduleName,
  activeModule,
  setActiveModule,
  finalPermission,
  setFinalPermission
}) => {
  const [permissionTypes, setPermissionTypes] = useState([]);
  const [moduleChecked, setModuleChecked] = useState(false);

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

  const handleModuleCheck = () => {
    setModuleChecked(!moduleChecked);
  };

  const handlePermissionCheck = (permission) => {
    // Toggle the permission checkbox state
    const newFinalPermission = [...finalPermission];
    const index = newFinalPermission.indexOf(permission);
    if (index === -1  ) {
      newFinalPermission.push(permission);
    } else {
      newFinalPermission.splice(index, 1);
    }
    setFinalPermission(newFinalPermission);

  };


  // ... rest of your code ...

  return (
    <tr>
      <td>
        <Button>
          <Input
            name="check"
            type="checkbox"
            onClick={handleModuleCheck}
            checked={activeModule || moduleChecked}
          ></Input>{" "}
          {moduleName}
        </Button>
      </td>

      <td>
        {permissionTypes.map((permission) => (
          <Button key={permission} className="text-center">
            <Input
              name="check"
              type="checkbox"
              onClick={() => handlePermissionCheck(permission)}
              checked={activeModule || moduleChecked || finalPermission.includes(permission)}
            ></Input>{" "}
            {permission}
          </Button>
        ))}
      </td>
    </tr>
  );
};

 

export default PermissionTable;