import { Navigate } from "react-router-dom"

interface RouteGuardProp {
    user : string|undefined,
    requiredRole: string
    children: JSX.Element
}

const protectedRoute = (prop : RouteGuardProp) => {
    if (!prop.user || prop.user != prop.requiredRole) {
        return <Navigate to="/" replace />;
    }
  
    return prop.children;
}

export default protectedRoute