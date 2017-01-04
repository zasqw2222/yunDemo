/**
 * Tabs组件
 * props : 
 *      tabs: [
 *          {
 *              title string tabs 标题
 *              to: string 路由地址
 *          }
 *      ],
 *      currentIndex: number 当前第几个被选中
 *      tabClick: func p1: index p2:title p3:uri
 * 
 * */ 
import React, {Component} from 'react';
import {extendArr} from '../../../lib/utility';
import './index.scss';

class Tabs extends Component {
    constructor(props) {
        super(props);
        let tabsArr,
            len,
            curr;
        // this.props.tabs
        tabsArr = this.props.tabs.concat(['']);
        len = tabsArr.length;
        curr = this.props.currentIndex - 1;
        this.state = {
            tabsArr: tabsArr, //tabs 数组
            currentIndex: curr, // 当前tabs
            maxIndex: len //总共有多少个标签
        };

    }
    addToTabs() {
        this.state.tabsArr.splice(-1, 0, {title:'新标签',to: '*'})
        this.setState({
            tabsArr: this.state.tabsArr,
            maxIndex: this.state.tabsArr.length
        });
    }
    tabsClick(index,title,to, e) {
        if ('last' === e.target.className) {
            this.addToTabs();
            return;
        }
        this.setState({currentIndex: index});
        // 
        console.log(arguments)
        this.props.tabClick(index,title, to)
    }
    imgClick(index, e) {
        let tempArr,
            len;
        e.stopPropagation();
        if (this.state.tabsArr.length == 2) {
             this.addToTabs();
             tempArr = extendArr(tempArr, this.state.tabsArr);
             tempArr.splice(index, 1);
             len = tempArr.length;
        }else{
            tempArr = extendArr(tempArr, this.state.tabsArr);
            tempArr.splice(index, 1);
            len = tempArr.length;
        }
        this.setState({tabsArr: tempArr, maxIndex: len, currentIndex: 0});
    }
    render() {
        let {tabsArr, currentIndex, maxIndex} = this.state;
        return (
            <div className="tabs clearfix">
                <ul>
                    {tabsArr.map((item, index) => {
                        if (currentIndex == index) {
                            return <li
                                onClick={this
                                .tabsClick
                                .bind(this, index, item.title, item.to)}
                                key={index}
                                style={{
                                zIndex: maxIndex
                            }}
                                className="current">
                                {item.title}
                                <img
                                    onClick={this
                                    .imgClick
                                    .bind(this, index, item.title, item.to)}
                                    src={require("../../static/close.png")}
                                    alt="close"/>
                                <div className="cover"></div>
                            </li>
                        } else if (currentIndex < index) {
                            if ((maxIndex - 1) == index) {
                                return <li
                                    className="last"
                                    key={index}
                                    onClick={this
                                    .tabsClick
                                    .bind(this, index, item.title, item.to)}
                                    style={{
                                    zIndex: maxIndex - index
                                }}></li>
                            } else {
                                return <li
                                    key={index}
                                    onClick={this
                                    .tabsClick
                                    .bind(this, index, item.title, item.to)}
                                    style={{
                                    zIndex: maxIndex - index
                                }}>{item.title}</li>
                            }
                        } else if (currentIndex > index) {
                            return <li
                                key={index}
                                onClick={this
                                .tabsClick
                                .bind(this, index, item.title, item.to)}
                                style={{}}>{item.title}</li>
                        }
                    })}

                </ul>
            </div>
        )
    }

};

Tabs.propTypes = {
    tabs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    currentIndex: React.PropTypes.number.isRequired
}

export default Tabs;