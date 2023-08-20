import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

const Transactions = () => {
  return (
    <div>
      <Container
        fluid
        className="container-fluid header bg-gradient-info pb-5 pt-5 pt-md-8"
      >
        <h2 className="text-white font-weight-bold">Transaction Records </h2>

      </Container>

      <Container fluid className="mt--7 mb-7">
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default Transactions;
