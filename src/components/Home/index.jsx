import React from 'react';
import './index.scss';

import { setViewCut } from 'lib/utility'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vHeight: document.documentElement.clientHeight
        };
    }
    componentDidMount() {
        setViewCut(this);
    }
    componentWillUnmount(){
        window.onresize = null;
    }
    render() {
        return (
            <div
                className="home"
                style={{
                height: this.state.vHeight,
                lineHeight: this.state.vHeight + 'px'
            }}>
                HOME
            </div>
        )
    }
}
