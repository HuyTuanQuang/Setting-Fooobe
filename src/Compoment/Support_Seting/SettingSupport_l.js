import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5';
function SettingSupport_l(props) {
    return (
        <div className="seting-l">
            <div className="seting-l-nav">
                <div className="seting-l-nav-font"><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Cài đặt</Link> <label style={{ fontSize: '10pt' }}>{" 〉"}</label> Hỗ trợ</div>
                <div className="seting-l-nav-button">
                    <div
                        className="seting-l-nav-button-icon"
                    >
                        <IoSettingsOutline />
                    </div>
                </div>
            </div>
            <div className="seting-l-scroll" id="seting-l-scroll-style">
                <div className="seting-l-scroll-support-nav">
                    <label className="seting-l-scroll-support-nav-tile">Chào mừng bạn!</label>
                    <label className="seting-l-scroll-support-nav-content">hỗ trợ là nơi để bạn cập nhật thông tin mới về nội dung mình đã báo cáo, xem và trả lời tin nhắn của Đội ngũ hỗ trợ, cũng như đọc thông báo quan trọng về tài khoản của mình.</label>
                </div>
                <div className="seting-l-scroll-support-content">
                    <label className="seting-l-scroll-support-nav-tile" >Trung tâm trợ giúp</label>
                    <Link to="/abc" className="seting-l-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="seting-l-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="seting-l-scroll-menuitem-name" >
                            Trung tâm an toàn
                        </div>
                    </Link>
                    <Link to="/abc" className="seting-l-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="seting-l-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="seting-l-scroll-menuitem-name">
                            Trung tâm phòng ngừa bắt nạt
                        </div>
                    </Link>
                    <Link to="/abc" className="seting-l-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="seting-l-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="seting-l-scroll-menuitem-name">
                            Kiểm tra an toàn
                        </div>
                    </Link>
                </div>
                <div className="seting-l-scroll-support-content">
                    <label className="seting-l-scroll-support-nav-tile">Tiêu chuẩn cộng đồng</label>
                    <Link to="/abc" className="seting-l-scroll-menuitem" style={{ marginLeft: '0px' }}>
                        <div className="seting-l-scroll-menuitem-icon" style={{ marginLeft: '0px' }}>
                            <CgProfile />
                        </div>
                        <div className="seting-l-scroll-menuitem-name">
                            Tiêu chuẩn cộng đồng của chúng tôi
                        </div>
                    </Link>
                   
                  
                </div>
            </div>

        </div>
    );
}

export default SettingSupport_l;