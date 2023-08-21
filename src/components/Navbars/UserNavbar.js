import { AuthContext } from "Context/AuthProvider";
import axios from "axios";
import useAlluser from "components/CustomHook/useAlluser";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
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
  // const [user] = useAlluser()
  const { user, logOut } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({})
  // console.log(userInfo)

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/auth/login'

  const handleSignOut = () => {
    logOut().then(() => {
      navigate(from, { replace: true });
      localStorage.removeItem("token");
    }).catch((error) => {

    });
  }
  const [notifications, setNotifications] = useState([]);


  useEffect(() => {
    const url = `https://indian.munihaelectronics.com/public/api/SingleUser/${user?.id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);


  useEffect(() => {
    fetch(`https://indian.munihaelectronics.com/public/api/show_userNotification/${user.id}`)
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  const handleStatusChange = async (id) => {
    try {
      const response = await axios.post(`https://indian.munihaelectronics.com/public/api/update_notificationstatus/${id}`, {
        // user_status: 'read'
      });
      console.log(response.data);
      // setUpdate(!update)
    } catch (error) {
      console.error(error);
    }

  }

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

          <UncontrolledDropdown nav>
            <DropdownToggle className="px-0" nav>
              <Media className="icon icon-shape bg-primary text-white rounded-circle shadow-xl">
                <i class="fa-solid fa-bell "></i>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title border-bottom" header tag="div">
                <h5 className="m-0 ">Notification</h5>
              </DropdownItem>

              {
                notifications.slice(0, 5).map((n, i) => (
                  <DropdownItem className={n.user_status === 'unread' ? 'bg-gray border-bottom' : 'border-bottom'} >
                    <span onClick={() => handleStatusChange(n.id)} >{n.text}</span>
                  </DropdownItem>

                ))
              }
              <Link to='/user/notification'>
                <DropdownItem className='text-center m-0' tag="div">
                  <span >See All Notification</span>
                </DropdownItem>
              </Link>
            </DropdownMenu>
          </UncontrolledDropdown>

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
                        {user?.name} (INR {user?.wallet})

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