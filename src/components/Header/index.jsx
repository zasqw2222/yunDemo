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
    }
    componentDidMount() {
    }
    handleClick(e) {
        // this.setState({current: e.key});
    }
    render() {
        return (
            <header>
                <div className="headers clearfix">
                    <Logo />
                    <Tabs />
                    <Usertool />
                </div>
            </header>
        )
    }
}