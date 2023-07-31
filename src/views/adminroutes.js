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
import PackageList from "views/examples/Package/PackageList";
import UpdatePackages from "views/examples/Package/UpdatePackages";
import Adminindex from "views/examples/Adminindex";
import Purchaselist from "./examples/Purchase/Purchaselist";
import ManageUser from "./examples/User/ManageUser";
var adminroutes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Adminindex />,
    layout: "/admin",
  },
  {
    path: "/addpackage",
    name: "Add Package",
    icon: "fa-solid fa-box-open text-primary",
    component: <AddPackage />,
    layout: "/admin",
  },
  {
    path: "/alluser",
    name: "All User",
    icon: "fa-solid fa-users text-primary",
    component: <AllUser />,
    layout: "/admin"
  },
  // {
  //   path: "/user/:id",
  //   component: <ManageUser />,
  //   layout: "/admin"
  // },

  {
    path: "/packages",
    name: "Package List",
    icon: "fa-solid fa-list text-primary",
    component: <PackageList />,
    layout: "/admin"
  },
  {
    path: "/purchaselist",
    name: "Purchase list",
    icon: "fa-solid fa-cart-shopping text-primary",
    component: <Purchaselist />,
    layout: "/admin"
  },
  {
    path: "/updatepackages/:id",
    component: <UpdatePackages />,
    layout: "/admin"
  },


];
export default adminroutes;
