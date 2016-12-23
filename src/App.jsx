/**
 * App组件
 * */ 
import React from 'react';
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Headers />
                <img src="./images/FinixxContentLiBGClick.jpg" alt=""/>
                <div>
                    <Sidebar />
                </div>
                
            </div>
        )
    }
}