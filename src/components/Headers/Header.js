import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">

        <Container fluid>
          <h2 class='text-white'>Your Account Summary</h2>
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
                          Account balance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $350,897
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
                        <span className="h2 font-weight-bold mb-0">
                          $350,897
                        </span>
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
                          Bonus
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          $350,897
                        </span>
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
              <Col className='mt-3' lg="6" xl="4">
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
                        <span className="h2 font-weight-bold mb-0">
                          $3504
                        </span>
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
              <Col className='mt-3' lg="6" xl="4">
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
                        <span className="h2 font-weight-bold mb-0">
                          $350
                        </span>
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

              <Col className='mt-3' lg="6" xl="4">
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
                          $350
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
    </>
  );
};

export default Header;
