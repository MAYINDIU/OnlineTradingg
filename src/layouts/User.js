import React, { useContext } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { AuthContext } from "Context/AuthProvider";
import DepositHistory from "views/examples/TransactionsHistory/DepositHistory";
import WithdrawalHistory from "views/examples/TransactionsHistory/WithdrawalHistory";
import OthersHistory from "views/examples/TransactionsHistory/OthersHistory";
import Transactions from "views/examples/Transactions";
import Adminsidebar from "components/Sidebar/Adminsidebar";
import UserNavbar from "components/Navbars/UserNavbar";
import routes from "views/routes";

const User = (props) => {
  const { user } = useContext(AuthContext);
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (!user) {
        return <Route path="*" element={<Navigate to="/auth/login" state={{ from: location }} replace />} />;
      }
      if (prop.layout === "/user") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/user/index",
          imgSrc: require("../assets/img/brand/argon-react.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <UserNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(routes)}

          <Route path="*" element={<Navigate to="/user/index" replace />} />
          <Route path="transactions" element={<Transactions />}>
            <Route path="deposit" element={<DepositHistory />} />
            <Route path="withdrawal" element={<WithdrawalHistory />} />
            <Route path="others" element={<OthersHistory />} />

          </Route>
        </Routes>
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div>
    </>
  );
};

export default User;
