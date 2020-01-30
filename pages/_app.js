import App from 'next/app';
import 'antd/dist/antd.css';
import Router from 'next/router';
import UserContext from '../context/user';
import sess , { getItem , setItem } from '../lib/session';
import { isEmpty } from '../lib/func';

class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            name: null,
            username: null,
            credit: 0,
            token: null,
        };
    }

    componentDidMount(){
        if(isEmpty(getItem(sess.name))){
            setItem(sess.name,{
                _id: null,
                name: null,
                username: null,
                credit: 0,
                token: null,
            })
        }else{
            const mySess = getItem(sess.name)
            this.setState({
                _id: mySess._id,
                name: mySess.name,
                username: mySess.username,
                credit: mySess.credit,
                token: mySess.token,
            })
        }
    }

    componentDidUpdate(prevProps , prevState){
        if(prevState.token !== this.state.token){

            if(isEmpty(getItem(sess.name))){
                setItem(sess.name,{
                    _id: null,
                    name: null,
                    username: null,
                    credit: 0,
                    token: null
                })
            }else{
                const mySess = getItem(sess.name)
                this.setState({
                    _id: mySess._id,
                    name: mySess.name,
                    username: mySess.username,
                    credit: mySess.credit,
                    token: mySess.token,
                })
            }

        }

    }

    updateValue = (key, val) => {
        this.setState({[key]: val});
    }

    updateValueObj = (val) => {
        this.setState({
            _id: val._id,
            name: val.name,
            username: val.username,
            credit: val.credit,
            token: val.token
        });
    }

    clearValueAll = () => {

        setItem(sess.name,{
            _id: null,
            name: null,
            username: null,
            credit: 0,
            token: null,
        })

        this.setState({
            _id: null,
            name: null,
            username: null,
            credit: 0,
            token: null,
        });

        Router.push('/')
    }
    
    render() {
        const { Component, pageProps } = this.props
        return (
            <UserContext.Provider value={{state: this.state , updateValue: this.updateValue , clearValueAll: this.clearValueAll , updateValuUser: this.updateValuUser , updateValueObj: this.updateValueObj }} >
                <Component {...pageProps} />
            </UserContext.Provider>
        )
    }
  
}

export default MyApp