import React, { useState,useEffect } from 'react';
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

import Header from "components/Headers/Header.js";
import AdminHeader from "components/Headers/AdminHeader";

const Adminindex = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [transactioninfo, setTransactioninfo] = useState([]);


  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };


  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_transaction`)
      .then((res) => res.json())
      .then((data) => setTransactioninfo(data));
  }, []);


  return (
    <>
      <AdminHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>


      <Row className="mt-5 mb-3 ">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Recent Deposit History (5)</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      See all
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="" hover bordered responsive>
                <thead className="text-white bg-gradient-info">
               
                  <tr>
                    <th className="text-center" scope="col ">Sl No.</th>
                    <th className="text-center"  scope="col">Date</th>
                    <th className="text-center" scope="col">User ID</th>
                    <th className="text-center" scope="col">Amount</th>
                    <th className="text-center" scope="col">Tnx_Type</th>
                    <th className="text-center" scope="col">Method Type</th>
                  </tr>
                </thead>
                <tbody>
            {transactioninfo.map((tnx, index) => (
              <tr>
                <th className="text-center" scope="row">{index + 1}</th>
                <td className="text-center">{tnx?.created_at}</td>
                <td className="text-center">{tnx?.userid}</td>
                <td className="text-center">{tnx?.amount}</td>
                <td className="text-center">{tnx?.tnx_type}</td>
                <td className="text-center">{tnx?.method_type}</td>
              </tr>
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

export default Adminindex;
