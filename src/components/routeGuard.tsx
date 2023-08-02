import { Navigate } from "react-router-dom"

type RouteGuardProp = {
    user : string|undefined,
    requiredRole: string
    children: JSX.Element
}

const protectedRoute = (prop : RouteGuardProp) => {
    if (!prop.user || prop.user.toLowerCase() != prop.requiredRole.toLowerCase()) {
        return <Navigate to="/" replace />;
    }
  
    return prop.children;
}

export default protectedRoute