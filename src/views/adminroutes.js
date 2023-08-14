import AllUser from "views/examples/AllUser";
import AddPackage from "views/examples/Package/AddPackage";
import PackageList from "views/examples/Package/PackageList";
import UpdatePackages from "views/examples/Package/UpdatePackages";
import Adminindex from "views/examples/Adminindex";
import Purchaselist from "./examples/Purchase/Purchaselist";
import All_transactions from "./examples/Transactions/All_transactions";
import Adminnotification from "./examples/Notification/Adminnotification";
var adminroutes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Adminindex />,
    layout: "/admin",
  },
  {
    path: "/alluser",
    name: "All User",
    icon: "fa-solid fa-users text-primary",
    component: <AllUser />,
    layout: "/admin",
  },
  {
    path: "/addpackage",
    name: "Investment Plans",
    icon: "fa-solid fa-warehouse text-primary",
    component: <AddPackage />,
    layout: "/admin",

    subMenu: [
      {
        name: 'Create Plan',
        path: '/admin/addpackage',
        icon: "fa-solid fa-box-open text-blue",
      },
      {
        name: 'Plan List',
        path: '/admin/packages',
        icon: "fa-solid fa-list text-primary",
      }
    ]
  },

  // {
  //   path: "/purchaselist",
  //   name: "Purchase list",
  //   icon: "fa-solid fa-cart-shopping text-primary",
  //   component: <Purchaselist />,
  //   layout: "/admin",
  // },
  {
    path: "/transactionlist",
    name: "Transaction list",
    icon: "fa-solid fa-money-bill-transfer text-primary",
    component: <All_transactions />,
    layout: "/admin"
  },
  {
    path: "/allnotification",
    name: "Notifications list",
    icon: "fa-solid fa-bell text-primary",
    component: <Adminnotification />,
    layout: "/admin"
  },

  {
    path: "/updatepackages/:id",
    component: <UpdatePackages />,
    layout: "/admin",
  },
  {
    path: "/addpackage",
    // name: "Add Package",
    // icon: "fa-solid fa-box-open text-primary",
    component: <AddPackage />,
    layout: "/admin",
  },
 
  {
    path: "/packages",
    // name: "Package List",
    // icon: "fa-solid fa-list text-primary",
    component: <PackageList />,
    layout: "/admin"
  },


];
export default adminroutes;
