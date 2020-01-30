
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const Point = (props) => {

    return (
        <div>
            <Head>
                <title> GW | พอยท์ </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/><br/>
                        <div className="container">
                            <Link href="/point/deposit"><button style={{marginRight:10}} className="gw-btn-lg-main pointer">เติมพอยท์</button></Link>
                            <Link href="/point/withdraw"><button className="gw-btn-lg-main pointer">แลกพอยท์</button></Link>
                        </div>
                    </div>
            </Layout>
        </div>
    )

} 

export default Point