
import { useState , useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
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

    const clickTrade = (_point) => {

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
                                            <iframe className="myIframe"  src="https://www.youtube.com/embed/Ze07T5VScVg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="gw-card-tradebar">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <button onClick={()=>{clickTrade(20)}} className="gw-btn-play-block pointer">1.</button>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <button onClick={()=>{clickTrade(50)}} className="gw-btn-play-block pointer">2.</button>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <button onClick={()=>{clickTrade(100)}} className="gw-btn-play-block pointer">3.</button>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                                <button onClick={()=>{clickTrade(500)}} className="gw-btn-play-block pointer">4.</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Layout>
                </div>
            }
        </UserContext.Consumer>
    )

} 

export default Game