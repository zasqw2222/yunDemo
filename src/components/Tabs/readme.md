## tabs 组件  
类似于浏览器标签栏的组件。

## API  

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| tabs | 一个承载tab的数组 | arrayOf(object).isRequired |
| >tabs[index].title | tab标题 | Stirng |
| >tabs[index].to | 需要跳转的uri | String |
| currentIndex | 当前选中标签索引 | Number |


| 方法 | 说明 | 参数 |
| --- | --- | --- |
| tabClick | 点击tab 回调方法 | index:点击的索引，title:点击的标题，to:跳转的uri |

## 使用方法  

```
import Tabs from '../Tabs/';

this.consClick(i, t, o){
    console.log(i,t,o) // 1, "影片管理", "filmManagement"
}; 

<header>
  <div className="headers clearfix">
    <Logo />
    <Tabs tabs={tabs} currentIndex={currentIndex} tabClick={(index,title,to) => {this.consClick(index,title,to)}} />
    <Usertool />
    </div>
</header>
```


