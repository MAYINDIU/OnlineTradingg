import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import { Card, CardBody, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

const AddPermission = () => {
    const [name,setPermissionName] = useState('')
    const [permissions,setAllpermissions] = useState([])

    useEffect(() => {
        fetch(`https://indian.munihaelectronics.com/public/api/all_permission`)
          .then((res) => res.json())
          .then((data) => setAllpermissions(data));
      }, []);
console.log(permissions)
    const handlePermission = async (e) => {
        console.log(e);
        e.preventDefault();
    
        const data = {
          name,
         
        };
        console.log(data);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/add_permission",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
    
          // Reset the form inputs
          
          setPermissionName("");
         
          alert(response?.data?.message)
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      };
    return (
        <div>
        <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
          <h2 className="text-white text-center font-weight-bold">Add Permission</h2>
        </div>
        <Row className="container-fluid mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handlePermission}>
        <Row className='text-center'>
        <Col lg="8" xl="8" className=" mt-3">
                    <FormGroup className="mb-3">
                      
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa-solid fa-seedling text-info"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        className="text-dark"
                          onChange={(e) => setPermissionName(e.target.value)}
                          placeholder="Write a permission name"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col lg="4" xl="4" className='mt-3'>
                  <div className="text-start">
                  <button  className="btn btn-primary w-50" type="submit">
                    ADD 
                  </button>
                </div>
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
              <tbody>
                {permissions.map((list, index) => (
                  <tr key={index}>
                    <th className="text-center" scope="row">
                      {index + 1}
                    </th>

                    {/* <td className="text-center">{tnx?.tnx_type}</td> */}
                    <td className="text-center">{list?.name}</td>
                    
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

export default AddPermission;