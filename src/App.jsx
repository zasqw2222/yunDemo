/**
 * App组件 负责总入口
 * */
import React from 'react';
import {connect} from 'react-redux'
import { changeTabName } from './actions'

// console.log(index)
            console.log(changeTabName)
import Headers from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

class App extends React.Component {
    render() {
        const {dispatch, name} = this.props;

        return (
            <div>
                <Headers name={name} nChangeTabname={name => dispatch(changeTabName(name))}/>
                <div>
                    <Sidebar onChangeTabname={name => dispatch(changeTabName(name))}/>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(App)
