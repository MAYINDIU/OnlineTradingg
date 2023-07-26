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
import TradingPlan from "views/examples/TradingPlan/TradingPlan";
import MyPlan from "views/examples/MyPlan/MyPlan";
import AllUser from "views/examples/AllUser";
import AddPackage from "views/examples/Package/AddPackage";
import PackageList from "views/examples/Package/PackageList";
import UpdatePackages from "views/examples/Package/UpdatePackages";
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
,
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
    path: "/addpackage",
    name: "Add Package",
    icon: "ni ni-key-25 text-info",
    component: <AddPackage />,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: <Register />,
    layout: "/auth",
  },
  {
    path: "/alluser",
    name: "All User",
    icon: "ni ni-circle-08 text-pink",
    component: <AllUser />,
    layout: "/admin"
  },
  {
    path: "/packages",
    name: "Package List",
    icon: "ni ni-circle-08 text-pink",
    component: <PackageList />,
    layout: "/admin"
  },
  {
    path: "/updatepackages/:id",
    name: "Update Packages",
    icon: "ni ni-circle-08 text-pink",
    component: <UpdatePackages />,
    layout: "/admin"
  },
];
export default routes;
