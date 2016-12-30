/**
 * 工具函数
 */

export function setViewCut(_this) {
    window.onresize = () => {
        setTimeout(() => {
            _this.setState({vHeight: document.documentElement.clientHeight});
            console.log(_this.state.vHeight)
        }, 2000);
    };
}