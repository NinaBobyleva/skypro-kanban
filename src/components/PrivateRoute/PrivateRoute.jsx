import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";

export function PrivateRoute({ user}) {
    return user ? <Outlet/> : <Navigate to={paths.LOGIN} />;
}