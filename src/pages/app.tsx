import { BrowserRouter, Routes, Route } from "react-router-dom"
import CourseRegis from './CourseRegis/App.tsx'
import Dashboard from './Dashboard/App.tsx'
import Login from './Login/Login.tsx'
import Admin_Courses from './ManageCourses/ManageCourses.tsx'
import { useEffect, useState } from "react"
import axios from "axios"
import RouteGuard from '../components/routeGuard.tsx'

const app = () => {
    const [user, setUser] = useState<string>()

    //Try to verify and set user
    useEffect( () => {
        handleSetUser()
    }, [])

    const unsetUser = () => {
        setUser(undefined)
    }

    const handleSetUser = () => {
        axios.get('http://localhost:3000/user/verifyUser')
        .then((response) => 
            response.data.text()
        ).then((data) => {
            setUser(data)
        })
    } 

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={
                <RouteGuard user={user}>
                    <Dashboard />
                </RouteGuard>}/>
            <Route path="/course-registration" element={
                <RouteGuard user={user}>
                    <CourseRegis />
                </RouteGuard>}/>
            <Route path='/admin-courses' element={
                <RouteGuard user={user}>
                    <Admin_Courses />
                </RouteGuard>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default app