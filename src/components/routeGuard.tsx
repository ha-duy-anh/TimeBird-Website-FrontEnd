import { Navigate } from "react-router-dom"

interface RouteGuardProp {
    user : string|undefined,
    children: JSX.Element
}

const protectedRoute = (prop : RouteGuardProp) => {
    if (!prop.user) {
        return <Navigate to="/" replace />;
    }
  
    return prop.children;
}

export default protectedRoute