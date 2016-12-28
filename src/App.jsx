/**
 * App组件 负责总入口
 * */
import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

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
