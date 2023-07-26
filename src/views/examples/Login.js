// reactstrap components
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

import { GoogleAuthProvider } from "firebase/auth";

import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const { providerLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();


  const from = location.state?.from?.pathname || '/'

  const loginAlert = () => {
    swal({
      // title: "Congratulations",
      title: "You are successfully Login",
      // text: `You are successfully Login`,
      icon: "success",
      button: "Done",
    });
  }

  const uploadUserInfoToDatabase = (user) => {

    const userName = user.displayName;
    const userEmail = user.email;
    const userPassword = 'NA';
    const referalCode = 'NA';
    const status = '1';

    const formdata = new FormData();
    formdata.append('name', userName);
    formdata.append('email', userEmail);
    formdata.append('password', userPassword);
    formdata.append('referal_code', referalCode);
    formdata.append('status', status);

    axios.post('https://indian.munihaelectronics.com/public/api/create-user', formdata)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        uploadUserInfoToDatabase(user);
        loginAlert();

      })
      .catch(error => console.error(error))
  }



  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
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
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4 " color="primary" type="button">
                  Log in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
