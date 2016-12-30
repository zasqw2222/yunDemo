import React from 'react';

import Sidebar from '../Sidebar/'

import './index.scss'

import {Menu, Icon} from 'antd';
import {Link} from 'react-router'
export default class HeaderCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 'mail'
        }
    }
    componentDidMount() {
        console.log(this.props.getAsyncData)
    }
    handleClick(e) {
        if ('home' == e.key) {
            this
                .props
                .nChangeTabname('HOME')
        }
        this.setState({current: e.key});
    }
    render() {
        return (
            <header>
                <div className="headers">
                    <div className="logo">
                        <a href="/">LOGO
                            <img src="" alt=""/>
                        </a>
                        <div className="Sidebar">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="con">
                        
                    </div>
                </div>
            </header>
        )
    }
}