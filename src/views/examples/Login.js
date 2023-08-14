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
import { useContext, useState,useEffect } from "react";
import swal from "sweetalert";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const { providerLogin, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  // const [myfx, setMyfx] = useState(['']);
  // const [myfxSingleAcData, setmyfxSingleAcData] = useState(['']);
  // console.log(myfxSingleAcData);
  // const Session=myfx?.session;
  // console.log(Session);

  const from = location.state?.from?.pathname || '/'

  const loginAlert = () => {
    swal({
      title: "You are successfully Login",
      icon: "success",
      button: "Done",
    });
  }
  //session fetching
//   const email ='tanmoysom@gmail.com';
//   const password ='973257o425@MFXB';
//   useEffect(() => {
//     fetch(`https://www.myfxbook.com/api/login.json?email=${email}&password=${password}`)
//       .then((res) => res.json())
//       .then((data) => setMyfx(data));
//   }, []);
//    //session fetching
//  //https://www.myfxbook.com/api/get-history.json?session=DSL07vu14QxHWErTIAFrH40&id=12345
//   //individual data fetch id wise
//   useEffect(() => {
//     fetch(`https://www.myfxbook.com/api/get-history.json?session=${Session}&id=10125757`)
//       .then((res) => res.json())
//       .then((data) => setmyfxSingleAcData(data));
//   }, []);



  const [sessionToken, setSessionToken] = useState('');
  const [historyData, setHistoryData] = useState(null);
  // console.log(historyData);

  // Login API parameters
  const email ='tanmoysom@gmail.com';
  const password ='973257o425@MFXB';
  const loginApiUrl = `https://www.myfxbook.com/api/login.json?email=${email}&password=${password}`;

  // Second API parameters
  const accountId = 10125757;
  const historyApiUrl = `https://www.myfxbook.com/api/get-history.json?session=${sessionToken}&id=${accountId}`;

  useEffect(() => {
    fetchSessionToken();
  }, []);

  const fetchSessionToken = async () => {
    try {
      const response = await fetch(loginApiUrl);
      const jsonData = await response.json();
      setSessionToken(jsonData.session);
    } catch (error) {
      console.error('Error fetching session token:', error);
    }
  };

  const fetchHistoryData = async () => {
    try {
      const response = await axios.get(historyApiUrl);
      setHistoryData(response.data);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  fetchHistoryData();




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
        const user = response.data;
        console.log(user?.id)
        setUser(user);
        
        window.localStorage.setItem('userInfo', user.id)
        // window.localStorage.setItem('session', Session)
        console.log(response);
        // console.log(response.data);
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
        window.localStorage.setItem('user-loggedIn', true)
        // window.localStorage.setItem('userInfo', user.id)
        loginAlert();

      })
      .catch(error => console.error(error))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value
    const password = form.password.value

    const formdata = new FormData();
    formdata.append('email', email);
    formdata.append('password', password);

    axios.post('https://indian.munihaelectronics.com/public/api/login', formdata)
      .then((response) => {
        // window.localStorage.setItem('user-loggedIn', true)
        const user = response.data;
        console.log(user)
        setUser(user);
        window.localStorage.setItem('userInfo', JSON.stringify(user))
        
        console.log(response);
        if (email === "admin@gmail.com" && password === '123456') {
          navigate("/admin/index");
          window.localStorage.setItem('admin-loggedIn', true)
        }
        else if (response.data.status === '1') {
          window.localStorage.setItem('user-loggedIn', true)
          // Successful login
          navigate(from, { replace: true });
          // <Navigate to={'/admin/index'} state={{ from: location }} replace />
          loginAlert();
        } else if (response.data.status === '0') {
          console.error(error);
          setError('You account is Deactive')
        }

      })
      .catch((error) => {
        console.error(error);
        setError('Email or Password is wrong, Please Enter Correct email or password !')
      });


  }

  return (
    <>
      <Col lg="5" md="7" className='mt--7'>
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
            <Form role="form" onSubmit={handleSubmit}>
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
                    name='email'
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
                    name='password'
                  />
                </InputGroup>
              </FormGroup>
              <p className='text-danger'>{error}</p>
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
                <Button className="my-4 w-100" color="primary" type="submit">
                  LOG IN
                </Button>
              </div>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-blue"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <Link className='text-primary text-decoration-none' to={`/auth/register`}>
                    <small>Create new account</small>
                  </Link>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>

      </Col>
    </>
  );
};

export default Login;