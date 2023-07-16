import icSearch from '../../assets/ic_search.svg'
import icList from '../../assets/ic_listDown.svg'
import icSearchPage from '../../assets/ic_seachPageNo.svg'
import { Link } from 'react-router-dom'
import SideNavBar from '../../components/SideNavBar'
import Header from '../../components/Header'

export default function ManageCourses(props: any) {
    return (
        <div>
            <SideNavBar />
            <Header />

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
                        <button className='h-[30px] w-[30px]'>2</button>
                        <button className='h-[30px] w-[30px]'>3</button>
                        <button className='h-[30px] w-[30px]'>8</button>
                        <button className='h-[30px] w-[30px]'>9</button>
                        <button className='h-[30px] w-[30px]'>10</button>
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

