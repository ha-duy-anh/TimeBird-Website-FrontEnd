import { Routes, Route } from "react-router-dom"
import CourseRegis from './CourseRegis/App.tsx'
import Dashboard from './Dashboard/App.tsx'

const student = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Dashboard />
        }/>

        <Route path='/course-registration' element={
            <CourseRegis />
        }/>
    </Routes>
  )
}

export default student