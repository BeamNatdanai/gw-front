
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const Game = (props) => {

    return (
        <div>
            <Head>
                <title> GW | เกมส์ทั้งหมด </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/>
                        <div className="container">
                            <p className="gw-text-h2 default">อยู่ในระหว่าง พัฒนาค่ะ</p>
                        </div>
                    </div>
            </Layout>
        </div>
    )

} 

export default Game