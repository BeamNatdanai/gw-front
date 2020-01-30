
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

const Profile = (props) => {

    return (
        <div>
            <Head>
                <title> GW | โปรไฟล์ </title>
            </Head>
            <Layout>
                <div className="gw-body-dark">
                    <br/><br/>
                    <div className="container">
                        <p className="gw-text-h2">Hello World โปรไฟล์ !</p>
                    </div>
                </div>
            </Layout>
        </div>
    )

} 

export default Profile