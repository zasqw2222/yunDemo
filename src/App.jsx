/**
 * App组件
 * */
import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
// import Contend from './components/Content/Content';

import './css/antd.min.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Headers/>
                <div>
                    <Sidebar/>
                    <div className="content">
                        {this.props.children}
                    </div>

                </div>

            </div>
        )
    }
}