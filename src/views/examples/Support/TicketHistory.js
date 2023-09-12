import { AuthContext } from "Context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Table,
} from "reactstrap";

const TicketHistory = () => {
  const { user } = useContext(AuthContext);

  const id = user?.id;
  // console.log((typeof id))
  const [ticketHistory, setTicketHistory] = useState([]);

  const filterUserId = ticketHistory?.filter((t) => +t?.userid === id);
  console.log(filterUserId);

  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/all_support_list`)
      .then((res) => res.json())
      .then((data) => setTicketHistory(data));
  }, []);
  
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      const url = `https://indian.munihaelectronics.com/public/api/delete-msg/${id}`
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
        const remaining = ticketHistory.filter(p=> p.id !== id)
        setTicketHistory(remaining)

      toast.success("Delete Successfull!!");
     
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white text-center mb-2">Ticket History</h2>
      </div>
      <div className="container-fluid  mb-2 mx-auto mt--7 mb-5">
        <Card className="shadow-lg  ">
          <Table hover bordered responsive>
            <thead className="text-white bg-gradient-info">
              <tr className="text-md text-center">
                <th>SL No</th>
                <th>Token No</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filterUserId?.map((t, i) => (
                <tr>
                  <th className="text-center" scope="row">
                    {i + 1}
                  </th>
                  <th className="text-center">{t?.token_no} </th>
                  <td className="text-center">{t?.description}</td>
                  <td className="text-center">
                    {t?.priority === "Low" || t?.priority === "Medium" ? (
                      <Button
                        className="btn-warning text-white mr-2 w-50"
                        size="sm"
                      >
                        {t?.priority}
                      </Button>
                    ) : (
                      <Button
                        className="btn-danger text-white mr-2 w-50"
                        size="sm"
                      >
                        {t?.priority}
                      </Button>
                    )}
                  </td>
                  <td className="text-center">
                    {t?.status === "1" ? (
                      <Button className="btn-warning text-white w-50" size="sm">
                       <small> On-Progress</small>
                      </Button>
                    ) : (
                      <Button className="btn-success text-white w-50" size="sm">
                        Solved
                      </Button>
                    )}
                    <Link to={`/user/viewticket/${t?.id}`}>
                      <Button size="sm" className="btn-info text-white w-50">
                        View
                      </Button>
                    </Link>
                  </td>
                  <td className="text-center">
                 {
                  t?.status === '1' ?  <Button disabled className="border-none">
                  <i
                          className="fa-solid fa-trash-can disable text-gray  mr-2"
                          onClick={()=>handleDelete(t?.id)}
                          style={{ width: "30px", fontSize: "23px" }}
                          
                        ></i>
                  </Button> : 
                  <i
                          className="fa-solid fa-trash-can disable text-danger mr-2"
                          onClick={()=>handleDelete(t?.id)}
                          style={{ width: "30px", fontSize: "23px",cursor:'pointer' }}
                          
                        ></i>
                 
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

export default TicketHistory;
