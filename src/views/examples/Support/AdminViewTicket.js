import { AuthContext } from "Context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Table,
  Col,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Container,
} from "reactstrap";
const AdminViewTicket = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [ticketHistory, setTicketHistory] = useState({});
  const [description_read, setDescrption] = useState("");

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/singleSupportlist/${id}`
    )
      .then((res) => res.json())
      .then((data) => setTicketHistory(data?.support));
  }, []);

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    const data = {
      description_read,
      userid: user?.id,
      support_id: id,
    };
    console.log(user.id);
    try {
      const response = await axios.post(
        "https://indian.munihaelectronics.com/public/api/reply_support",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
      console.log(response);

      // Reset the form inputs

      setDescrption("");

      // alert(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white font-weight-bold">User Supoort</h2>
      </div>

      <Row className="mt--7 mb-3 container-fluid">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow border-0">
            <Col lg="12" xl="8" className="mt-2">
              <h3> {ticketHistory?.description}</h3>
              {ticketHistory?.replies?.map((r) =>
                r?.userid != user?.id ? (
                  <p className="shadow-lg rounded">
                    <span>Client: </span>
                    <i
                      class="fa-solid fa-comment-dots p-3 text-dark "
                      
                    ></i>
                    {r?.description_read}
                  </p>
                ) : (
                  <p className="text-right  ">
                    <span className="text-white bg-primary shadow-xl p-2 rounded "> {r?.description_read}</span>
                    <i class="fa-solid fa-comment-dots text-dark ml-1"></i>
                  </p>
                )
              )}
            </Col>
          </Card>
        </Col>
      </Row>
      <Row className="container-fluid">
        <Col lg="12" xl="8">
          <div className="mt-2">
            <h4 className="text-gray font-weight-bold">Write Comment</h4>
          </div>
          <Card className="card-stats shadow-lg shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <Form role="form" onSubmit={handleSubmit}>
                <Input
                  style={{ height: "150px" }}
                  className="text-dark"
                  id="exampleText"
                  name="text"
                  type="textarea"
                  placeholder="Write your probelm...."
                  onChange={(e) => setDescrption(e.target.value)}
                />

                <Row>
                  <div className=" mt-4 text-center col">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </div>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" xl="4" className="text-center">
            <Card className="card-stats shadow-lg  shadow-sm--hover h-100  mb-4  ">
              <CardBody>
               
                <Row>
                  <Col xl="12" lg="12" className="mt-3">
                    <h5>
                      Token Number: <span className="text-gray"> {ticketHistory?.token_no}</span>
                    </h5>
                    <h5>
                      Support Id: <span className="text-gray"> {ticketHistory?.id}</span>
                    </h5>
                    <h5>
                      Status:{" "}
                      <Button className="btn-warning" style={{}} size="sm">
                        {ticketHistory?.priority}
                      </Button>
                    </h5>
                  </Col>
                </Row>

                <div className="text-center mt-2">
                  <Button className="btn-danger text-center" size="md">
                    Close
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default AdminViewTicket;
