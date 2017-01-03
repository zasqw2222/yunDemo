import React, { Component } from 'react';

import './index.scss';

class Tabs extends Component {
    constructor(props) {
        super(props);
        let tabsArr = [
            '影片管理',
            '影院组管理',
            '流程管理',
            '会员管理',
            '营销活动分析',
            '营销活动分析',
            '营销活动分析',
            '营销活动分析',
            '营销活动分析',
            '营销活动分析',
            '营销活动分析',
        ].concat(['']);
        let len = tabsArr.length;
        console.log(len)
        let curr = 3
        this.state = {
            tabsArr: tabsArr, //tabs 数组
            currentIndex: curr, // 当前tabs
            maxIndex: len, //总共有多少个标签
            consMaxIndex: len, //一个不变的
            consCurrentIndex: curr, // 不变的
            // left: 6 //为了解决 控制left 产生的bug
        };

    }
    tabsClick(index, left) {
        this.setState({
            currentIndex: index,
            // left: left + 6
        });
    }
    render() {
        let {tabsArr, currentIndex, maxIndex} = this.state;
        const {consMaxIndex, consCurrentIndex} = this.state;
        return (
            <div className="tabs clearfix">
                <ul>
                    {tabsArr.map((item, index) => {
                        if (currentIndex == index) {
                            return <li
                                onClick={this
                                    .tabsClick
                                    .bind(this, index, 6)}
                                key={index}
                                style={{
                                    zIndex: maxIndex,
                                    // left: this.state.left
                                }}
                                className="current">
                                {item}
                                <img src={require("../../static/close.png")} alt="close" />
                            </li>
                        } else if (currentIndex < index) {
                            if ((maxIndex - 1) == index) {
                                return <li className="last" key={index}
                                    onClick={this
                                        .tabsClick
                                        .bind(this, index)}
                                    style={{
                                        zIndex: maxIndex - index
                                    }}></li>
                            } else {
                                return <li
                                    key={index}
                                    onClick={this
                                        .tabsClick
                                        .bind(this, index)}
                                    style={{
                                        zIndex: maxIndex - index
                                    }}>{item}</li>
                            }
                        } else if (currentIndex > index) {
                            return <li
                                key={index}
                                onClick={this
                                    .tabsClick
                                    .bind(this, index)}
                                style={{
                                    // left: (consCurrentIndex - index) * 25
                                }}>{item}</li>
                        }
                    })}

                </ul>
            </div>
        )
    }

};

export default Tabs;