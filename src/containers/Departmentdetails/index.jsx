import React, {Component} from 'react';
import { Link } from 'react-router';
import './index.scss';
import { setViewCut } from 'lib/utility'
export default class Departmentdetails extends Component {
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
            <div className="departmentdetails"
            style={{
                height: this.state.vHeight,
                lineHeight: this.state.vHeight + 'px'
            }}
            >
            <div className="message">

            </div>
                部门详情
                <Link to="/departmentdetails/baojie">保洁部</Link>
            </div>
        )
    }
}