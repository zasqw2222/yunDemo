import React from 'react';
import './index.scss'

import {Link} from 'react-router'

import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

export default class HeaderCom extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick(e) {}
    onchangename(name, e) {}
    render() {
        return (
            <div className="sidebar">
                <Menu mode="inline" style={{width:142}}>
                    <SubMenu key="sub1" style={{paddingLeft:20}} title={< span >< span ><Link to="/" >HOME</Link></span></span >} >
                        <Menu.Item key="1"><Link to="organizationalstructure">组织架构管理</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="departmentdetails">部门管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" style={{paddingLeft:20}} title={< span >< span > 项目2 < /span></span >} >
                        <Menu.Item key="1">子项目1</Menu.Item>
                        <Menu.Item key="2">子项目2</Menu.Item>
                        <Menu.Item key="3">子项目3</Menu.Item>
                        <Menu.Item key="4">子项目4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" style={{paddingLeft:20}} title={< span >< span > 项目3 < /span></span >} >
                        <Menu.Item key="1">子项目1</Menu.Item>
                        <Menu.Item key="2">子项目2</Menu.Item>
                        <Menu.Item key="3">子项目3</Menu.Item>
                        <Menu.Item key="4">子项目4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" style={{paddingLeft:20}} title={< span >< span > 项目4 < /span></span >} >
                        <Menu.Item key="1">子项目1</Menu.Item>
                        <Menu.Item key="2">子项目2</Menu.Item>
                        <Menu.Item key="3">子项目3</Menu.Item>
                        <Menu.Item key="4">子项目4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" style={{paddingLeft:20}} title={< span >< span > 项目5 < /span></span >} >
                        <Menu.Item key="1">子项目1</Menu.Item>
                        <Menu.Item key="2">子项目2</Menu.Item>
                        <Menu.Item key="3">子项目3</Menu.Item>
                        <Menu.Item key="4">子项目4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}