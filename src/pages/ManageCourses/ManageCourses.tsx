import schoolLogo from '../../assets/uniLogo.svg'
import icDashboard from '../../assets/iconDash.svg'
import icNoti from '../../assets/ic_notifications.svg'
import icSem from '../../assets/ic_semester.svg'
import icCourses from '../../assets/ic_courses.svg'
import icUsers from '../../assets/ic_user.svg'
import icAudit from '../../assets/ic_audit.svg'
import icAvatar from '../../assets/profile.svg'
import icCaretDown from '../../assets/caretdown.svg'
import icSearch from '../../assets/ic_search.svg'
import icList from '../../assets/ic_listDown.svg'
import icSearchPage from '../../assets/ic_seachPageNo.svg'
import { Link } from 'react-router-dom'


export default function ManageCourses(props: any) {
    return (
        <div>
            {/* Side NavBar */}
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

            {/* Site Header */}
            <div className='absolute w-[1250px] h-[82px] top-[0px] left-[322px] bg-[#ffffff]'>
                <h2 className='absolute font-bold text-3xl text-[#282828] ml-[30px] mt-[20px]'>Courses</h2>
            </div>

            <div className='absolute w-[345px] h-[82px] top-[0px] left-[1573px] bg-[#ffffff]'>
                <img src={icAvatar} className='absolute ml-[30px] mt-[20px]' alt='Avatar'/>
                <h3 className='absolute font-medium text-2xl text-[#2B4EA2] pl-[85px] pt-[27px]'>Tom D. Smith</h3>
                <img src={icCaretDown} className='absolute ml-[260px] mt-[35px]' alt='Caret'/>
            </div>
            
            {/* Semester Table */}
            <div className='absolute bg-[#ffffff] w-[1500px] h-[750px] left-[375px] top-[130px] rounded-[10px] overflow-auto'>
                {/* Table Header */}
                <div className=''>
                    <h2 className='absolute ml-[50px] mt-[45px] text-[#1A558B] text-[32px] font-bold text-2xl'>All Courses</h2>
                    <div>
                        <button className='absolute text-xl w-[153px] h-[58px] ml-[920px] mt-[45px] px-[8px] 
                        rounded-[10px] border-[#007BFF] font-semibold text-[#007BFF] bg-[#ffffff] border-[2px]'>
                            Action 1
                        </button>
                        <button className='absolute text-xl w-[153px] h-[58px] ml-[1110px] mt-[45px] px-[8px] 
                        rounded-[10px] border-[#007BFF] font-semibold text-[#007BFF] bg-[#ffffff] border-[2px]'>
                            Export
                        </button>
                        <button className='absolute text-xl w-[153px] h-[58px] ml-[1300px] mt-[45px] px-[8px] 
                        rounded-[10px] bg-[#007BFF] font-semibold text-[#ffffff] border-[2px]'>
                            + Create
                        </button>
                    </div>
                </div>
                
                {/* Function Bar */}
                <div className=''>
                    <div className='absolute w-[800px] h-[42px] left-[50px] top-[140px] rounded-[10px] bg-[#F2F2F4]'>
                            <img 
                                src={icSearch}
                                className='inline-block mx-[10px]'
                                alt='Search Icon'
                            />
                            <p className='inline-flex mt-[7px] font-light text-base text-[#A9A9C6] italic'>Search with course ID or name ...</p>
                        </div>

                    <div>
                        <p className='absolute left-[920px] top-[145px] font-light text-xl text-[#A9A9C6]'>Group By</p>
                        <button className='absolute w-[138px] h-[40px] left-[1010px] top-[140px] border-[#F2F2F4] border-[2px] bg-[#ffffff]
                        text-[20px] pl-[10px] pt-[5px] text-left inline-flex'> 
                            Default                     
                            <img 
                                src={icList}
                                className='inline-block ml-[27px] mt-[10px]'
                                alt='Search Icon'
                            />
                        </button>
                    </div>

                    <div>
                        <p className='absolute left-[1210px] top-[145px] font-light text-xl text-[#A9A9C6]'>Group By</p>
                        <button className='absolute w-[138px] h-[40px] left-[1300px] top-[140px] border-[#F2F2F4] border-[2px] bg-[#ffffff]
                        text-[20px] pl-[10px] pt-[5px] text-left inline-flex'> 
                            Default                     
                            <img 
                                src={icList}
                                className='inline-block ml-[27px] mt-[10px]'
                                alt='Search Icon'
                            />
                        </button>
                    </div>
                </div>

                <div className='h-[90px] mt-[220px]  border border-y-[#F2F2F4] py-5'> 
                    <span className='inline-block w-[12%] ml-[40px] font-bold text-[#1A558B] text-[24px]'>Course ID</span>
                    <span className='inline-flex w-[28%] font-bold text-[#1A558B] text-[24px]'>Course Name</span>
                    <span className='inline-flex w-[15%] font-bold text-[#1A558B] text-[24px]'>Members</span>
                    <span className='inline-flex w-[15%] font-bold text-[#1A558B] text-[24px]'>Status</span>
                    <span className='inline-flex w-[18%] font-bold text-[#1A558B] text-[24px]'>Last Modified</span>
                    <span className='inline-flex font-bold text-[#1A558B] text-[24px]'>Action</span>
                </div>
                <div className='h-[90px] border border-y-[#F2F2F4] py-5'>
                    <span className='inline-block w-[12%] ml-[40px] font-medium text-[#282828] text-[24px]'>SWE30001</span>
                    <span className='inline-flex w-[28%] font-medium text-[#282828] text-[24px]'>Advanced Web Development</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>60</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>Completed</span>
                    <span className='inline-flex w-[18%] font-medium text-[#282828] text-[24px]'>14/03/2019</span>
                    <span className='inline-flex font-medium text-[#282828] text-[24px]'>View</span>
                </div>
                <div className='h-[90px] border border-y-[#F2F2F4] py-5'>
                <span className='inline-block w-[12%] ml-[40px] font-medium text-[#282828] text-[24px]'>SWE30001</span>
                    <span className='inline-flex w-[28%] font-medium text-[#282828] text-[24px]'>Advanced Web Development</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>60</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>Completed</span>
                    <span className='inline-flex w-[18%] font-medium text-[#282828] text-[24px]'>14/03/2019</span>
                    <span className='inline-flex font-medium text-[#282828] text-[24px]'>View</span>
                </div>
                <div className='h-[90px] border border-y-[#F2F2F4] py-5'>
                <span className='inline-block w-[12%] ml-[40px] font-medium text-[#282828] text-[24px]'>SWE30001</span>
                    <span className='inline-flex w-[28%] font-medium text-[#282828] text-[24px]'>Advanced Web Development</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>60</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>Completed</span>
                    <span className='inline-flex w-[18%] font-medium text-[#282828] text-[24px]'>14/03/2019</span>
                    <span className='inline-flex font-medium text-[#282828] text-[24px]'>View</span>
                </div>
                <div className='h-[90px] border border-y-[#F2F2F4] py-5'>
                <span className='inline-block w-[12%] ml-[40px] font-medium text-[#282828] text-[24px]'>SWE30001</span>
                    <span className='inline-flex w-[28%] font-medium text-[#282828] text-[24px]'>Advanced Web Development</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>60</span>
                    <span className='inline-flex w-[15%] font-medium text-[#282828] text-[24px]'>Completed</span>
                    <span className='inline-flex w-[18%] font-medium text-[#282828] text-[24px]'>14/03/2019</span>
                    <span className='inline-flex font-medium text-[#282828] text-[24px]'>View</span>
                </div>

                {/* Pagination */}
                <div className='flex justify-between px-[40px]'>
                    <div className='flex'>
                        <span className='font-semibold text-[22px] text-[#A9A9C6]'>Results: </span>
                        <span className='font-semibold text-[22px] text-[#282828]'>1-4 </span>
                        <span className='font-semibold text-[22px] text-[#A9A9C6]'>of 100</span>
                    </div>

                    <div className='flex'>
                        <button className='h-[30px] w-[30px]'>1</button>
                        <button className='h-[30px] w-[30px]'>1</button>
                        <button className='h-[30px] w-[30px]'>1</button>
                        <button className='h-[30px] w-[30px]'>1</button>
                        <button className='h-[30px] w-[30px]'>1</button>
                        <button className='h-[30px] w-[30px]'>1</button>
                    </div>

                    <div className='flex'>
                        <label className='font-semibold text-[22px] text-[#A9A9C6]'>Go to page </label>
                        <input type='number' id="pageNo" name="pageNo" className='border rounded-[10px] border-[#F2F2F4] border-[2px] ml-5 w-[72px]'/>
                        <img 
                            src={icSearchPage}
                            className='inline-block ml-[10px]'
                            alt='Search Icon'
                        />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

