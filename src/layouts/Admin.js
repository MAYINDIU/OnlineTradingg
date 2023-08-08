import React, { useContext } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Adminsidebar from "components/Sidebar/Adminsidebar";
import adminroutes from "views/adminroutes";
import { AuthContext } from "Context/AuthProvider";
import Manageuser from "views/examples/Manageuser";
const Admin = (props) => {
  const { user } = useContext(AuthContext);
  const mainContent = React.useRef(null);
  const location = useLocation();
  const isLoggedIn = window.localStorage.getItem('user-loggedIn')
  const isAdminLoggedIn = window.localStorage.getItem('admin-loggedIn')


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (adminroutes) => {
    return adminroutes.map((prop, key) => {
      // if (!user) {
      //   return <Route path="*" element={<Navigate to="/auth/login" state={{ from: location }} replace />} />;
      // }
      if (isLoggedIn) {
        return <Route path="*" element={<Navigate to="/user/index" state={{ from: location }} replace />} />;
      }
      if (!isAdminLoggedIn) {
        return <Route path="*" element={<Navigate to="/auth/login" state={{ from: location }} replace />} />;
      }
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      }
      else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < adminroutes.length; i++) {
      if (
        props?.location?.pathname.indexOf(adminroutes[i].layout + adminroutes[i].path) !==
        -1
      ) {
        return adminroutes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Adminsidebar
        {...props}
        adminroutes={adminroutes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("../assets/img/brand/trading.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(adminroutes)}

          <Route path="*" element={<Navigate to="/admin/index" replace />} />
          <Route path="user/:id" element={<Manageuser />}>
          </Route>
        </Routes>
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div >
    </>
  );
};

export default Admin;
