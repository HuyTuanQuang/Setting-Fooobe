import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
function SetingAcount_l(props) {
    return (
        <div className="seting-l">
        <div className="seting-l-nav">
            <div className="seting-l-nav-font"><Link to="/" style={{color:'black',textDecoration:'none'}}>Cài đặt</Link>  <label style={{fontSize:'10pt'}}>{" 〉"}</label> Quyền riêng tư</div>
            <div className="seting-l-nav-button">
                <div
                    className="seting-l-nav-button-icon"
                >
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
        <div className="seting-l-scroll" id="seting-l-scroll-style">
            <Link to="/setting/account" className="seting-l_scroll-menuitem">
                <div className="seting-l-scroll-menuitem-icon">
                    <CgProfile />
                </div>
                <div className="seting-l-scroll-menuitem-name">
                    Acount
                </div>
            </Link>
            <Link to="/setting/account/language" className="seting-l_scroll-menuitem">
                <div className="seting-l-scroll-menuitem-icon">
                    <CgProfile />
                </div>
                <div className="seting-l-scroll-menuitem-name">
                    Ngôn ngữ
                </div>
            </Link>
        </div>

    </div>
    );
}

export default SetingAcount_l;