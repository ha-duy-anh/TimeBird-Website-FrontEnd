import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import Header from "components/Header/index.tsx"
import SideNavBar from "components/SideNav/index.tsx"
import Footer from 'components/Footer/index.tsx'

import CourseRegis from './CourseRegis/index.tsx'
import Dashboard from './Dashboard/index.tsx'

const student = (props : InfoProp) => {
  let location = useLocation()
  let [pageTitle, setPageTitle] = useState("")
  let [currentPage, setCurrentPage] = useState(0)
  
  useEffect(() => {
    if (location.pathname == '/student') {
      setPageTitle('Dashboard')
      setCurrentPage(0)
    }
    else if (location.pathname == '/student/course-registration') {
      setPageTitle('Course Registration')
      setCurrentPage(2)
    }
  }, [location])

  return (
    <div className="relative pt-[82px] pl-[270px] h-full min-h-[100vh]">
      <SideNavBar role="student" currentPage={currentPage} />
      <Header username={props.username} page_title={pageTitle} />
      <Routes>
          <Route path='/' element={
              <Dashboard />
          }/>

          <Route path='/course-registration' element={
              <CourseRegis />
          }/>
      </Routes>
      <Footer />
    </div>
  )
}

type InfoProp = {
  username : string
}

export default student