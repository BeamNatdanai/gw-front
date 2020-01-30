
import { useState , useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import UserContext from '../context/user';
import Layout from '../components/layout';
import { numberWithCommas } from '../lib/func'

const Profile = (props) => {

    return (
        <UserContext.Consumer>
            {context =>
                <div>
                    <Head>
                        <title> GW | โปรไฟล์ </title>
                    </Head>
                    <Layout>
                        <div className="gw-body-dark">
                            <br/><br/>
                            <div className="container">
                                <p className="gw-text-h2 red text-shadow-gold">ข้อมูลส่วนตัว</p><br/>
                                <p className="gw-text-h3 red text-shadow-gold">ชื่อ : {context.state.name}</p>
                                <p className="gw-text-h3 red text-shadow-gold">ชื่อบัญชี : {context.state.username}</p>
                                <p className="gw-text-h3 red text-shadow-gold">เบอร์ : {context.state.tel}</p>
                                <p className="gw-text-h3 red text-shadow-gold">เครดิต : {numberWithCommas(context.state.credit)}</p>
                            </div>
                        </div>
                    </Layout>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Profile