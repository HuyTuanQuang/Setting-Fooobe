import React from 'react';

function SetingAcount_c(props) {
    return (
        <div className="seting-c">
            <div className="seting-c-scroll" id="seting-c-scroll-style">
                <div className="seting-c-scroll-nav">
                    Cài đặt chung cho tài khoản
                </div>
                <div className="seting-c-scroll-content">
                    <div className="seting-c-scroll-content-row">
                        <div className="seting-c-scroll-content-row-th">
                            Tên
                        </div>
                        <div className="seting-c-scroll-content-row-td">
                            Quang
                        </div>
                        <div className="seting-c-scroll-content-row-link">
                            Chỉnh sửa
                        </div>
                    </div>
                    <div className="seting-c-scroll-content-row">
                        <div className="seting-c-scroll-content-row-th">
                            Tên người dùng
                        </div>

                        <div className="seting-c-scroll-content-row-td">
                            <div
                                style={{
                                    width: "100%",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                https://www.fooobe.com/m19036420970019
                            </div>


                        </div>

                        <div className="seting-c-scroll-content-row-link">
                            Chỉnh sửa
                        </div>
                    </div>
                    <div className="seting-c-scroll-content-row">
                        <div className="seting-c-scroll-content-row-th">
                            Cài đặt tưởng nhớ
                        </div>
                        <div className="seting-c-scroll-content-row-td">
                            Quang
                        </div>
                        <div className="seting-c-scroll-content-row-link">
                            Chỉnh sửa
                        </div>
                    </div>
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                </div>
                <div style={{ width: '98%', borderBottom: '0.1px solid aqua' }}></div>
                <div className="seting-c-scroll-footer">

                </div>
            </div>

        </div>
    );
}

export default SetingAcount_c;