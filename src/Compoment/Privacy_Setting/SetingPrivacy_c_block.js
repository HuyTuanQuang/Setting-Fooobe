import React, { useState } from 'react';

function SetingPrivacy_c_block(props) {
    const [listblock, setlistblock] = useState([
        {
            id: '1',
            name: 'Quang'
        },
        {
            id: '2',
            name: 'Phương'
        },
        {
            id: '3',
            name: 'Chương'
        },
        {
            id: '4',
            name: 'Mạnh'
        },
        {
            id: '5',
            name: 'hoa'
        },
    ])
    const Remove = (id) => {
        const newList = listblock.filter((val) => val.id !== id);
        
        setlistblock(newList)
        
    }

    return (
        <div className="seting-c">
            <div className="seting-c-scroll" id="seting-c-scroll-style">
                <div className="seting-c-scroll-nav">
                    Quản lý chặn
                </div>
                <div className="seting-c-scroll-content">
                    <div className="seting-c-scroll-content-privacy-row">
                        <div className="seting-c-scroll-content-privacy-row-th">
                            Lối tắt quyền riêng tư
                        </div>
                        <div className="seting-c-scroll-content-privacy-td">
                            <label className="seting-font-pale"> Ngay khi bạn chặn ai đó, người này không thể xem nội dung đăng trên dòng thời gian của bạn, gắn thẻ bạn, mời bạn tham gia sự kiện hoặc nhóm, bắt đầu cuộc trò chuyện với bạn hay thêm bạn vào danh sách bạn bè nữa. Lưu ý: Không bao gồm các ứng dụng, trò chơi hay nhóm mà cả bạn và người này đều tham gia.</label>

                        </div>
                    </div>
                    <div className="seting-c-scroll-content-privacy-row">
                        <div className="seting-c-scroll-content-privacy-th">

                        </div>
                        <div className="seting-c-scroll-content-privacy-td" style={{ minHeight: '50px', backgroundColor: 'aquamarine', display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontWeight: '600', margin: '5px' }}>Danh sách chặn</label>
                            {listblock.map((val) => {
                                return (           
                                    <label  key={val.id}  style={{ padding: '10px',width:'100%', display: 'flex', justifyContent: 'space-between' }}>{val.name} <label className="seting-c-scroll-content-row-link" style={{width:'30%'}} onClick={()=>Remove(val.id)}>Bỏ chặn</label></label>
                                )
                                })}
                        </div>
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

export default SetingPrivacy_c_block;