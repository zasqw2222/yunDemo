/**
 * App组件
 * */ 
import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Contend from './components/Content/Content';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Headers />
                <div>
                    <Sidebar />
                    <Contend />
                </div>
                
            </div>
        )
    }
}