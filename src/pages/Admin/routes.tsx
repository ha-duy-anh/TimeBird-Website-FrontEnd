import { Routes, Route } from "react-router-dom"
import CourseManagement from './ManageCourses/ManageCourses'

const student = () => {
  return (
    <Routes>
        <Route path='/' element={
            <CourseManagement />
        }/>
    </Routes>
  )
}

export default student