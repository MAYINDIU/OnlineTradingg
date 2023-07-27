import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, CardBody, Row, Col, Container, CardText } from "reactstrap";

const MyPlan = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log('pac',packages)
  return (
    <div >

      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-4">My Plan</h2>
      </div>
      <Container >


      <Row >
        <Col xs='12' md='4' lg="4" xl="12"  className="mt--7 d-flex  d-flex justify-content-between pr-2">
          
          {
            packages.map(p=>(

          <Card className="bg-default  shadow-lg  shadow-sm--hover card-lift--hover  mb-4 mr-2 mb-xl-0 ">

                <CardBody>
              <div className="text-center">
                <lavel className="text-info mb-3  w-50 rounded-1">
                  Technology Plan
                </lavel>
              </div>

              <div className="mt-3 text-center">
                <i className=" icon icon-shape bg-primary text-white rounded-circle shadow fa-solid fa-hand-holding-heart" />
              </div>

              <h5 className="text-white mt-3 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.planName} </span>
              </h5>
              <h5 className="text-white mt-0 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.planType} </span>
              </h5>

              <h5 className="text-white mt-3 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.profitShare} </span>
              </h5>
              <h5 className="text-white mt-0 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.settelementTime} </span>
              </h5>
              <h5 className="text-white mt-3 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.lockinPeriod}</span>
              </h5>
              <h5 className="text-white mt-3 text-center">
                <i class="fa-brands fa-canadian-maple-leaf"></i>
                <span className="ml-1">{p?.compoundLevel} </span>
              </h5>

              <div className="col text-center mt-3">
                <Button className="btn btn-primary">
                  <i className="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-arrow-right-long" />
                  Show Your Plan
                </Button>
              </div>
            </CardBody>
          </Card>
            ))
          }
        </Col>
       
        
      </Row>
      </Container>
     
    </div>
  );
};

export default MyPlan;
