import { useEffect, useState } from 'react'
import axios from 'axios'

import Unit from '../../models/unit'

import SideNavBar from '../../components/SideNavBar'
import Header from '../../components/Header'

import './SideNavBar.css'
import './Header&Footer.css'
import './Body.css'

const baseURL = "http://localhost:3000/test/get_current_sem_reg";
interface responseData{
  status: "success" | "fail";
  res_data: {
    courses: Unit[];
    sem_name: string;
  }
}

function App() {
  const [post, setPost] = useState<responseData | null>(null);

  useEffect(() => {
    const controller = new AbortController()
    axios.get(baseURL, {signal: controller.signal}).then((res) => {
      setPost(res.data as responseData);
      console.log(res.data);
    })
    .catch((error) => {
      if(controller.signal.aborted) {
        console.log('Request Aborted')
      }
      else {
        console.log(error)
      }
    })
    return() => {
      controller.abort()
    }
  }, []);

  // const unit1: Unit = {name: 'Advanced Web Development', 
  // code: 'COS30002', 
  // desc: `This subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.`}
  // const unit2: Unit = {name: 'Advanced Web Development', 
  // code: 'COS30002', 
  // desc: `This subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.`}
  // const unit3: Unit = {name: 'Advanced Web Development', 
  // code: 'COS30002', 
  // desc: `This subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.his subject provides an overview of the fundamental concepts,
  // principles,and practices of Information Technology (IT), 
  // including hardware, software, networks, databases, and security.`}
  // const units: Unit[] = [unit1, unit2, unit3]

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

      <h2 className='currentCourseText'>Currently Available Courses - {post?.res_data.sem_name}</h2>

      {/* Main Section */}
      <div className='courses'>
        {/* Column Names */}
        <div className='textRow'>
          <h3 className='column_name course-name'>Course Name</h3>
          <h3 className='column_name course-code'>Course Code</h3>
          <h3 className='column_name course-desc'>Description</h3>
          <h3 className='column_name enroll'>Enroll</h3>
        </div>
        
        {post?.res_data.courses.map((unit, index) => 
        <div className="outer-container" key={index}>
          <div className="course-name column-pr table-content">{unit.name}</div>
          <div className="course-code column-pr table-content">{unit.unit_id}</div>
          <div className="course-desc column-pr">
            {//@ts-ignore 
            <p className='desc table-content' id={"desc" + String(index)} expanded='false'>{unit.description}</p>}
           <p onClick={() => toggleDetail(String(index))} className='detail-func'>More Details</p>
          </div>
          <div className='column-pr enroll'>
            <input className="enroll-checkbox" type='checkbox' id={"Enrollment Checkbox" + String(index)} name={"Enrollment Checkbox" + String(index)} aria-label = {"Enrollment Checkbox"} /> 
          </div>
        </div>)}
      </div>
      
      {/* Button to Enroll Courses */}
      <div>
        <button  className='enrollBtn'>
          Confirm
        </button>
      </div>
    </body>
  )
}

export default App
