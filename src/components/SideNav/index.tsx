import schoolLogo from 'assets/uniLogo.svg'
import icDashboard from 'assets/iconDash.svg'
import icNoti from 'assets/ic_notifications.svg'
import icSem from 'assets/ic_semester.svg'
import icCourses from 'assets/ic_courses.svg'
import icUsers from 'assets/ic_user.svg'
import icAudit from 'assets/ic_audit.svg'
import icCourseReg from 'assets/iconRegis.svg'
import { useEffect, useState } from 'react'
import styles from './style.module.css'

const sidenav = (props : sideNavProps) => {
    const [lastPage, setLastPage] = useState(0)
    useEffect(() => {
        if (props.currentPage != lastPage) {
            document.getElementById(lastPage.toString())?.setAttribute("data-current", "false")
            document.getElementById(props.currentPage.toString())?.setAttribute("data-current", "true")
            setLastPage(props.currentPage)
        }
    }, [props.currentPage])

    return (
        <div className={styles.links_outer_container + " absolute w-[270px] h-full top-0 left-0 bg-[#ffffff] flex flex-col"}>
            <img 
                src={schoolLogo}
                className="mx-auto"
                alt="School Logo"
            />
            {props.role == 'admin' &&
                <div >
                    <div className='px-[10px] py-[8px] ml-[16px] mt-[75px]'>
                        <img 
                            src={icDashboard}
                            className='inline-block'
                            alt='Dashboard Icon'
                        />
                        <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#282828]'>Dashboard</p>
                    </div>
                    <div className='px-[10px] py-[8px] ml-[16px]'>
                        <img 
                            src={icNoti}
                            className='inline-block'
                            alt='Notification Icon'
                        />
                        <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#282828]'>Notification</p>
                    </div>

                    <br></br>
                    <p className='font-bold text-2xl ml-[30px]'>Management</p>

                    <div className='px-[10px] py-[8px] ml-[16px] mt-[20px]'>
                        <img 
                            src={icSem}
                            className='inline-block'
                            alt='Dashboard Icon'
                        />
                        <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#282828]'>Semester</p>
                    </div>

                    <div className='bg-[#9DBAFF]'>
                        <div className='px-[10px] py-[8px] ml-[16px]'>
                            <img 
                                src={icCourses}
                                className='inline-block'
                                alt='Dashboard Icon'
                            />
                            <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#0030A5]'>Courses</p>
                        </div>
                    </div>
                    
                    <div className='px-[10px] py-[8px] ml-[16px]'>
                        <img 
                            src={icUsers}
                            className='inline-block'
                            alt='Dashboard Icon'
                        />
                        <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#282828]'>Users</p>
                    </div>

                    <br></br>
                    <p className='font-bold text-2xl ml-[30px]'>Moderation</p>

                    <div className='px-[10px] py-[8px] ml-[16px] mt-[20px]'>
                        <img 
                            src={icAudit}
                            className='inline-block'
                            alt='Dashboard Icon'
                        />
                        <p className='inline-flex font-[400] text-xl ml-[20px] mt-0 mb-0 text-[#282828]'>Audit Log</p>
                    </div>
                </div>
            }

            {props.role == 'student' &&
                <div className="mt-16">
                    <div className={styles.nav_link_container + " w-[270px] px-4 py-3"} id="0" data-current="true">
                        <a 
                            href="/student" 
                            className='cursor-pointer inline-flex align-middle items-center'
                        >
                            <img 
                                src={icDashboard}
                                alt='Dashboard Icon'
                            />
                            <p className='font-[400] text-xl ml-[20px] text-[#282828]'>Dashboard</p>
                        </a>
                    </div>

                    <div className={styles.nav_link_container + " w-[270px] px-4 py-3"} id="1" data-current="false">
                        <a 
                            href="/student" id="1"
                            className='cursor-pointer inline-flex align-middle items-center'
                        >
                            <img 
                                src={icNoti}
                                alt='Notification Icon'
                            />
                            <p className='font-[400] text-xl ml-[20px] text-[#282828]'>Notification</p>
                        </a>
                    </div>

                    <div className={styles.nav_link_container + " w-[270px] px-4 py-3"} id="2" data-current="false">
                        <a 
                            href="/student/course-registration"
                            className=' cursor-pointer inline-flex align-middle items-center'
                        >
                            <img 
                                src={icCourseReg}
                                alt='Notification Icon'
                            />
                            <p className='font-[400] text-xl ml-[20px] text-[#282828]'>Course Registration</p>
                        </a>
                    </div>
                </div>
            }
        </div>
    );
}

type sideNavProps = {
    role : "student"|"admin",
    currentPage : number
}

export default sidenav;