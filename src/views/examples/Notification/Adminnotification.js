import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Table } from "reactstrap";

const Adminnotification = () => {
 const navigate = useNavigate();
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/show_notification")
      .then((res) => res.json())
      .then((data) => setNotification(data));
  }, []);




  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">All Notifications</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7">
      <Card  className="shadow-lg  ">
        <Table hover bordered responsive>
          <thead className="text-white bg-gradient-info">
            <tr className="text-md text-center">
              <th>Sl No</th>
              <th>User ID</th>
              <th>Text</th>
              <th>Admin Status</th>
              <th>User Status</th>
              <th>Date</th>
           
              
            </tr>
          </thead>
          <tbody>
            {notification.map((noti, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
            <td className="text-center">{noti?.userid}</td>
                <td className="text-center">{noti?.text}</td>
                <td className="text-center">{noti?.admin_status}</td>
                <td className="text-center">{noti?.user_status}</td>
                <td className="text-center">{noti?.created_at}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Card>
      </div>
    </div>
  );
};

export default Adminnotification;