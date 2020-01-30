
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
                            <br/><br/>
                            <div className="container">
                            <p className="gw-text-h2">Hello World หน้าหลัก !{context.state.token}</p>
                            </div>
                            <p className="gw-text-h3">context : {context.state.name}</p>
                            <button onClick={()=>{context.updateValue('name','Good Bye')}} className="gw-btn-default pointer">Click Me !</button>
                        </div>
                    </Layout>
                </div>
            }
        </UserContext.Consumer>

    )

} 

export default Home