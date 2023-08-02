import { useEffect, useState } from 'react'
import axios from 'axios'

import Unit from 'models/unit'
import CourseRegCard from 'components/CourseRegCard/index.tsx'
import { useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:3000/test/get_current_sem_reg";
interface responseData{
  status: "success" | "fail";
  res_data: {
    courses: Unit[];
    sem_name: string;
  }
}

const calcHeight = {
  height: "calc(100vh - 106px)"
}

function App() {
  const [post, setPost] = useState<responseData | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    axios.get(baseURL, {
      signal: controller.signal,
      withCredentials: true
    }).then((res) => {
      setPost(res.data as responseData);
      console.log(res)
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

    const register = () => {
        let checks : string[] = []
        post?.res_data.courses.forEach(unit => {
          let check = document.getElementById('cb-' + unit.unit_id) as HTMLInputElement
          if (check.checked) {
            checks.push(unit.unit_id)
          }
        })

        axios.post('http://localhost:3000/test/insert_enrollment', 
          {checks, sem_name: post?.res_data.sem_name}, {
          withCredentials: true
        }).then(response => {
          console.log(response)
          window.location.href = '/student/course-registration'
        }).catch((err) => {
          console.log(err)
        })
    }

  return (
    <div className="p-12 flex flex-col" style={calcHeight}>
      <h2 className='text-[#1A558B] font-bold text-2xl mb-4'>Currently Available Courses - {post?.res_data.sem_name}</h2>
      <div className='bg-white rounded-md shadow-xl h-[90%] px-8 pt-6 overflow-y-scroll mb-10 box-border'>
        <table className='h-full block border-separate border-spacing-5'>
          <tr className='text-left'>
            <th className='pl-6 w-[31%] text-[#1A558B]'>Course Name</th>
            <th className='w-[15%] text-[#1A558B]'>Course Code</th>
            <th className="w-[49%] text-[#1A558B]">Description</th>
            <th className="text-center text-[#1A558B] pr-6">Enroll</th>
          </tr>

          {post?.res_data.courses.map((unit, index) => 
            <CourseRegCard
              key={index} 
              index={index}
              name={unit.name}
              id={unit.unit_id}
              detail={unit.description}
            />
          )}
        </table>
      </div>
      <button className="ml-auto border-[2px] border-solid border-[#2B4EA2] text-[#2B4EA2] py-1 px-8 rounded-md
        hover:text-white hover:bg-[#2B4EA2]"
        onClick={register}>
        CONFIRM
      </button>
    </div>
  )
}

export default App
