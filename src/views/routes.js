import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Deposit from "views/examples/Deposit";
import Withdraw from "views/examples/Withdraw";
import Transactions from "views/examples/Transactions";
import TradingPlan from "views/examples/TradingPlan/TradingPlan";
import MyPlan from "views/examples/MyPlan/MyPlan";
import AllUser from "views/examples/AllUser";
import AddPackage from "views/examples/Package/AddPackage";

var routes = [

  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Index />,
    layout: "/user",
  },
  {
    path: "/deposit",
    name: "Deposit",
    icon: "fa-solid fa-circle-down text-blue",
    component: <Deposit />,
    layout: "/user",
  },
  {
    path: "/withdraw",
    name: "Withdraw",
    icon: "fa-solid fa-circle-arrow-up text-primary",
    component: <Withdraw />,
    layout: "/user",
  },

  {
    path: "/transactions",
    name: "Transactions",
    icon: "fa-solid fa-money-bill-transfer text-primary",
    component: <Transactions />,
    layout: "/user",

    subMenu: [
      {
        title: 'Users',
        path: '/transactions/users',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/transactions/revenue',
        // icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "fa-solid fa-user text-primary",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/tradingplan",
    name: "Trading Plan",
    icon: "fa-solid fa-spa text-primary",
    component: <TradingPlan />,
    layout: "/user",
  },
  {
    path: "/myplan",
    name: "My Plan",
    icon: "fa-solid fa-hand-holding-heart text-primary",
    component: <MyPlan />,
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
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register",
    component: <Register />,
    layout: "/auth",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/user",
  // },
  {
    path: "/login",
    component: <Login />,
    layout: "/auth",
  },

];
export default routes;
