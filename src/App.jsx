/**
 * App组件 负责总入口
 * */
import React from 'react';
import {connect} from 'react-redux'

import Headers from './components/Header';


class App extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Headers/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function select(state) {
    return state;
}

export default connect(select)(App)
