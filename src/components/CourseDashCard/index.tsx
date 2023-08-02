import { useEffect } from "react"

const index = (props : CourseInfo) => {
    useEffect(() => {
        let result = parseInt(props.result)
        if (result < 50) {
            (document.querySelector(":root") as HTMLElement).style.setProperty("--progress-bar-color", "#FF4545")
        } else if (result <= 70) {
            (document.querySelector(":root") as HTMLElement).style.setProperty("--progress-bar-color", "#FFB822")
        } else {
            (document.querySelector(":root") as HTMLElement).style.setProperty("--progress-bar-color", "#8FE571")
        }
    }, [props.result])

    return (
        <div className='bg-white rounded-md p-4' key={props.index}>
            <p className='text-xl font-semibold'>{props.course_name}</p>
            <p className="my-3 text-[18px]">{props.course_code}</p>
            <div className='flex gap-8 my-4 text-xl'>
                <div className='w-[40%] flex justify-start gap-8'>
                    <div>
                        <span className='text-[#228400] font-semibold'>Start Date</span> 
                        <div className='bg-[#8FE571] py-2 pl-2 pr-6 text-[#228400] rounded-md text-xl'>{props.start_date}</div>
                    </div>
                    <div>
                        <span className='text-[#FF4545] font-semibold'>End Date</span>
                        <div className='bg-[#FFDCDC] py-2 pl-2 pr-6 text-[#FF4545] rounded-md text-xl'>{props.end_date}</div>
                    </div>
                </div>

                <div className='w-[60%] flex justify-center h-full'>
                    <div className='flex flex-col w-full px-10'>
                        <p className=''>Result</p>
                        <div className='flex align-middle items-center justify-between'>
                            <progress className='w-4/5 rounded-lg' value={props.result} max="100"></progress>
                            <span className='font-semibold'>{props.result} %</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type CourseInfo = {
    index : number,
    course_name : string,
    course_code : string,
    start_date : string,
    end_date : string, 
    result : string
}

export default index