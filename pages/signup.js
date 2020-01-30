
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import sess , { getItem } from '../lib/session';

const Signup = (props) => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(mySess.token !== null){
            Router.push('/home')
        }
    })

    const handleClickSignup = () => {
        const member_name = document.getElementById("member_name").value
        const member_tel = document.getElementById("member_tel").value
        const member_username = document.getElementById("member_username").value
        const member_pass1 = document.getElementById("member_pass1").value
        const member_pass2 = document.getElementById("member_pass2").value
        console.log({member_username,member_tel,member_id,member_pass1,member_pass2})
        event.preventDefault();
    }

    return (
        <div className="gw-body-red">
            <Head>
                <title> GW | ลงทะเบียน </title>
            </Head>
            <div className="container">
                <div className="space-40" />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p className="gw-text-title-1">Games World</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p className="gw-text-h2 white-gold gw-text-default">ลงทะเบียน</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="gw-form">
                            <form onSubmit={()=>{handleClickSignup()}}>
                                <input id="member_name" className="gw-input-middle" placeholder="ชื่อผู้เล่น" maxLength="20" type="text" pattern="[A-Za-z0-9]+" title="กรอกเฉพาะภาษาอังกฤษ และ ตัวเลขเท่านั้น" required/>
                                <input id="member_tel" className="gw-input-middle" placeholder="เบอร์โทร" maxLength="10" type="text" pattern="[0-9]{10}" title="กรอกเฉพาะตัวเลขเท่านั้น และ ต้องมีอักขระ 10 เท่านั้น" required/>
                                <input id="member_username" className="gw-input-middle" placeholder="ชื่อบัญชี" maxLength="16" type="text" pattern="[[A-Za-z0-9]+" title="กรอกเฉพาะภาษาอังกฤษเท่านั้น" required/>
                                <input id="member_pass1" className="gw-input-middle" placeholder="รหัสผ่าน" maxLength="8" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="ต้องมีอักขระ 8 ตัวขึ้นไป ประกอบด้วย ตัวพิมพ์เล็ก และ ตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว" required/>
                                <input id="member_pass2" className="gw-input-middle" placeholder="ยืนยันรหัสผ่าน" maxLength="8" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="ต้องมีอักขระ 8 ตัวขึ้นไป ประกอบด้วย ตัวพิมพ์เล็ก และ ตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว" required/>
                                <br/><br/>
                                <Link href="/"><button className="gw-btn-main pointer" style={{marginRight:8}} >ยกเลิก</button></Link>
                                <input className="gw-btn-main pointer" type="submit" value="ลงทะเบียน" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default Signup