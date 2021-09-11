import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";

import AppBar from "./Components/AppBar/AppBar";
import PrivateRoute from "./PrivateRoute";
import ContactsView from "./Views/ContactsView";
import PublicRoute from "./PublicRoute";
import LoginView from "./Views/LoginView";
import RegisterView from "./Views/RegisterView";

import { currentUser } from "./redax/auth/auth-operations";

// import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  currentUser();
  return (
    <div>
      <AppBar />
      <Switch>
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
        <PublicRoute path="/login" restricted>
          <LoginView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <Route path="/">
          {!isLoggedIn ? <Redirect to="/login" /> : <Redirect to="/contacts" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
