
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const Deposit = (props) => {

    return (
        <div>
            <Head>
                <title> GW | เติมพอยท์ </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/><br/>
                        <p className="gw-text-h2">เพิ่ม</p>
                    </div>
            </Layout>
        </div>
    )

} 

export default Deposit