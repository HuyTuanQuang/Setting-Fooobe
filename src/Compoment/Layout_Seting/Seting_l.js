import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { RiAdvertisementLine } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';


function Seting_l({hiden,setHiden}) {
  
const locaiton = window.location.pathname;
  
if (locaiton === "/") setHiden(1)


  return (
    <div className="seting-l">
      <div className="seting-l-nav">
        <div className="seting-l-nav-font">Cài đặt</div>
        <div className="seting-l-nav-button">
          <div
            className="seting-l-nav-button-icon"
          >
            <IoSettingsOutline />
          </div>
        </div>
      </div>

      <div className="seting-l-scroll" id="seting-l-scroll-style">
        <Link to="/" className="seting-l-scroll-menuitem" style={hiden===1 ? {backgroundColor:'aqua'} : null}>
          <div className="seting-l-scroll-menuitem-icon">
            <CgProfile />
          </div>
          <div className="seting-l-scroll-menuitem-name" >
            Quang
          </div>
        </Link>
        <Link to="/setting/privacy" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <RiGitRepositoryPrivateLine />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Quyền riêng tư
          </div>
        </Link>
        <Link to="/setting/notifications" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <IoIosNotificationsOutline />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Thông báo
          </div>
        </Link>
        <Link to="/setting/account" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <CgProfile />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Tài khoản
          </div>
        </Link>
        <Link to="/setting/security" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <RiGitRepositoryPrivateFill />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Bảo mật và đăng nhập
          </div>
        </Link>
        <Link to="/setting/advertisers" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <RiAdvertisementLine />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Quảng cáo
          </div>
        </Link>
        <Link to="/setting/suport" className="seting-l-scroll-menuitem">
          <div className="seting-l-scroll-menuitem-icon">
            <BiSupport />
          </div>
          <div className="seting-l-scroll-menuitem-name">
            Hỗ trợ
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Seting_l;