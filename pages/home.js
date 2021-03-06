
import { useState , useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/layout';
import sess , { getItem } from '../lib/session';
import UserContext from '../context/user';
import { isEmpty } from '../lib/func';

const Home = (props) => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(mySess.token === null){
            Router.push('/')
        }
    })

    return (

        <UserContext.Consumer>
            {context =>
                <div>
                    <Head>
                        <title> GW | หน้าหลัก </title>
                    </Head>
                    <Layout>
                        <div className="gw-body-dark">
                            <br/><br/><br/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Link href="/game/card"><img className="pointer" style={{width:'100%',height:'auto'}} src="/static/images/games/img_cardgame.jpg" /></Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <center><div style={{marginTop:20,width:200}}><Link href="/game/card"><button className="gw-btn-play-block pointer">เล่นเกมส์</button></Link></div></center>
                                    </div>
                                </div>
                            </div>
                            <br/><br/>
                        </div>
                    </Layout>
                </div>
            }
        </UserContext.Consumer>

    )

} 

export default Home