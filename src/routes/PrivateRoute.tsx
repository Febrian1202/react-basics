import { Navigate } from "react-router";


const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
        return <Navigate to="/rhf" replace />;
    }

    return <>{children}</>;
}


export default PrivateRoute
