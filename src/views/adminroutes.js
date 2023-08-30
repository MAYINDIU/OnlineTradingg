import AllUser from "views/examples/AllUser";
import AddPackage from "views/examples/Package/AddPackage";
import PackageList from "views/examples/Package/PackageList";
import UpdatePackages from "views/examples/Package/UpdatePackages";
import Adminindex from "views/examples/Adminindex";
import Purchaselist from "./examples/Purchase/Purchaselist";
import All_transactions from "./examples/Transactions/All_transactions";
import Adminnotification from "./examples/Notification/Adminnotification";
import Tradehistory from "./examples/TradeHistory/Tradehistory";
import Investmentlist from "./examples/InvestmentList/Investmentlist";
import AdminLevelSetting from "./examples/AdminLevelSetting/AdminLevelSetting";
import UpdateLevelSetting from "./examples/AdminLevelSetting/UpdateLevelSetting";
import CreateUser from "./examples/User-Information/CreateUser";
import AddPermission from "./examples/All Permissiom/AddPermission";
import AddRole from "./examples/All Permissiom/AddRole";
import UpdatePermission from "./examples/All Permissiom/UpdatePermission";
import PermissionRoleWise from "./examples/All Permissiom/PermissionRoleWise";
import PermissionTable from "./examples/All Permissiom/PermissionTable";
var adminroutes = [
  {
    path: "/index",
    name: "Home",
    icon: "fa-solid fa-house text-primary",
    component: <Adminindex />,
    layout: "/admin",
  },
  {
    name: "User Information",
    icon: "fa-solid fa-users text-primary",
    layout: "/admin",
    subMenu: [
      {
        name: 'All User',
        path: '/admin/alluser',
        icon:  "fa-solid fa-list text-primary",
      },
      {
        name: 'Create User',
        path: '/admin/create-user',
        icon: "fa-solid fa-user-plus text-blue",
      }
    ]
  },
  {
    // path: "/addpackage",
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
  {
   
    name: "All Permissiom",
    icon: "fa-solid fa-warehouse text-primary",

    subMenu: [
      {
        name: 'Add Permission',
        path: '/admin/addpermission',
        icon: "fa-solid fa-box-open text-blue",
      },
      {
        name: 'Add Role',
        path: '/admin/addrole',
        icon: "fa-solid fa-box-open text-blue",
      },
      {
        name: 'Permission Role Wise',
        path: '/admin/permissionrolewise',
        icon: "fa-solid fa-box-open text-blue",
      },
      {
        name: 'Permission Table',
        path: '/admin/permissiontable',
        icon: "fa-solid fa-box-open text-blue",
      },
     
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
    path: "/trade-history",
    name: "Trade History",
    icon: "fa-solid fa-notes-medical text-primary",
    component: <Tradehistory />,
    layout: "/admin",
  },
  {
    path: "/investment_list",
    name: "Flat Investment List",
    icon: "fa-solid fa-user text-primary",
    component: <Investmentlist />,
    layout: "/admin",
  },
  {
    path: "/AdminLevelSetting",
    name: "Admin Level Setting",
    icon: "fa-solid fa-list-check text-primary",
    component: <AdminLevelSetting />,
    layout: "/admin"
  },
  {
    path: "/updateadminevel/:id",
    component: <UpdateLevelSetting />,
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
  {
    path: "/alluser",
    // name: "Package List",
    // icon: "fa-solid fa-list text-primary",
    component: <AllUser />,
    layout: "/admin"
  },
  {
    path: "/create-user",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <CreateUser />,
    layout: "/admin"
  },
  {
    path: "/addpermission",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <AddPermission />,
    layout: "/admin"
  },
  {
    path: "/updatepermission/:id",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <UpdatePermission />,
    layout: "/admin"
  },
  {
    path: "/addrole",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <AddRole />,
    layout: "/admin"
  },
  {
    path: "/permissionrolewise",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <PermissionRoleWise />,
    layout: "/admin"
  },
  {
    path: "/permissiontable",
    // name: "Package List",
    // icon: "fa-solid fa-user-plus text-primary",
    component: <PermissionTable />,
    layout: "/admin"
  },



];
export default adminroutes;
