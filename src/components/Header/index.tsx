import icAvatar from 'assets/profile.svg'
import icCaretDown from 'assets/caretdown.svg'

const calWidth = {
    width: "calc(100% - 272px)"
}

const header = (props : HeaderProps) => {
    return(
        <div className="absolute h-[82px] top-0 right-0 bg-[#ffffff] flex justify-between px-10" style={calWidth}>
            <h2 className='font-bold text-3xl text-[#282828] my-auto'>{props.page_title}</h2>

            <div className="border-l-2 flex items-center gap-2 justify-end pl-5">
                <img src={icAvatar} alt='Avatar' className="w-11 h-11"/>
                <h3 className='font-medium text-2xl text-[#2B4EA2]'>{props.username}</h3>
                <img src={icCaretDown} alt='Caret' className="w-6 h-auto"/>
            </div>
        </div>
    )
}

type HeaderProps = {
    page_title : string,
    username : string
}

export default header