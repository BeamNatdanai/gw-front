
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const Game = (props) => {

    return (
        <div>
            <Head>
                <title> GW | เกมส์ไพ่ </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/>
                        <div className="container">
                            <p className="gw-text-h2">Hello World เกมส์ไพ่ !</p>
                        </div>
                    </div>
            </Layout>
        </div>
    )

} 

export default Game