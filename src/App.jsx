/**
 * App组件 负责总入口
 * */
import React from 'react';
import {connect} from 'react-redux'
import {changeTabName,asyncGetData} from './actions'

import Headers from './components/Header';

class App extends React.Component {
    componentDidMount() {
        // const {dispatch} = this.props;
        this.props.dispatch(asyncGetData());
    }
    render() {
        const {dispatch, name, asyncData} = this.props;
        return (
            <div>
                <Headers
                    name={name}
                    getAsyncData={asyncData}
                    nChangeTabname={name => dispatch(changeTabName(name))}/>
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
