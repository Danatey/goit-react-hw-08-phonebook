import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  redirectTo = "/",
  children,
  restricted = false,
  ...routeProps
}) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

export default PublicRoute;
