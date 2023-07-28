import React, { useEffect, useState } from "react";
import { Button, Card, CardHeader, CardBody, Row, Col, Container, CardText, CardSubtitle } from "reactstrap";
import { useContext} from "react";
import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import swal from "sweetalert";
const MyPlan = () => {
  const { user } = useContext(AuthContext);
  const current = new Date();
  const purchase_dt = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
// console.log(purchase_date);
const buyalert = () => {
  swal({
    // title: "Congratulations",
    title: "Thank you for purchase package",
    icon: "success",
    button: "Done",
  });
}
  const [packages, setPackages] = useState([]);
  const [purchase, setPurchase] = useState([]);
  console.log(purchase);
  useEffect(() => {
    fetch("https://indian.munihaelectronics.com/public/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

    //******Handle post data in database********
    const handlePurchase = (id) => {
      const userId=user?.id;
      const purchase_date=purchase_dt;
      const planId=id;
      const status="Pending";
      const data = {
        userId,
        planId,
        purchase_date,
        status
      };
      console.log(data);
      const url = `https://indian.munihaelectronics.com/public/api/purchase_pkg`;
      fetch(url, {
          method: "POST",
          headers: {
              "content-type": "application/json"
          },
          body: JSON.stringify(data)
      })
          .then(res => res.json())
          .then(data=>setPurchase(data));

          if(purchase?.message==='Purchase Successfully'){
            buyalert();
          }
 
  }

  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-0">My Plan</h2>
      </div>
      <Row className="container-fluid mt--7">

        {
          packages.map(p => (
            <Col lg="4" xl="4" className=''>
              <Card className="bg-default  shadow-lg  shadow-sm--hover card-lift--hover mt-5  mb-4 mb-xl-0 ">
                <CardBody>
                  <div className="text-center">
                    <lavel className="text-white mb-3  w-50 rounded-1">
                      Technology Plan
                    </lavel>
                  </div>

                  <div className="mt-3 text-center">
                    <i className=" icon icon-shape bg-primary text-white rounded-circle shadow fa-solid fa-hand-holding-heart" />
                  </div>

                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">{p?.planName} </span>
                  </h5>
                  <h5 className="text-white mt-0 text-center">
                    <span className="ml-1">{p?.planType} </span>
                  </h5>

                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">{p?.profitShare} </span>
                  </h5>
                  <h5 className="text-white mt-0 text-center">
                    <span className="ml-1">{p?.settelementTime} </span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">{p?.lockinPeriod}</span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">{p?.compoundLevel} </span>
                  </h5>

                  <div className="col text-center mt-3">
                    <Button onClick={() => handlePurchase(p?.id)} className="btn btn-primary">
                      <i className="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-cart-shopping" />
                      Purchase
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
        }
      </Row>


    </div>
  );
};

export default MyPlan;