
import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import UserContext from '../context/user';
import sess , { getItem , setItem } from '../lib/session';
import { signIn } from '../api/user'

const Signin = (props) => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(mySess.token !== null){
            Router.push('/home')
        }
    })

    const handleClickSignin = async (_context) => {
        event.preventDefault();
        const member_username = document.getElementById("member_username").value
        const member_pass = document.getElementById("member_pass").value

        const ResSignin = await signIn({
            user_id: member_username,
            user_pass: member_pass
        })

        if(ResSignin.status){
            console.log({ResSignin})
            alert('ยินดีต้อนรับ "'+ResSignin.data.member.user_name+'" เข้าสู่ระบบค่ะ')
            const user = {
                _id: ResSignin.data.member._id,
                name: ResSignin.data.member.user_name,
                username: ResSignin.data.member.user_id,
                tel: ResSignin.data.member.user_tel,
                credit: ResSignin.data.member.user_credit,
                token: ResSignin.data.token,
            }
            setItem(sess.name,user)
            _context.updateValueObj({
                _id: '19293810',
                name: 'Jonh',
                username: member_username,
                tel: '0835608224',
                credit: 5000,
                token: 'HF1037FHHRjj0912',
            })
            setTimeout(()=>{
                Router.push('/home')
            },1000)

        }else{
            alert('รหัสผ่าน และ ชื่อบัญชีไม่ตรงกัน')
        }
 
    }

    return (
        <UserContext.Consumer>
            {context =>
                <div className="gw-body-red">
                    <Head>
                        <title> GW | ยืนยันตัวตน </title>
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
                            <p className="gw-text-h2 white-gold gw-text-default">ยืนยันตัวตน</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="gw-form">
                                    <form onSubmit={()=>{handleClickSignin(context)}}>
                                        <input id="member_username" className="gw-input-middle" placeholder="ชื่อบัญชี" maxLength="16" type="text" pattern="[[A-Za-z0-9]+" title="กรอกเฉพาะภาษาอังกฤษเท่านั้น" required/>
                                        <input id="member_pass" className="gw-input-middle" placeholder="รหัสผ่าน" maxLength="8" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="ต้องมีอักขระ 8 ตัวขึ้นไป ประกอบด้วย ตัวพิมพ์เล็ก และ ตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว" required/>
                                        <br/><br/>
                                        <Link href="/"><button className="gw-btn-main pointer" style={{marginRight:8}} >ยกเลิก</button></Link>
                                        <input className="gw-btn-main pointer" type="submit" value="ยืนยัน" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Signin