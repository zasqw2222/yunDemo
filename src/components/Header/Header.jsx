import React from 'react';
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
    handleClick(e) {
        if('home' == e.key){
            this.props.nChangeTabname('HOME')
        }
        this.setState({current: e.key});
    }
    render() {
        console.log(this.porps)
        return (
            <div className="headers">
                <div className="con">
                    <Menu
                        onClick={this.handleClick.bind(this)}
                        selectedKeys={[this.state.current]}
                        mode="horizontal">
                        <Menu.Item key="home">
                            <Link to="/">{this.props.name || 'HOME'}</Link>
                        </Menu.Item>
                        <Menu.Item key="app">
                            <Icon type="appstore"/>第二
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            <a href="#" target="_blank" rel="noopener noreferrer">第三</a>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        )
    }
}