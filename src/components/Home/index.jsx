import React from 'react';
import './index.scss';

import { setViewCut } from 'lib/utility'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    }
    render() {
        return (
           <div className="home">
                <div className="TitleContend">1111111</div>
                <div className="TitleContend">2222222<br />3333333333</div>
           </div>
        )
    }
}
