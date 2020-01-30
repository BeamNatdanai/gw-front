import { useState } from 'react'
import Head from 'next/head';
import Layout from '../components/layout';

const Home = () => (
  <div>
      <Head>
          <title> GW | Game world </title>
      </Head>
      <Layout>
            <div className="gw-body-dark">
                <br/><br/>
                <div className="container">
                    Hello World
                </div>
            </div>
      </Layout>
  </div>
)

export default Home
