import React,{useState} from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
function SetingPrivacy_c_post(props) {
    const [open,setOpen] = useState(true    )
    const[friendstatus,setfriendstatus]=useState("Mọi người")
    const onchangeSetingfriend = (e) =>{
        setfriendstatus(e.target.value)
        setOpen(!open)
    }
    return (
        <div className="seting-c">
            <div className="seting-c-scroll" id="seting-c-scroll-style">
                
                <div className="seting-c-scroll-nav">
                    Thông tin của bạn trên Fooobe
                </div>
                <div className="seting-c-scroll-content-privacy-row" style={{display:'flex',justifyContent:'space-between'}}>
                        <div className="seting-c-scroll-content-privacy-th" >
                            Ai có thể theo dõi tôi
                        </div>
                        <div className="seting-c-scroll-content-privacy-td" >
                            <label className="seting-c-scroll-content-privacy-td-label seting-font-pale" >Người theo dõi sẽ nhìn thấy bài viết của bạn trong Bảng tin. Theo mặc định thì bạn bè sẽ theo dõi bài viết của bạn, nhưng bạn cũng có thể để những người không phải là bạn bè theo dõi bài viết công khai của mình. Hãy sử dụng cài đặt này để chọn người có thể theo dõi bạn.</label>

                        </div>
                        

                            {open  ? <div className="seting-c-scroll-content-row-link" style={{ Width:'20%',display:'flex',justifyContent:'space-between',alignItems:''}}>
                            <label onClick={()=>setOpen(!open)}>{friendstatus} </label>
                            </div>:
                             <div className="seting-c-scroll-content-row-link" > <div style={{ minWidth:'100%',height:'40px',  display: 'flex', justifyContent: 'center'}}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Mọi người">Mọi người</option>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div></div>}
                        
                    </div>
                   
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua',marginTop:'10px' }}></div>
                    <div className="seting-c-scroll-content-privacy-row" style={{display:'flex',justifyContent:'space-between'}}>
                        <div className="seting-c-scroll-content-privacy-th" >
                            Ai có thể bình luận 
                        </div>
                        <div className="seting-c-scroll-content-privacy-td" >
                            <label className="seting-c-scroll-content-privacy-td-label seting-font-pale" >Ai có thể bình luận về những bài viết công khai của bạn?</label>

                        </div>
                        

                            {open  ? <div className="seting-c-scroll-content-row-link" style={{ minWidth:'15%',display:'flex',justifyContent:'space-between',alignItems:''}}>
                            <label onClick={()=>setOpen(!open)}>{friendstatus} </label>
                            </div>:
                             <div className="seting-c-scroll-content-row-link" > <div style={{ minWidth:'100%',height:'40px',  display: 'flex', justifyContent: 'center'}}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div></div>}
                        
                    </div>
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua',marginTop:'10px' }}></div>
                    <div className="seting-c-scroll-content-privacy-row" style={{display:'flex',justifyContent:'space-between'}}>
                        <div className="seting-c-scroll-content-privacy-th" >
                            Thông tin cá nhân
                        </div>
                        <div className="seting-c-scroll-content-privacy-td" >
                            <label className="seting-c-scroll-content-privacy-td-label seting-font-pale" >Ai có thể thích hoặc bình luận về ảnh đại diện công khai và các thông tin khác trên trang cá nhân của tôi?</label>

                        </div>
                        

                            {open  ? <div className="seting-c-scroll-content-row-link" style={{ minWidth:'15%',display:'flex',justifyContent:'space-between',alignItems:''}}>
                            <label onClick={()=>setOpen(!open)}>{friendstatus} </label>
                            </div>:
                             <div className="seting-c-scroll-content-row-link" > <div style={{ minWidth:'100%',height:'40px',  display: 'flex', justifyContent: 'center'}}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div></div>}
                        
                    </div>
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua',marginTop:'10px' }}></div>
                    <div className="seting-c-scroll-content-privacy-row" style={{display:'flex',justifyContent:'space-between'}}>
                        <div className="seting-c-scroll-content-privacy-th" >
                            Thông báo về bài viết
                        </div>
                        <div className="seting-c-scroll-content-privacy-td" >
                            <label className="seting-c-scroll-content-privacy-td-label seting-font-pale" >Bạn có thể được thông báo khi những người không phải là bạn bè bắt đầu theo dõi bạn và chia sẻ, thích hay bình luận về những bài viết công khai của bạn. Bật thông báo này cho</label>

                        </div>
                        

                            {open  ? <div className="seting-c-scroll-content-row-link" style={{ minWidth:'15%',display:'flex',justifyContent:'space-between',alignItems:''}}>
                            <label onClick={()=>setOpen(!open)}>{friendstatus} </label>
                            </div>:
                             <div className="seting-c-scroll-content-row-link" > <div style={{ minWidth:'100%',height:'40px',  display: 'flex', justifyContent: 'center'}}>
                                <select value={friendstatus} onChange={onchangeSetingfriend} style={{ width: '80%', height: '60%', outline: 'none', borderRadius: '10px' }}>
                                    <option value="Bạn bè">Bạn bè</option>
                                    <option value="chỉ mình tôi">Chỉ mình tôi</option>
                                </select>

                            </div></div>}
                        
                    </div>
                    <div style={{ width: '98%', borderBottom: '0.1px solid aqua',marginTop:'10px' }}></div>
                    
                <div className="seting-c-scroll-footer">

                </div>
            </div>

        </div>
    );
}

export default SetingPrivacy_c_post;