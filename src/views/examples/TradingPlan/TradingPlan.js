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
        <h2 className="text-white font-weight-bold">
          Fund Your{" "}
          <span className="text-white font-weight-bold">Account Balance</span>{" "}
        </h2>
      </div>

      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TradingPlan;
