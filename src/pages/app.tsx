import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import RouteGuard from 'components/routeGuard.tsx'
import Login from './Login/index.tsx'
import StudentRoute from './Student/routes.tsx'
import AdminRoute from './Admin/routes.tsx'
import { hanldeNav } from "utils/utils.ts"

const app = () => {
    const [user, setUser] = useState<string>()
    const [username, setUserName] = useState<string>("")

    const nav = useNavigate()
    const location = useLocation()
    
    //Try to verify and set user
    useEffect( () => {
        initialSetUser()
    }, [])

    const handleSetUser = (e : string) => {
        setUser(e?e:"")
    }

    const handleSetUsername = (e : string) => {
        setUserName(e?e:"")
    }

    const handleUnsetUser = () => {
        setUser(undefined)
    }

    const initialSetUser = () => {
        axios.get(
            'http://localhost:3000/user/verifyJWT',
            { withCredentials: true }
        ).then((response) => {
            setUser(response.data.role)
            setUserName(response.data.username)
            if (location.pathname == '/')
                hanldeNav(response.data.role, nav)
            else 
                nav(location.pathname)
        }).catch((err) => {
            console.log(err)
            setUser(undefined)
        })
    } 

    return (
        <Routes>
            <Route path='/' element={<Login unsetUser={handleUnsetUser} setUser={handleSetUser} setUsername={handleSetUsername}/>}/>
            <Route path='/student/*' element={
                <RouteGuard user={user} requiredRole="student">
                    <StudentRoute username={username} />
                </RouteGuard>
            }/>
            <Route path='/admin/*' element={
                <RouteGuard user={user} requiredRole="superadmin">
                    <AdminRoute />
                </RouteGuard>
            }/>
        </Routes>
    )
}

export default app