
import { useState , useEffect } from 'react';
import { Popover } from 'antd';
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import Layout from '../../components/layout'
import sess , { getItem } from '../../lib/session';
import UserContext from '../../context/user';
import { isEmpty } from '../../lib/func';

const Game = (props) => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(mySess.token === null){
            Router.push('/')
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const ContentPopover = (_props) => {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input className="gw-input-block" placement="กรอกจำนวนแต้ม" maxLength="4" pattern="[0-9]+" title="กรอกเฉพาะตัวเลขเท่านั้น" /><br/>
                    <center><input className="gw-btn-main-small pointer" type="submit" value="ยืนยัน" /></center>
                </form>
            </div>
        )
    }

    return (
        <UserContext.Consumer>
            {context =>
                <div>
                    <Head>
                        <title> GW | เกมส์ไพ่ </title>
                    </Head>
                    <Layout>
                            <div className="gw-body-dark">
                                <br/><br/><br/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="gw-card-frame">
                                                <iframe className="myIframe" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gw-card-tradebar">
                                        {/* <div className="row">
                                            <div className="col-12">
                                                <p className="gw-text-h2 black text-shadow-gold under-line-text">ขา</p><br/>
                                            </div>
                                        </div> */}
                                        <div className="row">
                                            <div className="offset-1 col-2 offset-md-1 col-md-2 col-lg">
                                                <button className="gw-btn-play-block pointer">1.</button>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <button className="gw-btn-play-block pointer">2.</button>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <button className="gw-btn-play-block pointer">3.</button>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <button className="gw-btn-play-block pointer">4.</button>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <button className="gw-btn-play-block pointer">5.</button>
                                            </div>
                                        </div><br/>
                                        <div className="row">
                                            <div className="offset-1 col-2 offset-md-1 col-md-2 col-lg">
                                                <p className="gw-text-h3 black text-shadow-gold ">0</p>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <p className="gw-text-h3 black text-shadow-gold ">0</p>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <p className="gw-text-h3 black text-shadow-gold ">0</p>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <p className="gw-text-h3 black text-shadow-gold ">0</p>
                                            </div>
                                            <div className="col-2 col-md-2 col-lg">
                                                <p className="gw-text-h3 black text-shadow-gold ">0</p>
                                            </div>
                                        </div>
                                        <br/><hr/><br/>
                                        <div className="gw-container-middle">
                                            {/* <div className="row">
                                                <div className="col-12">
                                                    <p className="gw-text-h2 black text-shadow-gold under-line-text">ชิป</p><br/>
                                                </div>
                                            </div> */}
                                            <div className="row">
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">20.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">50.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">100.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">200.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">300.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">500.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">1,000.-</button>
                                                </div>
                                                <div className="col">
                                                    <button className="gw-btn-play-block pointer">2,000.-</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/><br/>
                            </div>
                    </Layout>
                    <style global jsx>{`

                        .ytp-share-icon {
                            margin: auto;
                            width: 36px;
                            height: 36px;
                            display: none;
                        }

                        .ytp-show-share-title .ytp-share-title {
                            display: none;
                        }

                    `}</style>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Game