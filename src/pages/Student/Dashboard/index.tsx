import { useEffect, useState } from 'react'
import banner from 'assets/student_banner.png'
import axios from 'axios'
import CoursePanel from 'components/CourseDashCard/index.tsx'

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
  return result?.name || ""
}

const dashboard = () => {
  const [post, setPost] = useState<responseData | null>(null);

  useEffect(() => {
    const controller = new AbortController()
    axios.get('http://localhost:3000/test/get_current_sem_stu', {
      signal: controller.signal,
      withCredentials: true
    }).then((res) => {
      setPost(res.data)
    }).catch((error) => {
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
    <div className="px-10 py-8">
      <div className="flex h-[218px] justify-between bg-[#497EFB] rounded py-6 pl-6">
        <div className="flex flex-col justify-between text-white pr-10">
          <p className="text-xl font-bold">WELCOME BACK, JOHN!</p>
          <p>
            You have some notifications. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <button type="button" id="myButton" className="bg-[#f9952a] w-1/4 aspect-[3.7] rounded-md font-bold hover:bg-[#FF9D35]">
            Learn More
          </button>
        </div>

        <img src={banner} alt="Image" className="max-w-[50%]" />
      </div>
      
      <div>
        <h4 className="pt-6 pb-3 text-2xl font-bold">Courses</h4>

        <div className="grid grid-cols-2 gap-5">
        {post?.res_data.enrollments.map((unit, index) => 
          <CoursePanel 
            index = { index }
            course_code = {unit.unit_id}
            course_name = { returnCourseName(post?.res_data.courses, unit.unit_id)}
            result = { unit.result }
            start_date = { formatDate(new Date(post?.res_data.start_date)) }
            end_date = { formatDate(new Date(post?.res_data.end_date)) }
          />
        )}
        </div>
      </div>
    </div>
  )
}

export default dashboard