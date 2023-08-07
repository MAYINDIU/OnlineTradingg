
import { AuthContext } from "Context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const UserNavbar = (props) => {

  const { user, logOut } = useContext(AuthContext);
  const userId = window.localStorage.getItem('userInfo')

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/auth/login'

  const handleSignOut = () => {
    logOut().then(() => {
      navigate(from, { replace: true });
    }).catch((error) => {

    });
  }

  const [modal, setModal] = useState(false);

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_userNotification/${user.id}`)
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);


  const toggle = () => setModal(!modal);



  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>

          <div>
            <FaBell className="text-xl text-white" onClick={toggle}></FaBell>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader className='border-bottom' toggle={toggle}>Notifications</ModalHeader>
              <ModalBody >
                {
                  notifications.map((n, i) => (
                    <h5 className="">{n.text}</h5>
                  ))
                }


              </ModalBody>
              <ModalFooter className='border-top' >
                <Button color="secondary" className="text-center" >
                  See All Notification
                </Button>
              </ModalFooter>
            </Modal>
          </div>


          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">

                    {user?.photoURL ?
                      <img
                        alt="..."
                        src={user.photoURL}
                      />
                      : <img
                        alt="..."
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    }

                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    {user?.uid ?
                      <span className="mb-0 text-sm font-weight-bold">
                        {user.displayName}
                      </span>
                      : <span className="mb-0 text-sm font-weight-bold">
                        {user?.name}
                      </span>
                    }

                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/user/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/user/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/user/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/user/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={handleSignOut}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default UserNavbar;
