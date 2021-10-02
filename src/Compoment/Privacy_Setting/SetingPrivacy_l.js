import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { FaInfo } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { SiPostcss } from 'react-icons/si';
import { MdBlock } from 'react-icons/md';

function SetingPrivacy({hiden}) {
    return (
        <div className="seting-l">
            <div className="seting-l-nav">
                <div className="seting-l-nav-font"><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Cài đặt</Link>  <label style={{ fontSize: '10pt' }}>{"  〉"}</label> Quyền riêng tư</div>
                <div className="seting-l-nav-button">
                    <div
                        className="seting-l-nav-button-icon"
                    >
                        <IoSettingsOutline />
                    </div>
                </div>
            </div>
            <div className="seting-l-scroll" id="seting-l-scroll-style">
                <Link to="/setting/privacy" className="seting-l-scroll-menuitem" >
                    <div className="seting-l-scroll-menuitem-icon">
                        <RiGitRepositoryPrivateLine />
                    </div>
                    <div className="seting-l-scroll-menuitem-name">
                        Quyền riêng tư
                    </div>
                </Link>
                <Link to="/setting/privacy/information" className="seting-l-scroll-menuitem">
                    <div className="seting-l-scroll-menuitem-icon">
                        <FaInfo />
                    </div>
                    <div className="seting-l-scroll-menuitem-name">
                        Thông tin của bạn trên facebook
                    </div>
                </Link>
                <Link to="/setting/privacy/profileTag" className="seting-l-scroll-menuitem">
                    <div className="seting-l-scroll-menuitem-icon">
                        <ImProfile />
                    </div>
                    <div className="seting-l-scroll-menuitem-name">
                        Trang cá nhân và gắn thẻ
                    </div>
                </Link>
                <Link to="/setting/privacy/followersPost" className="seting-l-scroll-menuitem">
                    <div className="seting-l-scroll-menuitem-icon">
                        <SiPostcss />
                    </div>
                    <div className="seting-l-scroll-menuitem-name">
                        Bài viết công khai
                    </div>
                </Link>
                <Link to="/setting/privacy/block" className="seting-l-scroll-menuitem">
                    <div className="seting-l-scroll-menuitem-icon">
                        <MdBlock />
                    </div>
                    <div className="seting-l-scroll-menuitem-name">
                        Chặn
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default SetingPrivacy;