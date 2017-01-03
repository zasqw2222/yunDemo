import React, {Component} from 'react';

import './index.scss';

class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <img src={require("../../static/logo.png")} alt="logo"/>
                <span >凤凰佳影 | 云售票</span>
                <img
                    className="logo_menuicon"
                    src={require("../../static/menuicon.png")}
                    alt="menuicon"/>
            </div>
        )
    }
}

export default Logo;