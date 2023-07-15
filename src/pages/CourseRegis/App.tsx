import { useState } from 'react'
import schoolLogo from '../../assets/uniLogo.svg'
import icDashboard from '../../assets/iconDash.svg'
import icResult from '../../assets/iconResult.svg'
import icCourseRegis from '../../assets/iconRegis.svg'
import icAvatar from '../../assets/profile.svg'
import icCaretDown from '../../assets/caretdown.svg'
import icEnroll from '../../assets/Enrol Rec.svg'
import icEnrollChecked from '../../assets/🦆 icon _Checkbox Checked_.svg'
import btnEnroll from '../../assets/btnEnroll.svg'
import { Link } from 'react-router-dom'

import './SideNavBar.css'
import './Header&Footer.css'
import './Body.css'

function App() {
  const [count, setCount] = useState(0)

  function toggleDetail() {
    let a = document.getElementById('desc') as HTMLElement
    let attr = a?.getAttribute("expanded")
    if (attr == 'true') {
      attr = 'false'
    } else {
      attr = 'true'
    } 
    a.setAttribute("expanded", attr)
  }

  // const myImage = document.getElementById('checkbox') as HTMLImageElement;

  // myImage.addEventListener('click', () => {
  //   myImage.setAttribute('src', '🦆 icon _Checkbox Checked_.svg');
  // });

  return (
    <body>

      {/* Side Navigation Bar */}
      <nav className='sideNavBar'>
        <div className='schoolLogo'>
          <a className='logo' href='#' target='_blank'>
            <img src={schoolLogo} alt='School Logo'/>
          </a>
        </div>

        <div className='nav-func'>
          <Link to='/dashboard'>
            <img src={icDashboard} className="icNavBar" alt="Dashboard" />
            <p className='NavBar_text'>Dashboard</p>
          </Link>
        </div>

        <div className='nav-func'>
          <Link to='/login'>
            <img src={icResult} className="icNavBar" alt="Result" />
            <p className='NavBar_text'>Result</p>
          </Link>
        </div>

        <div className='nav-func func-selected'>
          <Link to='/course-registration'>
            <img src={icCourseRegis} className="icNavBar" alt="Course Registration" />
            <p className='NavBar_text text-selected'>Course Registration</p>
          </Link>
        </div>
      </nav>

      <header>
        <div className='site-name'>
          <h3 className='header_text'>Course Registration</h3>
        </div>
        <div className='account'>
          <a href='#' target='_blank'>
            <img src={icAvatar} className='avatar' alt='Avatar'/>
          </a>
          <h3 className='student_name'>John B.Doe</h3>
          <a href='#' target='_blank'>
            <img src={icCaretDown} className='caret' alt='Caret'/>
          </a>
        </div>
      </header>

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
        
        {/* Courses 1*/}
        <div className="outer-container">
          <div className="course-name column-pr">Advanced Web Development</div>
          <div className="course-code column-pr">COS30002</div>
          <div className="course-desc column-pr">
            {//@ts-ignore 
            <p className='desc' id='desc' expanded='false'>This subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.</p>}
           <p onClick={toggleDetail} className='detail-func'>More Details</p>
          </div>
          <div className="enroll column-pr">
            <img src={icEnroll} className='enroll-checkbox' id='checkbox' alt='Enroll Checkbox'/>
          </div>
        </div>
        {/* Courses 2*/}
        <div className="outer-container" style={{ border: '3px solid #2B4EA2' }}>
          <div className="course-name column-pr">Information Technology Project</div>
          <div className="course-code column-pr">ICT30001</div>
          <div className="course-desc column-pr">
            {//@ts-ignore 
            <p className='desc' id='desc' expanded='false'>This subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.</p>}
           <p onClick={toggleDetail} className='detail-func'>More Details</p>
          </div>
          <div className="enroll column-pr">
            <img src={icEnrollChecked} className='enroll-checkbox' alt='Enroll Checkbox'/>
          </div>
        </div>
        {/* Courses 3*/}
        <div className="outer-container">
          <div className="course-name column-pr">Software Testing and Reliability</div>
          <div className="course-code column-pr">SWE30017</div>
          <div className="course-desc column-pr">
            {//@ts-ignore 
            <p className='desc' id='desc' expanded='false'>This subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
           principles,and practices of Information Technology (IT), 
           including hardware, software, networks, databases, and security.</p>}
           <p onClick={toggleDetail} className='detail-func'>More Details</p>
          </div>
          <div className="enroll column-pr">
            <img src={icEnroll} className='enroll-checkbox' alt='Enroll Checkbox'/>
          </div>
        </div>
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
