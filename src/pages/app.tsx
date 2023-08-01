import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import RouteGuard from 'components/routeGuard.tsx'
import Login from './Login/Login.tsx'
import StudentRoute from './Student/routes.tsx'
import AdminRoute from './Admin/routes.tsx'

const app = () => {
    const [user, setUser] = useState<string>()

    //Try to verify and set user
    useEffect( () => {
        handleSetUser()
    }, [])

    const handleUnsetUser = () => {
        setUser(undefined)
    }

    const handleSetUser = () => {
        axios.get('http://localhost:3000/user/verifyUser')
        .then((response) => 
            response.data.text()
        ).then((data) => {
            setUser(data)
        }).catch(() => {
            setUser(undefined)
        })
    } 

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login unsetUser={handleUnsetUser} setUser={handleSetUser}/>}/>
            <Route path='/student' element={
                <RouteGuard user={user} requiredRole="student">
                    <StudentRoute />
                </RouteGuard>
            }/>
            <Route path='/admin' element={
                <RouteGuard user={user} requiredRole="admin">
                    <AdminRoute />
                </RouteGuard>
            }/>
        </Routes>
    </BrowserRouter>
  )
}

export default app