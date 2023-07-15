import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CourseRegis from './pages/CourseRegis/App.tsx'
import Dashboard from './pages/Dashboard/App.tsx'
import Login from './pages/Login/Login.tsx'
import Admin_Courses from './pages/ManageCourses/ManageCourses.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/course-registration" element={<CourseRegis/>}/>
          <Route path='/admin-courses' element={<Admin_Courses/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
