
import { useState } from 'react'
import Link from 'next/link'
import UserContext from '../../context/user'
import { clear } from '../../lib/session'
import { numberWithCommas } from '../../lib/func'

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
                    {(context.state.token === null ? 
                        <div className="gw-container-big">
                            <div className="pull-left">
                                <div className="gw-logo-box">
                                    <p className="gw-logo">Games World</p>
                                </div>
                            </div>
                            <div className="pull-right">
                                <div className="menu-nav-zone">
                                    <Link href="/signin"><a><button style={{marginRight:5}} className="gw-btn-default btm-menu pointer"  >เข้าสู่ระบบ</button></a></Link>
                                    <Link href="/signup"><a><button style={{marginRight:8}} className="gw-btn-default btm-menu pointer" >ลงทะเบียน</button></a></Link>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="gw-container-big">
                            <div className="pull-left">
                                <div className="row gw-logo-box-mobile">
                                    <img className="menu-icon  pointer" style={{marginLeft:10}} src="/static/images/header/menu_default.svg" onClick={()=>{handleClickMenu()}} />
                                    <p className="gw-logo">Games World</p>   
                                </div>
                            </div>
                            <div className="pull-right">
                                <div className="row menu-nav-coin-zone">
                                    <p className="gw-text-h5 black text-shadow-white">{`$ : ${numberWithCommas(context.state.credit)}`}</p>
                                </div>
                            </div>
                        </div>
                    // <div className="menu-mobile-zone" >
                    //     <img className="menu-icon pointer" style={{marginLeft:10}} src="/static/images/header/menu_default.svg" onClick={()=>{handleClickMenu()}} />
                    // </div>
                    )}

                    <div id="mySidebar" className="sidebar">
                        <Link href="/home"><a className="pointer"> หน้าหลัก </a></Link>
                        <Link href="/profile"><a className="pointer"> ข้อมูลส่วนตัว </a></Link>
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