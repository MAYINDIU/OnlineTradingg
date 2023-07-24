import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";

const TradingPlan = () => {
  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-4">Tranding Plan</h2>
      </div>
      <Row className="container-fluid ">
        <Col lg="4" xl="4" className=" mt--7">
          <Card className="bg-default  shadow-lg  shadow-sm--hover card-lift--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <div className="text-center">
                <lavel className="text-info mt-6 w-50 fs-1 rounded-1">
                  Pre Marker Routine
                </lavel>
              </div>

              <h5 className="text-white mt-3 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white  text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <div className="col text-center mt-3">
                <Button className="btn btn-primary">
                  {" "}
                  <i className="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-" />
                  <i class="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-arrow-right-long"></i>
                  Show Plan
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" xl="4" className=" mt--7">
          <Card className="bg-default shadow-lg card-lift--hover  shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <div className="text-center">
                <lavel className="text-info mt--6 w-50 rounded-1">
                  Time Frame
                </lavel>
              </div>

              <h5 className="text-white mt-3 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white  text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <div className="col text-center mt-3">
                <Button className="btn btn-primary">
                  <i class="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-arrow-right-long"></i>
                  Show Plan
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" xl="4" className=" mt--7">
          <Card className="bg-default shadow-lg   card-lift--hover shadow-sm--hover  mb-4 mb-xl-0 ">
            <CardBody>
              <div className="text-center">
                <lavel className="text-info mt--6 w-75 rounded-1">
                  Risk Management
                </lavel>
              </div>

              <h5 className="text-white mt-3  text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <h5 className="text-white mt-0 text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white  text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>
              <h5 className="text-white  text-center">
                <i class="fa-solid fa-circle-check"></i> Good Service
              </h5>

              <div className="col text-center mt-3">
                <Button className="btn btn-primary">
                  {" "}
                  <i class="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-arrow-right-long"></i>
                  Show Plan
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TradingPlan;
