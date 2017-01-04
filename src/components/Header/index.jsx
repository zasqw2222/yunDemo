import React from 'react';

import Logo from '../Logo/';
import Sidebar from '../Sidebar/';
import Tabs from '../Tabs/';
import Usertool from '../Usertool'

import './index.scss'

import {Menu, Icon} from 'antd';
import {Link} from 'react-router'
export default class HeaderCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.consClick = this.consClick.bind(this);
    }
    componentDidMount() {
    }
    handleClick(e) {
    }
    consClick(index,title,to){
        console.log(arguments)
    }
    render() {
        let tabs = [{
            title: '影片管理',
            to: '/yingpanguanli'
        },{
            title: '影院组管理',
            to: '/yingyuanzuguanli'
        }];
        let currentIndex = 2;
        return (
            <header>
                <div className="headers clearfix">
                    <Logo />
                    <Tabs tabs={tabs} currentIndex={currentIndex} tabClick={(index,title,to) => {this.consClick(index,title,to)}} />
                    <Usertool />
                </div>
            </header>
        )
    }
}