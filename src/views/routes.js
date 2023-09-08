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
import Request from "./examples/CashFree/Request";
import Tradehistory from "./examples/TradeHistory/Tradehistory";
import PaymentSuccessComponent from "./examples/PaymentSuccessComponent/PaymentSuccessComponent";
import ChosePlan from "./examples/MyPlan/ChosePlan";
import Myinvestmentlist from "./examples/InvestmentList/Myinvestmentlist";
import UserNotifications from "./examples/Notification/UserNotifications";
import ReferCode from "./examples/ReferCode";
import CreateTicket from "./examples/Support/CreateTicket";
import TicketHistory from "./examples/Support/TicketHistory";
import ViewTicket from "./examples/Support/ViewTicket";
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
    path: "/my_investment",
    name: "My Investment",
    icon: "fa-solid fa-hand-holding-heart text-primary",
    component: <Myinvestmentlist />,
    layout: "/user",
  },

  {
    path: "/notification",
    name: "Notifications",
    icon: "fa-solid fa-bell text-primary",
    component: <UserNotifications />,
    layout: "/user"
  },

  {

    name: "Finance",
    icon: "fa-solid fa-money-bill-wheat text-primary",
    layout: "/user",

    subMenu: [
      {
        name: 'Deposit',
        path: "/user/deposit",
        icon: "fa-solid fa-circle-down text-primary",
      },
      // {
      //   name: 'Withdraw',
      //   path: "/user/withdraw",
      //   icon: "fa-solid fa-circle-arrow-up text-primary"
      // },
      {
        name: 'Transaction history',
        path: "/user/transactions/deposit",
        icon: "fa-solid fa-circle-info text-primary",
      }
    ]
  },

  {

    name: "Investment Funding",
    icon: "fa-solid fa-money-bill-trend-up text-primary",
    layout: "/user",

    subMenu: [
      {
        name: "Choose Plan",
        path: "/user/chooseplan",
        icon: "fa-solid fa-square-check text-primary",
        // component: <ChosePlan/>,
      },
      {
        name: 'Upgrade Plan',
        // path: "/user/myplan",
        icon: "fa-solid fa-square-pen text-primary"
      },
      
    ]
  },
  {
    path: "/refercode",
    name: "Referal code",
    icon: "fa-solid fa-hand-holding-hand text-primary",
    component: <ReferCode />,
    layout: "/user",
  },
  {

    name: "Support",
    icon: "fa-solid fa-phone text-primary",
    layout: "/user",

    subMenu: [
      {
        name: "Create Support Ticket",
        path: "/user/create-ticket",
        icon: "fa-solid fa-square-check text-primary",
      },
      {
        name: 'Support Ticket History',
        path: "/user/ticket-history",
        icon: "fa-solid fa-square-pen text-primary"
      },
      
    ]
  },

  {
    path: "/plandetails/:id",
    component: <PlanDetails />,
    layout: "/user",
  },
  {
    path: "/paymentmethod",
    component: <Request />,
    layout: "/user",
  },
  {
    path: "/paymentsuccess",
    component: <PaymentSuccessComponent />,
    layout: "/user",
  },
  {
    path: "/register",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/register/:refer_code",
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
    path: "/chooseplan",
    // name: 'Choose Plan',
    // icon: "fa-solid fa-square-check text-primary",
    component: <ChosePlan />,
    layout: "/user",
  },
  {
    path: "/create-ticket",
    component: <CreateTicket />,
    layout: "/user",
  },
  {
    path: "/ticket-history",
    component: <TicketHistory />,
    layout: "/user",
  },
  {
    path: "/transactions",
    component: <Transactions />,
    layout: "/user",
  },
  {
    path: "/viewticket/:id",
    component: <ViewTicket />,
    layout: "/user",
  },
 
  
  {
    path: "/login",
    component: <Login />,
    layout: "/auth",
  },
];
export default routes;
