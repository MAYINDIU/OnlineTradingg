import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Dark from "views/examples/Dark.js";
import Deposit from "views/examples/Deposit";
import Withdraw from "views/examples/Withdraw";
import Transactions from "views/examples/Transactions";
import MyPlan from "views/examples/MyPlan/MyPlan";
import TradingPlan from "views/examples/TradingPlan/TradingPlan";
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
    icon: "ni ni-tv-2 text-primary",
    component: <Deposit />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },

  {
    path: "/transactions",
    name: "Transactions",
    icon: "fa-solid fa-money-bill-transfer text-primary",
    component: <Transactions />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "fa-solid fa-user text-primary",
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
    path: "/tradingplan",
    name: "Trading Plan",
    icon: "fa-solid fa-spa text-primary",
    component: <TradingPlan />,
    layout: "/admin",
  },
  {
    path: "/myplan",
    name: "My Plan",
    icon: "fa-solid fa-hand-holding-heart text-primary",
    component: <MyPlan />,
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
