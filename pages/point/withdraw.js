
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const Withdraw = (props) => {

    return (
        <div>
            <Head>
                <title> GW | ถอนพอยท์ </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/><br/>
                        <p className="gw-text-h2">ถอน</p>
                    </div>
            </Layout>
        </div>
    )

} 

export default Withdraw