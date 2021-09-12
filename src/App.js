import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router";

import AppBar from "./Components/AppBar/AppBar";
import PrivateRoute from "./PrivateRoute";
import ContactsView from "./Views/ContactsView";
import PublicRoute from "./PublicRoute";
import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView";

import { currentUser } from "./redax/auth/auth-operations";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <div className="container">
      <AppBar />
      <Switch>
        <PrivateRoute path="/contacts">
          {!isLoggedIn ? <Redirect to="/login" /> : <ContactsView />}
        </PrivateRoute>
        <PublicRoute path="/login" restricted>
          <LoginView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <Route path="/" exact>
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
