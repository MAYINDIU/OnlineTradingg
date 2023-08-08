import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import swal from "sweetalert";

const Register = () => {
  const { providerLogin, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || "/";

  const loginAlert = () => {
    swal({
      title: "You are successfully Login",
      icon: "success",
      button: "Done",
    });
  };

  const uploadUserInfoToDatabase = (user) => {
    const userName = user.displayName;
    const userEmail = user.email;
    const userPassword = "NA";
    const referalCode = "NA";
    const status = "1";

    const formdata = new FormData();
    formdata.append("name", userName);
    formdata.append("email", userEmail);
    formdata.append("password", userPassword);
    formdata.append("referal_code", referalCode);
    formdata.append("status", status);

    axios
      .post(
        "https://indian.munihaelectronics.com/public/api/create-user",
        formdata
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        window.localStorage.setItem("user-loggedIn", true);
        navigate(from, { replace: true });
        uploadUserInfoToDatabase(user);
        loginAlert();
        uploadUserInfoToDatabase();
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const referalCode = form.refferalCode.value || "NA";
    const status = "1";

    const formdata = new FormData();
    formdata.append("name", userName);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("referal_code", referalCode);
    formdata.append("status", status);

    axios
      .post(
        "https://indian.munihaelectronics.com/public/api/create-user",
        formdata
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .post("https://indian.munihaelectronics.com/public/api/login", formdata)
      .then((response) => {
        const user = response.data;
        setUser(user);
        window.localStorage.setItem("userInfo", JSON.stringify(user));
        console.log(response);
        if (response.data.status === "1") {
          window.localStorage.setItem("user-loggedIn", true);
          // Successful login
          navigate(from, { replace: true });
          loginAlert();
        } else if (response.data.status === "0") {
          console.error(error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Col lg="6" md="8" className="mt--7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-2">
            <div className="text-muted text-center mt-2 mb-4">
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/telegram.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Telegram</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                onClick={handleGoogleSignIn}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>

            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" name="name" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Refferal Code"
                    type="text"
                    name="refferalCode"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the <a href="#pablo">Privacy Policy</a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <div className="text-center">
                  <Button className="my-4 w-100" color="primary" type="submit">
                    CREATE AN ACCOUNT
                  </Button>
                </div>
              </div>
            </Form>

            <div>
              <Col className="text-center" xs="12">
                <small>If you already registered</small>
              </Col>
              <div className="text-center">
                <Link
                  className="text-primary text-decoration-none"
                  to={`/auth/login`}
                >
                  <Button className="my-2 w-100" color="default" type="submit">
                    LOG IN
                  </Button>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
