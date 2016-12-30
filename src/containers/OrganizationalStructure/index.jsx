import React, {Component} from 'react';
import './index.scss';
import { setViewCut } from 'lib/utility'
export default class OS extends Component {
    constructor(props) {
        super(props)
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
            <div className="os"
            style={{
                height: this.state.vHeight,
                lineHeight: this.state.vHeight + 'px'
            }}
            >
                组织结构管理
            </div>
        )
    }
}