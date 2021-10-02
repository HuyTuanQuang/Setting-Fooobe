import React from 'react';
import { Link } from 'react-router-dom';
import { FcPrivacy } from 'react-icons/fc';
import { IoSettingsOutline } from 'react-icons/io5';
function SettingSecurity_l(props) {
    return (
        <div className="seting-l">
        <div className="seting-l-nav">
            <div className="seting-l-nav-font"><Link to="/" style={{color:'black',textDecoration:'none'}}>Cài đặt</Link> <label style={{fontSize:'10pt'}}>{" 〉"}</label> Bảo mật</div>
            <div className="seting-l-nav-button">
                <div
                    className="seting-l-nav-button-icon"
                >
                    <IoSettingsOutline />
                </div>
            </div>
        </div>
        <div className="seting-l-scroll" id="seting-l-scroll-style">
            <Link to="/setting/security" className="seting-l-scroll-menuitem">
                <div className="seting-l-scroll-menuitem-icon">
                    <FcPrivacy />
                </div>
                <div className="seting-l-scroll-menuitem-name">
                    Bảo mật và đăng nhập
                </div>
            </Link>
        </div>

    </div>
    );
}

export default SettingSecurity_l;