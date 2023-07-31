import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Table } from "reactstrap";

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
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">All USERS</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
        <Card className="shadow-lg  ">
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
                  <td className="text-center d-flex justify-content-between">

                    <Link to={`/admin/user/${user?.id}`}>
                      <Button size="sm" className="btn btn-info border-none">
                        Manage
                      </Button>
                    </Link>


                    {
                      user?.status != "0" ? <Button size="sm" className="btn btn-success border-none">
                        Active
                      </Button> : <Button size="sm" className="btn btn-danger h-12 border-none">
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
