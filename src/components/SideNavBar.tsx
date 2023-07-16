import React from "react"
import schoolLogo from '../assets/uniLogo.svg'
import icDashboard from '../assets/iconDash.svg'
import icNoti from '../assets/ic_notifications.svg'
import icSem from '../assets/ic_semester.svg'
import icCourses from '../assets/ic_courses.svg'
import icUsers from '../assets/ic_user.svg'
import icAudit from '../assets/ic_audit.svg'

class SideNavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="absolute w-[320px] h-screen top-0 bg-[#ffffff]">
                    <img 
                        src={schoolLogo}
                        className="ml-[68px]"
                        alt="School Logo"
                    />

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
            </div>
        );
    }
}

export default SideNavBar;