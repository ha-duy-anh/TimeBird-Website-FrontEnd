import icAvatar from '../assets/profile.svg'
import icCaretDown from '../assets/caretdown.svg'
import React from 'react'

class Header extends React.Component {
    render() {
        return(
            <div>
                <div className='absolute w-[1250px] h-[82px] top-[0px] left-[272px] bg-[#ffffff]'>
                    <h2 className='absolute font-bold text-3xl text-[#282828] ml-[30px] mt-[20px]'>Courses</h2>
                </div>

                <div className='absolute w-[345px] h-[82px] top-[0px] left-[1523px] bg-[#ffffff]'>
                    <img src={icAvatar} className='absolute ml-[30px] mt-[20px]' alt='Avatar'/>
                    <h3 className='absolute font-medium text-2xl text-[#2B4EA2] pl-[85px] pt-[27px]'>Tom D. Smith</h3>
                    <img src={icCaretDown} className='absolute ml-[260px] mt-[35px]' alt='Caret'/>
                </div>
            </div>
        )
    }
}
export default Header