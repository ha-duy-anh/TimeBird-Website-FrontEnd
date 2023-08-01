import Login from '../pages/Login/Login'
import { Navigate, useNavigate } from "react-router-dom"

interface RouteGuardProp {
    user : string|undefined,
    children: JSX.Element
}

const protectedRoute = (prop : RouteGuardProp) => {
    if (!prop.user) {
        const nav = useNavigate()
        nav("/")
        return
    }
  
    return prop.children;
}

export default protectedRoute