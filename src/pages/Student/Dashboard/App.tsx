import { useEffect, useState } from 'react'
import uniLogo from 'assets/uniLogo.svg'
import iconDash from 'assets/iconDash.svg'
import iconRegis from 'assets/iconRegis.svg'
import iconResult from 'assets/iconResult.svg'
import banner from 'assets/banner.svg'
import image from 'assets/image.svg'
import profile from 'assets/profile.svg'
import caretdown from 'assets/caretdown.svg'
import './App.css'
import './App1.css'
import './App2.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

interface Enrollment {
  result : string
  unit_id : string
}

interface Course {
  unit_id: string
  name: string
}

interface responseData{
  status: "success" | "fail";
  res_data: {
    courses: Course[]
    enrollments: Enrollment[]
    start_date: number
    end_date: number
  }
}

function formatDate(date : Date) : string{
  const dDate = date.getDate()
  let dString = dDate.toString()
  if (dDate < 10) {
    dString = "0" + dString
  }

  const mDate = date.getMonth() + 1
  let mString = mDate.toString()
  if (mDate < 10) {
    mString = "0" + mString
  }

  const yDate = date.getFullYear()
  let yString = yDate.toString()

  return dString + "/" + mString + "/" + yString
}

function returnCourseName(courses : Course[], unit_id : string) : string{
  const result = courses.find(unit => {
    return unit.unit_id === unit_id
  })
  console.log("result: " + result?.name)
  return result?.name || ""
}

function App() {
  const [post, setPost] = useState<responseData | null>(null);

  useEffect(() => {
    const controller = new AbortController()
    axios.get('http://localhost:3000/test/get_current_sem_stu', {signal: controller.signal}).then((res) => {
      setPost(res.data)
      console.log(res.data)
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

  return (
    <div className="outmost-container">
      <nav className='sidebar'>
        <div className='side'>
          <a className='active' href="#" target="_blank">
            <img src={uniLogo} className="logo" alt="Uni logo" />
          </a>
        </div>
          
        <div>
          <Link to='/dashboard'>
            <img src={iconDash} className="iconD" alt="Dash" /><p className='D_text'>Dashboard</p>
          </Link>
        </div>
          
        <div>
          <Link to='/login'>
            <img src={iconResult} className="iconR" alt="Result" /><p className='D_text'>Result</p>
          </Link>
        </div>

        <div>
          <Link to='/course-registration'>
            <img src={iconRegis} className="iconRe" alt="Regis" /><p className='D_text'>Course Registration</p>
          </Link>
        </div>
      </nav>
      <div>  
        <div className='top_bar'>
          <h2 className='top_text'>Dashboard</h2>
        </div>
        <div className='profile'>
          <a href="#" target="_blank">
            <img src={profile} className="profile_logo" alt="Regis" />
          </a>

          <h2 className='profile_text'>John B.Doe</h2>
          <a href="#" target="_blank">
            <img src={caretdown} className="profile_caret" alt="Regis" />
          </a>
        </div>
      </div>

      <img src={banner} className="banner" alt="Banner" /><p className='text_banner1'>WELCOME BACK, JOHN!</p>
      <p className='text_banner2'>You have some notifications. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <img src={image} className="image" alt="Image" />
      <button type="button" id="myButton" className="btn-primary">Learn More</button>

      <div className='Courses mt-7'>
        <h4>Courses</h4>
      </div>

      <div className="ml-[361px] mt-[380px]">
        <div className="grid grid-cols-2 gap-5">
        {post?.res_data.enrollments.map((unit, index) => 
          <div className='Courses1' key={index}>
            <div className='content_courses'>
              <p className='p1'>{returnCourseName(post?.res_data.courses, unit.unit_id)}</p>
              <span>{unit.unit_id}</span>
              <span className='result1'>Result</span>
              <div>
                <br></br>
                <span className='widget_start'>Start Date</span> 
                <span className='widget_end'>End Date</span>
                <span>
                  <progress className='widget_progress' value={unit.result} max="100"></progress>
                </span>
                <span className='progress1'>{unit.result}</span>
              </div> 

              <div className='widget_1'>
                <span className='widget_days'><div className='rectangle'>{formatDate(new Date(post.res_data.start_date))}</div></span>
                <span className='widget_ends'><div className='rectangle2'>{formatDate(new Date(post.res_data.end_date))}</div></span>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      <footer>
        <div className='footer'>
        <h6>Footer</h6></div>
      </footer>
    </div>
  )
}

export default App