import { useState } from 'react'
import icEnrollChecked from '../../assets/🦆 icon _Checkbox Checked_.svg'
import icEnroll from '../../assets/Enrol Rec.svg'
import btnEnroll from '../../assets/btnEnroll.svg'

import './SideNavBar.css'
import './Header&Footer.css'
import './Body.css'
import Unit from '../../models/unit'
import SideNavBar from '../../components/SideNavBar'
import Header from '../../components/Header'

function App() {
  const [count, setCount] = useState(0)
  const unit1: Unit = {name: 'Advanced Web Development', 
  code: 'COS30002', 
  desc: `This subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.`}
  const unit2: Unit = {name: 'Advanced Web Development', 
  code: 'COS30002', 
  desc: `This subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.`}
  const unit3: Unit = {name: 'Advanced Web Development', 
  code: 'COS30002', 
  desc: `This subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  principles,and practices of Information Technology (IT), 
  including hardware, software, networks, databases, and security.`}
  const units: Unit[] = [unit1, unit2, unit3]

  function toggleDetail(index: String) {
    let a = document.getElementById('desc' + index) as HTMLElement
    let attr = a?.getAttribute("expanded")
    if (attr == 'true') {
      attr = 'false'
    } else {
      attr = 'true'
    } 
    a.setAttribute("expanded", attr)
  }

  return (
    <body>
      <SideNavBar />
      <Header />

      <h2 className='currentCourseText'>Currently Available Courses - Summer 2023</h2>

      {/* Main Section */}
      <div className='courses'>
        {/* Column Names */}
        <div className='textRow'>
          <h3 className='column_name course-name'>Course Name</h3>
          <h3 className='column_name course-code'>Course Code</h3>
          <h3 className='column_name course-desc'>Description</h3>
          <h3 className='column_name enroll'>Enroll</h3>
        </div>
        
        {units.map((unit, index) => 
        <div className="outer-container" key={index}>
          <div className="course-name column-pr">{unit.name}</div>
          <div className="course-code column-pr">{unit.code}</div>
          <div className="course-desc column-pr">
            {//@ts-ignore 
            <p className='desc' id={"desc" + String(index)} expanded='false'>{unit.desc}</p>}
           <p onClick={() => toggleDetail(String(index))} className='detail-func'>More Details</p>
          </div>
          <div className='column-pr enroll'>
            <input className="enroll-checkbox" type='checkbox' id={"Enrollment Checkbox" + String(index)} name={"Enrollment Checkbox" + String(index)} aria-label = {"Enrollment Checkbox"} /> 
          </div>
        </div>)}
      </div>
      
      {/* Button to Enroll Courses */}
      <div className='enrollBtn'>
        <a href='#' target='_blank'>
          <img src={btnEnroll} className='btnEnroll' alt='Confirm Button'/>
        </a>
      </div>

      <footer>
        <div className='footer'>
          <h5>Footer</h5>
        </div>
      </footer>
    </body>
  )
}

export default App
