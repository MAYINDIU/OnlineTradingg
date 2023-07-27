import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

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
      <div className="container-fluid header bg-gradient-info pb-2 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-4">All User</h2>
      </div>
      <div className="container mx-auto">
        <Table hover>
          <thead>
            <tr className="text-md">
              <th>Sl No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {/* <button  onClick={()=>handleActive(user?.id)}>Button</button> */}
                {
                  message === 'User Active SuccessFull' ?
                  <button className="btn btn-success"
                  onClick={()=>handleActive(user?.id)}
                  >Active</button> :
                  message === 'User Deactive SuccessFull' ?
                  <button className="btn btn-danger"
                  onClick={()=>handleActive(user?.id)}
                  >DeActive</button> : ''
                }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllUser;
