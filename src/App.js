import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loggedInInfo } from "./component/Login/loginManager";
import Header from "./component/Home/Header/Header";

import Login from "./component/Login/Login";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import DashboardLayout from "./Pages/DashboardLayout/DashboardLayout";
import PlaceOrder from "./component/Dashboard/PlaceOrder/PlaceOrder";
import NoOrderId from "./component/Dashboard/NoOrderId/NoOrderId";
import ClientServiceList from "./component/Dashboard/ClientServiceList/ClientServiceList";
import AddFeedback from "./component/Dashboard/AddFeedback/AddFeedback";
import AdminServiceList from "./component/Dashboard/AdminServiceList/AdminServiceList";
import AddService from "./component/Dashboard/AddService/AddService";
import AddAdmin from "./component/Dashboard/AddAdmin/AddAdmin";
import NoMatch from "./component/NoMatch/NoMatch";
// Context
export const UserContext = createContext();
export const AdminContext = createContext();
export const AdminContextTemp = createContext();

function App() {
  // Hook for Logged in user
  const [loggedInUser, SetLoggedInUser] = useState({});

  // Get logged in user info from Session
  const loggedInUserSession = loggedInInfo();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5055//isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUserSession.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUserSession.email]);

  // Get user info from when user click on sign in
  const [isAdminTemp, setIsAdminTemp] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5055//isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdminTemp(data));
  }, [loggedInUser.email]);

  return (
    <AdminContextTemp.Provider value={[isAdminTemp, setIsAdminTemp]}>
      <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
        <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Header />
              </Route>
              <Route exact path="/home">
                <Header />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/service/:_id">
                <DashboardLayout title="Order">
                  <PlaceOrder />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/order">
                <DashboardLayout title="Order">
                  <NoOrderId />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/service-lists">
                <DashboardLayout title="Services List">
                  <ClientServiceList />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/add-feedback">
                <DashboardLayout title="Reviews"></DashboardLayout>
                <AddFeedback />
              </PrivateRoute>
              <PrivateRoute exact path="/admin-service-lists">
                <DashboardLayout title="Services List">
                  <AdminServiceList />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/addService">
                <DashboardLayout title="Add Services">
                  <AddService />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/makeAdmin">
                <DashboardLayout title="Add Admin">
                  <AddAdmin />
                </DashboardLayout>
              </PrivateRoute>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </AdminContext.Provider>
    </AdminContextTemp.Provider>
  );
}

export default App;
