import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  CardText,
  CardSubtitle,
} from "reactstrap";
import { useContext } from "react";
import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
const MyPlan = () => {
  const { user } = useContext(AuthContext);

  const current = new Date();
  const purchase_dt = `${current.getDate()}/${current.getMonth() + 1
    }/${current.getFullYear()}`;
  // console.log(purchase_date);
  const buyalert = () => {
    swal({
      title: "Thank you for purchase package",
      icon: "success",
      button: "Done",
    });
  };

  const [activePackages, setActivePackages] = useState([])
  const a = activePackages.filter(v => v.plan_details);
  // console.log(a);
  const userid = user?.id;

  useEffect(() => {
    fetch(
      `https://indian.munihaelectronics.com/public/api/show_p_list/95`
    )
      .then((res) => res.json())
      .then((data) => setActivePackages(data));
  }, []);








  return (
    <div>
      <div className="container-fluid header bg-gradient-info pb-7 pt-5 pt-md-8">
        <h2 className="text-white mb-0">My Active Plan List</h2>
      </div>
      <Row className="container-fluid mt--7">
        {activePackages.map((p) => {
          const { plan_details } = p;

          return (
            <Col lg="4" xl="4" className="">
              <Card className="bg-default  shadow-lg  shadow-sm--hover card-lift--hover mt-5  mb-4 mb-xl-0 ">
                <CardBody>
                  {/* <div className="text-center">
                    <lavel className="text-white mb-3  w-50 rounded-1">
                      Technology Plan
                    </lavel>
                  </div> */}

                  <div className="mt-3 text-center">
                    <i className=" icon icon-shape bg-primary text-white rounded-circle shadow fa-solid fa-hand-holding-heart" />
                  </div>

                  <h4 className="text-white mt-3 text-center">
                    <span className="ml-1">{plan_details?.planName} </span>
                  </h4>
                  <h5 className="text-white mt-0 text-center">
                    <span className="ml-1">Plan Type: {plan_details?.planType} </span>
                  </h5>

                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">Profit Share: {plan_details?.profitShare}% </span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">Minimum Amount INR{plan_details?.min} </span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">Maximum Amount INR{plan_details?.max} </span>
                  </h5>
                  <h5 className="text-white mt-0 text-center">
                    <span className="ml-1">settelementTime: {plan_details?.settelementTime}  </span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">{plan_details?.locking_no} -{plan_details?.lockinPeriod}</span>
                  </h5>
                  <h5 className="text-white mt-3 text-center">
                    <span className="ml-1">compoundLevel: {plan_details?.compoundLevel} </span>
                  </h5>

                  <div className="col text-center mt-3">
                    {/* condition1 ? condition2 ? Expression1 : Expression2 : Expression3 */}
                    {/* {
                p?.status=="Active"? <Button className='w-50' disabled>Active</Button>: p?.status=="Upgrade"?<Button>Buy Now</Button>: p?.status!="Upgrade"?
                <Button onClick={() => handlePurchase(p?.id)}  className="btn btn-danger w-50  border-none">
                Upgrade </Button> :""
               
                } */}

                    {/* Commented By Al-amin  */}

                    {/* {
                p?.status=="Active"? <Button className='w-50 btn btn-danger text-white' disabled>Active</Button>: p?.status=="Pending"?<Button className='w-50 btn btn-danger text-white' disabled>  {p?.status}</Button>:
                <Button onClick={() => handlePurchase(p?.id)}  className="btn btn-info w-50  border-none">
                   {p?.status} </Button> 
                  
                } */}
                    <Link to={`/user/plandetails/${activePackages.status}`}>
                      <Button
                        className="w-50 btn btn-info text-white"

                      >
                        Activated
                      </Button>
                    </Link>

                    {/* {
                  <Button onClick={() => handlePurchase(p?.id)} className="btn btn-primary">
                    <i className="mr-2 bg-white text-primary rounded-circle shadow fa-solid fa-cart-shopping" />
                   {p?.status}
                  </Button> } */}
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MyPlan;
