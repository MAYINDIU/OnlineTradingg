import AllUser from "views/examples/AllUser";
import AddPackage from "views/examples/Package/AddPackage";
import PackageList from "views/examples/Package/PackageList";
import UpdatePackages from "views/examples/Package/UpdatePackages";
import Adminindex from "views/examples/Adminindex";
import Purchaselist from "./examples/Purchase/Purchaselist";
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
    layout: "/admin",
  },

  {
    path: "/packages",
    name: "Package List",
    icon: "fa-solid fa-list text-primary",
    component: <PackageList />,
    layout: "/admin",
  },
  {
    path: "/purchaselist",
    name: "Purchase list",
    icon: "fa-solid fa-cart-shopping text-primary",
    component: <Purchaselist />,
    layout: "/admin",
  },
  {
    path: "/updatepackages/:id",

    component: <UpdatePackages />,
    layout: "/admin",
  },
];
export default adminroutes;
