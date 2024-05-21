import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../paths";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export function PrivateRoute() {

    const {user} = useContext(UserContext);

    return user ? <Outlet/> : <Navigate to={paths.LOGIN} />;
}