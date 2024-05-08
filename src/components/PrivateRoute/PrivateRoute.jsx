import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";

export function PrivateRoute({ isAuth }) {
    return isAuth ? <Outlet/> : <Navigate to={paths.LOGIN} />;
}