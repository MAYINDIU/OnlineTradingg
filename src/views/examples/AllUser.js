import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Table } from "reactstrap";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');




  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users)


 //******Handle post data in database********
 const handleUpdate =async (id) => {
  const confirm = window.confirm("Are You Sure?");
    if(confirm){
    const ID=id;
    console.log(ID);

    try{
      const response = await axios.put(
        `https://indian.munihaelectronics.com/public/api/update_status/${ID}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
     console.log((response))
      window.location.reload()
     
     
      }
      catch (error) {
        console.error("Error creating payment:", error);
        
      }
      // Previous Active deactivate data 

    // const url = `https://indian.munihaelectronics.com/public/api/update_status/${ID}`;
    // fetch(url, {
    //     method: "PUT",
    //     headers: {
    //         "content-type": "application/json"
    //     },
    // })
    // window.location.reload()
    //     .then(res => res.json())
    //     .then(data=>console.log(data));
       
      }
}


  return (
    <div>

      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">All USERS</h2>
        <Form className="navbar-search navbar-search-dark form-inline d-md-flex justify-content-end ml-lg-auto mb-3">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input onChange={(e) => setSearch(e.target.value)}
                placeholder="Search" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>

      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7 mb-5">
        <Card className="shadow-lg  ">
          <Table hover bordered responsive>
            <thead className="text-white bg-gradient-info">
              <tr className="text-md text-center">
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>User ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.filter((item) => {
                return search.toString() === ''
                  ? item
                  : item.id.toString().includes(search);
              })
                .map((user, index) => (
                  <tr>
                    <th className="text-center" scope="row">{index + 1}</th>
                    <td className="text-center">{user?.name}</td>
                    <td className="text-center">{user?.email}</td>
                    <td className="text-center">{user?.id}</td>
                 <td className="text-center  justify-content-between">
               
               {
                 user?.status != "0"  ? <Button onClick={() => handleUpdate(user?.id)} size="sm" className="btn btn-success w-50 lg:w-25 border-none">
                 Active
               </Button> :    <Button onClick={() => handleUpdate(user?.id)} size="sm"  className="btn btn-danger w-50 lg:w-25 h-12 border-none">
                 Diactive
                 </Button>
             
               }
                <Link to={`/admin/user/${user?.id}`}>
                   <Button size="sm" className="btn btn-info border-none ml-2">
                     Manage
                   </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default AllUser;