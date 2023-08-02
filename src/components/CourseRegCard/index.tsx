import { useEffect, useState } from "react";
import styles from './style.module.css'
import CustomCheckBox from 'components/CustomCheckbox'

function isOverflown(element : HTMLElement) {
    return element.scrollHeight > element.clientHeight;
}

function toggleDetail(index: String) {
    let a = document.getElementById('desc' + index) as HTMLElement
    let btn = document.getElementById('detail-btn' + index) as HTMLElement
    let attr = a?.getAttribute("expanded")
    if (attr == 'true') {
      attr = 'false'
      btn.innerHTML = 'More details'
    } else {
      attr = 'true'
      btn.innerHTML = 'Hide details'
    } 
    a.setAttribute("expanded", attr)
}

const index = (props : CourseInfoProp) => {
    const [overflow, setOverFlow] = useState(false)

    useEffect(() => {
        const desc = document.getElementById("desc-p" + String(props.index))
        if (desc != null) {
            if (isOverflown(desc)) {
                setOverFlow(true)
            }
        }
    }, [props])

    return (
        <tr className="shadow-md h-[146px] rounded-md align-top pb-4">
            <td className="pt-5 pl-6 pr-16">{props.name}</td>
            <td className="pt-5 pr-16">{props.id}</td>
            {//@ts-ignore 
            <td className={styles.course_desc + " py-5 pr-16"} expanded='false' id={"desc" + String(props.index)}>
                <p className='mb-8 h-[48px] w-[480px] break-words overflow-hidden' id={"desc-p" + String(props.index)}>
                    { props.detail }
                </p>
                { overflow  &&
                    <p onClick={() => toggleDetail(String(props.index))} 
                        className='underline text-blue-500 cursor-pointer hover:text-blue-700 inline-block'
                        id={"detail-btn" + String(props.index)}
                    >
                        More Details
                    </p>
                }
            </td>}

            <td className='pt-5 flex justify-center pr-6'>
                <CustomCheckBox id={props.id} />
            </td>
        </tr>
    )
}

type CourseInfoProp = {
    index : number,
    name : string,
    id : string,
    detail : string
}

export default index