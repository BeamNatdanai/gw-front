
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

    // const  useState

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
                                                <iframe className="myIframe"  src="https://www.youtube.com/embed/Ze07T5VScVg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gw-card-tradebar">
                                        <div className="row">
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <Popover placement="bottomLeft" title={<p className="gw-text-h4 red text-shadow-gold">กรอกแต้ม</p>} content={<ContentPopover />} trigger="click" arrowPointAtCenter>
                                                    <button className="gw-btn-play-block pointer">1.</button>
                                                </Popover>
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <Popover placement="bottomLeft" title={<p className="gw-text-h4 red text-shadow-gold">กรอกแต้ม</p>} content={<ContentPopover />} trigger="click" arrowPointAtCenter>
                                                    <button className="gw-btn-play-block pointer">2.</button>
                                                </Popover>
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <Popover placement="bottomLeft" title={<p className="gw-text-h4 red text-shadow-gold">กรอกแต้ม</p>} content={<ContentPopover />} trigger="click" arrowPointAtCenter>
                                                    <button className="gw-btn-play-block pointer">3.</button>
                                                </Popover>
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <Popover placement="bottomLeft" title={<p className="gw-text-h4 red text-shadow-gold">กรอกแต้ม</p>} content={<ContentPopover />} trigger="click">
                                                    <button className="gw-btn-play-block pointer">4.</button>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/><br/><br/>
                            </div>
                    </Layout>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Game