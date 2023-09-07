import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
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
  Row,
} from "reactstrap";
import axios from "axios";
import { AuthContext } from "Context/AuthProvider";

const CreateTicket = () => {
  const [description, setDescrption] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();

    const data = {
      description,
      userid: user?.id,
    };
    console.log(user.id);
    try {
      const response = await axios.post(
        "https://indian.munihaelectronics.com/public/api/create_support",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      // Reset the form inputs

      setDescrption("");

      alert(response?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white font-weight-bold text-center">
          Create Your Ticket
        </h2>
      </div>
      <Row className=" w-75 mx-auto">
        <Col lg="12" xl="12" className=" mt--7">
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
      </Row>
    </div>
  );
};

export default CreateTicket;
