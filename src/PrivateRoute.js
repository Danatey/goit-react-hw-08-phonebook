import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};

export default PrivateRoute;
