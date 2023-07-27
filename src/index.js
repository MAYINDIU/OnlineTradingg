import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import AuthProvider from "Context/AuthProvider";
import User from "layouts/User";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/user/*" element={<User />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="*" element={<Navigate to="/user/index" replace />} />
        </Routes>
      </BrowserRouter >
    </AuthProvider>
  </>



);
