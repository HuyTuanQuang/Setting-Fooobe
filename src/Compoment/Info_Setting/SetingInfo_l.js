import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
function SetingInfo_l(props) {
    return (
        <div className="seting-l">
        <div className="seting-l-nav">
            <div className="seting-l-nav-font"><Link to="/" style={{color:'black',textDecoration:'none'}}>Cài đặt</Link> <label style={{fontSize:'10pt'}}>{" 〉"}</label> Thông báo</div>
            <div className="seting-l-nav-button">
                <div
                    className="seting-l-nav-button-icon"
                >
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
        <div className="seting-l-scroll" id="seting-l-scroll-style">
            <Link to="/setting/notifications" className="seting-l-scroll-menuitem">
                <div className="seting-l-scroll-menuitem-icon">
                    <CgProfile />
                </div>
                <div className="seting-l-scroll-menuitem-name">
                    Thông báo 
                </div>
            </Link>
        </div>

    </div>
    );
}

export default SetingInfo_l;