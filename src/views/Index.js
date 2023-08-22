import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  CardTitle,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import { useContext } from "react";
import { AuthContext } from "Context/AuthProvider";

import Header from "components/Headers/Header.js";
import { Link } from "react-router-dom";

const Index = (props) => {
  const { user } = useContext(AuthContext);
  const wallet = user?.wallet;
  // console.log(wallet);

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [transactioninfo, setTransactioninfo] = useState([]);
  const [activeplan, setactiveplan] = useState('');

  //Fetch total active plan
  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/total_plan/${user?.id}`)
      .then((res) => res.json())
      .then((data) => setactiveplan(data));

  }, []);
  // Fetch for transiction 
  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_usertransaction/${user?.id}`)
      .then((res) => res.json())
      .then((data) => setTransactioninfo(data));

  }, []);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      {/* <Header /> */}
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <h2 class="text-white">Your Account Summary</h2>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="4">
                <Card className="card-stats bg mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          Wallet balance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          INR {wallet}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-solid fa-sack-dollar" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          Total Profit
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">INR 0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-solid fa-coins" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          TOTAL WITHDRAW
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">INR 0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-solid fa-gift" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mt-3" lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          Trading Accounts
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">INR 0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-regular fa-address-card" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mt-3" lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          Referral Bonus
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">INR 0</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-solid fa-gifts" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col className="mt-3" lg="6" xl="4">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h4"
                          className="text-uppercase text-primary mb-0"
                        >
                          Total Deposit
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          INR {wallet}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                          <i className="fa-solid fa-circle-arrow-down" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col lg="12" xl="12" className=" mb-5 mt-3">
            <Card className="card-stats   mb-4 mb-xl-0 ">
              <CardBody>
                <h2>Your Active Trades ({activeplan?.activePlan})</h2>
                <Row>
                  <div className="col text-center">
                    <p>
                      You do not have an active investment plan at the moment.
                    </p>

                    <div className="text-center">
                      <Link to={`/user/chooseplan`}>
                        <Button className="my-4" color="primary" type="button">
                          Click for Buy a new Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 mb-3 ">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Deposit History ({transactioninfo.length < 5 ? transactioninfo.length : '5'})</h3>
                  </div>
                  <div className="col text-right">
                    <Link to='/user/transactions/deposit'>
                      <Button
                        color="primary"
                        href="#pablo"
                        size="sm"
                      >
                        See all
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <Table className="" hover bordered responsive>
                <thead className="text-white bg-gradient-info">
                  <tr>
                    <th className="text-center">Sl No</th>
                    <th className="text-center">Amount</th>
                    {/* <th>Transiction Type</th> */}
                    <th className="text-center">Method Type</th>
                    <th className="text-center">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {transactioninfo.slice(-5).map((tnx, index) => (
                    tnx.tnx_type === "DR" ? (
                      <tr key={index}>
                        <th className="text-center" scope="row">
                          {index + 1}
                        </th>
                        <td className="text-center">{tnx?.amount}</td>
                        {/* <td className="text-center">{tnx?.tnx_type}</td> */}
                        <td className="text-center">{tnx?.method_type}</td>
                        <td className="text-center">{tnx?.description}</td>
                      </tr>
                    ) : null
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
