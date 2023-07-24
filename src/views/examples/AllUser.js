import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const AllUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users)
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
                  {
                    user?.status == 0  ? <button className="btn btn-success border-none">
                    Active
                  </button> : <button className="btn btn-danger border-none">
                    Diactive
                  </button>
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
