import React from "react";
import schoolLogo from '../../assets/uniLogo.svg'

class SideNavBar extends React.Component {
    render() {
        return (
            <div className="flex">
                <div className="w-1/6 h-screen top-0 bg-[#ffffff]">
                    <img 
                        src="schoolLogo"
                        className="mix-blend-screen"
                        alt="School Logo"
                    />
                </div>
            </div>
        );
    }
}