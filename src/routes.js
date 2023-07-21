import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Dark from "views/examples/Dark.js";
import Deposit from "views/examples/Deposit";
import Withdraw from "views/examples/Withdraw";
var routes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/deposit",
    name: "Deposit",
    icon: "fa-solid fa-circle-down text-blue",
    component: <Deposit />,
    layout: "/admin",
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    icon: "fa-solid fa-circle-arrow-up text-primary",
    component: <Withdraw />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/dark",
    name: "Dark",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Dark />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
];
export default routes;
