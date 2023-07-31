import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Card, Table } from "reactstrap";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(null);
  console.log(message)
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  // console.log(users)
 
  const handleActive = async (id)=>{
    console.log(id)

    
    try {
      const response = await axios.put(
        `https://indian.munihaelectronics.com/public/api/update_status/${id}`,
        
      );
        console.log(response?.data?.message)
      setMessage(response?.data?.message)
      
    } catch (error) {
      console.log(error?.response);
      toast.error(error.response?.data?.error);
    }
  };
  
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">All USERS</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
      <Card  className="shadow-lg  ">
        <Table hover bordered responsive>
          <thead className="text-white bg-gradient-info">
            <tr className="text-md text-center">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{user?.name}</td>
                <td className="text-center">{user?.email}</td>
                <td className="text-center">
                  {
                    user?.status != "0"  ? <Button size="sm" className="btn btn-success border-none">
                    Active
                  </Button> :    <Button size="sm"  className="btn btn-danger h-12 border-none">
                    Diactive
                    </Button>
                
                  }
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
