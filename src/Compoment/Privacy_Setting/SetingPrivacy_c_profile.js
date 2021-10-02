import React, { useState } from 'react';

function SetingPrivacy_c_profile(props) {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(true);

    const [friendstatus, setftriend] = useState("Bạn bè");
    const [othersProfile, setothersProfile] = useState("Mọi người");
    const [comentProfile, SetcomentProfile] = useState("Bạn bè");
    const onchangeSetingfriend = (e) => {
        console.log(e.target.value)
        setftriend(e.target.value)
    }
    const onchangeSetingotherProfile = (e) => {
        console.log(e.target.value)
        setothersProfile(e.target.value)
    }
    const onchangeSetingcomentProfile = (e) => {
        console.log(e.target.value)
        SetcomentProfile(e.target.value)
    }

    return (
        <div className="seting-c">
            <div className="seting-c-scroll" id="seting-c-scroll-style">
                <div className="seting-c-scroll-nav">
                    Trang cá nhân và gắn thẻ
                </div>
                <div className="seting-c-scroll-content">
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>
                            Xem và chia sẻ
                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Ai có thể đăng lên trang cá nhân của bạn
                        </div>
                        {open ? <div style={{ width: '20%' }}>
                            {friendstatus}
                        </div>
                            :
                            <div style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div>
                        }
                        {
                            open ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen(!open)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen(!open)}>
                                    Đóng
                                </div>
                        }
                    </div>
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>

                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Chọn danh sách từ, cụm từ hoặc biểu tượng cảm xúc bạn muốn ẩn khỏi Trang cá nhân.
                        </div>
                        {open1 ? <div style={{ width: '20%' }}>
                            {othersProfile}
                        </div>
                            :
                            <div style={{ width: '20%',  display: 'flex', justifyContent: 'center' }}>
                            <select value={othersProfile} onChange={onchangeSetingotherProfile} style={{ width: '80%', height: '50%', outline: 'none', borderRadius: '10px' }}>
                                <option value="Mọi người">Mọi người</option>
                                <option value="Bạn bè">Bạn bè</option>
                                <option value="Bạn bè cụ thể">Bạn bè cụ thể</option>
                                <option value="chỉ mình tôi">Chỉ mình tôi</option>
                            </select>

                        </div>
                        }
                        {
                            open1 ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen1(!open1)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen1(!open1)}>
                                    Đóng
                                </div>
                        }
                    </div>
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>

                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Ai có thể xem những gì người khác đăng lên trang cá nhân của bạn?
                        </div>
                        {open2 ? <div style={{ width: '20%' }}>
                            {comentProfile}
                        </div>
                            :
                            <div style={{ width: '20%', display: 'flex', justifyContent: 'center' }}>
                            <select value={comentProfile} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                <option value="Mọi người">Mọi người</option>
                                <option value="Bạn bè">Bạn bè</option>
                                <option value="Bạn bè cụ thể">Bạn bè cụ thể</option>
                                <option value="chỉ mình tôi">Chỉ mình tôi</option>
                            </select>

                        </div>
                        }
                        {
                            open2 ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen2(!open2)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen2(!open2)}>
                                    Đóng
                                </div>
                        }
                    </div>

                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>
                    
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>
                           Gắn thẻ
                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Ai có thể đăng lên trang cá nhân của bạn
                        </div>
                        {open ? <div style={{ width: '20%' }}>
                            {friendstatus}
                        </div>
                            :
                            <div style={{ width: '20%',  display: 'flex', justifyContent: 'center'}}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div>
                        }
                        {
                            open ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen(!open)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen(!open)}>
                                    Đóng
                                </div>
                        }
                    </div>
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>

                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Chọn danh sách từ, cụm từ hoặc biểu tượng cảm xúc bạn muốn ẩn khỏi Trang cá nhân.
                        </div>
                        {open1 ? <div style={{ width: '20%' }}>
                            {othersProfile}
                        </div>
                            :
                            <div style={{ width: '20%',  display: 'flex', justifyContent: 'center' }}>
                            <select value={othersProfile} onChange={onchangeSetingotherProfile} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                <option value="Mọi người">Mọi người</option>
                                <option value="Bạn bè">Bạn bè</option>
                                <option value="Bạn bè cụ thể">Bạn bè cụ thể</option>
                                <option value="chỉ mình tôi">Chỉ mình tôi</option>
                            </select>

                        </div>
                        }
                        {
                            open1 ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen1(!open1)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen1(!open1)}>
                                    Đóng
                                </div>
                        }
                    </div>
                    <div className="seting-c-scroll-content-privacy-row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className="seting-c-scroll-content-privacy-th" style={{ width: '22%', fontWeight: '600' }}>

                        </div>
                        <div style={{ width: '40%', opacity: '0.7', fontSize: '11pt' }}>
                            Ai có thể xem những gì người khác đăng lên trang cá nhân của bạn?
                        </div>
                        {open2 ? <div style={{ width: '20%' }}>
                            {comentProfile}
                        </div>
                            :
                            <div style={{ width: '20%',  display: 'flex', justifyContent: 'center' }}>
                            <select value={comentProfile} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                <option value="Mọi người">Mọi người</option>
                                <option value="Bạn bè">Bạn bè</option>
                                <option value="Bạn bè cụ thể">Bạn bè cụ thể</option>
                                <option value="chỉ mình tôi">Chỉ mình tôi</option>
                            </select>

                        </div>
                        }
                        {
                            open2 ? <div style={{ width: '15%' }} className="Seting_link" onClick={() => setOpen2(!open2)}>
                                Chỉnh sửa
                            </div>
                                :
                                <div style={{ width: '15%',  display: 'flex', justifyContent: 'space-evenly' }} className="Seting_link" onClick={() => setOpen2(!open2)}>
                                    Đóng
                                </div>
                        }
                    </div>

                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua', marginTop: '10px' }}></div>
                    
                    </div>
                    
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                <div className="seting-c-scroll-footer">

                </div>
            </div>

        </div>
    );
}

export default SetingPrivacy_c_profile;