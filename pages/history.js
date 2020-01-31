import { useState , useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../components/layout';
import { DatePicker , Button , Table } from 'antd';
import sess , { getItem } from '../lib/session';
import * as moment from 'moment'
moment.locale('th')

const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
  
  const columns = [
        {
            title: <div className="ant-table-gw-text text-shadow-gold">Name</div>,
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render:(text) => { return<div className="ant-table-gw-text text-shadow-white">{text}</div> }
        },
        {
            title: <div className="ant-table-gw-text text-shadow-gold">Age</div>,
            dataIndex: 'age',
            key: 'age',
            align: 'center',
            render:(text) => { return<div className="ant-table-gw-text text-shadow-white">{text}</div> }
        },
        {
            title: <div className="ant-table-gw-text text-shadow-gold">Address</div>,
            dataIndex: 'address',
            key: 'address',
            align: 'center',
            render:(text) => { return<div className="ant-table-gw-text text-shadow-white">{text}</div> }
        },
    ];

const History = (props) => {


    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(mySess.token === null){
            Router.push('/')
        }
    })

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    return (
        <div>
            <Head>
                <title> GW | ประวัติการเล่น </title>
            </Head>
            <Layout>
                    <div className="gw-body-dark">
                        <br/><br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <p className="gw-text-h2 red text-shadow-gold under-line-text">ประวัติการเล่น</p><br/><br/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="gw-card-top">
                                        <div className="row">
                                            <div className="col-12 col-sm-4 col-md-4  offset-lg-3 col-lg-2">
                                                <DatePicker style={{margin:2}} className="gw-datepicker-start" defaultValue={moment()} onChange={onChange} />
                                            </div>
                                            <div className="col-12 col-sm-4 col-md-4 col-lg-2">
                                                <DatePicker style={{margin:2}} className="gw-datepicker-end" defaultValue={moment()} onChange={onChange} />
                                            </div>
                                            <div className="col-12 col-sm-4 col-md-4 col-lg-2">
                                                <Button className="ponter gw-btn-search" >ค้นหา</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gw-card-bottom">
                                        <div className="row">

                                            <div className="col-12">
                                                <p className="gw-text-h4 text-shadow-gold black-orgin pull-left">รายงานประวัติการเล่น</p>
                                            </div><br/><br/>
                                            <div className="col-12">
                                                    <Table size="small" 
                                                    dataSource={dataSource} 
                                                    columns={columns} 
                                                    // scroll={{ x: 1500 }} 
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Layout>
        </div>
    )

} 

export default History