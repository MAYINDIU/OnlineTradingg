import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios";
import { Card, CardBody, Col, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const AddRole = () => {
    const [name,setRole] = useState('')
    const [permissions,setRoles] = useState([])

    useEffect(() => {
        fetch(`https://indian.munihaelectronics.com/public/api/all_roles`)
          .then((res) => res.json())
          .then((data) => setRoles(data));
      }, []);
console.log(permissions)
    const handleRole = async (e) => {
        console.log(e);
        e.preventDefault();
    
        const data = {
          name,
         
        };
        console.log(data);
        try {
          const response = await axios.post(
            "https://indian.munihaelectronics.com/public/api/add_role",
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(response);
    
          // Reset the form inputs
          
          setRole("");
         
          swal({
          title: "Role added successfully",
          text: 'success' ,
          icon: "success",
        });
        window.location.reload()
        } catch (error) {
          toast.error(error?.response?.data?.error);
        }
      };
    return (
        <div>
        <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
          <h2 className="text-white text-center font-weight-bold">Add Role</h2>
        </div>
        <Row className="container-fluid mb-3">
        <Col lg="12" xl="12" className=" mt--7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleRole}>
        <Row className='text-center'>
        <Col lg="8" xl="8" className=" mt-3">
                    <FormGroup className="mb-3">
                      
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i class="fa-solid fa-lock text-info"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                        className="text-dark"
                          onChange={(e) => setRole(e.target.value)}
                          placeholder="Write a Role Name"
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
                  <th className="text-center">Role Name</th>
                  <th className="text-center">Action</th>
                 
                 
                </tr>
              </thead>
              <tbody>
                {permissions.map((r, index) => (
                  <tr key={index}>
                    <th className="text-center" scope="row">
                      {index + 1}
                    </th>

                    {/* <td className="text-center">{tnx?.tnx_type}</td> */}
                    <td className="text-center">{r?.name}</td>
                    
                    <td className="flex text-center">
                      <Link to={`/admin/updateadminevel/${r?.id}`}>
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

export default AddRole;