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
import PlanDetails from "./examples/MyPlan/PlanDetails";
import Tradehistory from "./examples/TradeHistory/Tradehistory";
var routes = [
  
  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Index />,
    layout: "/user",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "fa-solid fa-user text-primary",
    component: <Profile />,
    layout: "/user",
  },
  {
    path: "/trade-history",
    name: "Trade History",
    icon: "fa-solid fa-user text-primary",
    component: <Tradehistory />,
    layout: "/user",
  },
  // {
  //   path: "/tradingplan",
  //   name: "Trading Plan",
  //   icon: "fa-solid fa-spa text-primary",
  //   component: <TradingPlan />,
  //   layout: "/user",
  // },
  {
    path: "/myplan",
    name: "My Plan",
    icon: "fa-solid fa-hand-holding-heart text-primary",
    component: <MyPlan />,
    layout: "/user",
  },
  

  {
    // path: "/myplan",
    name: "Finance",
    icon: "fa-solid fa-money-bill-wheat text-primary",
    // component: <MyPlan />,
    layout: "/user",

    subMenu: [
      {
        name: 'Deposit',
        path: "/user/deposit",
        icon: "fa-solid fa-circle-down text-primary",
      },
      {
        name: 'Withdraw',
        path: "/user/withdraw",
        icon: "fa-solid fa-circle-arrow-up text-primary"
      },
      {
        name: 'Transaction history',
        path: "/user/transactions",
        icon: "fa-solid fa-circle-info text-primary",
      }
    ]
  },

  {
    // path: "/myplan",
    name: "Investment Funding",
    icon: "fa-solid fa-money-bill-trend-up text-primary",
    // component: <MyPlan />,
    layout: "/user",

    subMenu: [
      {
        name: 'Choose Plan',
        path: "/user/myplan",
        icon: "fa-solid fa-square-check text-primary",
      },
      {
        name: 'Upgrade Plan',
        path: "/user/myplan",
        icon: "fa-solid fa-square-pen text-primary"
      },
      {
        name: 'Plan details',
        path: "/user/myplan",
        icon: "fa-solid fa-circle-info text-primary",
      }
    ]
  },
  {
    path: "/plandetails/:id",
    component: <PlanDetails />,
    layout: "/user",
  },
  {
    path: "/register",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/deposit",
    // name: "Deposit",
    // icon: "fa-solid fa-circle-down text-blue",
    component: <Deposit />,
    layout: "/user",
  },
  {
    path: "/withdraw",
    // name: "Withdraw",
    // icon: "fa-solid fa-circle-arrow-up text-primary",
    component: <Withdraw />,
    layout: "/user",
  },
  {
    path: "/transactions",
    // name: "Transactions",
    // icon: "fa-solid fa-money-bill-transfer text-primary",
    component: <Transactions />,
    layout: "/user",
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
