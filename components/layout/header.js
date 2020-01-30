
import { useState } from 'react'
import Link from 'next/link'
import UserContext from '../../context/user'
import { clear } from '../../lib/session'

const Header = (props) => {

    const [ sidebar , setSidebar ] = useState(false)

    const handleClickMenu = () => {

        if(sidebar){
            window.document.getElementById("mySidebar").style.width = "0";
            window.document.getElementById("main").style.marginLeft= "0";
            setSidebar(false)
        }else{
            window.document.getElementById("mySidebar").style.width = "250px";
            window.document.getElementById("main").style.marginLeft = "250px";
            setSidebar(true)
        }
        
    }

    const logout = (_context) => {
        handleClickMenu()
        _context.clearValueAll()
    }

    return (
        <UserContext.Consumer>
            {context =>
                <div className="gw-header">
                    <div className="gw-container-big">
                        <div className="pull-left">
                            <p className="gw-logo">Games World</p>
                        </div>
                        <div className="pull-right">
                            {(context.state.token === null ? 
                                <div className="menu-nav-zone">
                                    <Link href="/signin"><a><button style={{marginRight:5}} className="gw-btn-defualt pointer" >เข้าสู่ระบบ</button></a></Link>
                                    <Link href="/signup"><a><button style={{marginRight:8}} className="gw-btn-defualt pointer" >ทดลอง</button></a></Link>
                                </div>
                            :
                                <div style={{
                                    position: 'relative',
                                    margin: 0,
                                    marginTop: '34%'
                                    }}>
                                    <img className="menu-icon pointer" style={{marginLeft:10}} src="/static/images/header/menu_defualt.svg" onClick={()=>{handleClickMenu()}} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div id="mySidebar" className="sidebar">
                        <Link href="/home"><a className="pointer"> หน้าหลัก </a></Link>
                        <Link href="/profile"><a className="pointer"> โปรไฟล์ฉัน </a></Link>
                        <Link href="/history"><a className="pointer"> ประวัติการเล่น </a></Link>
                        <Link href="/point"><a className="pointer"> พอยท์ </a></Link>
                        <hr/><a onClick={()=>{logout(context)}}> ออกจากระบบ </a><hr/>
                    </div>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Header