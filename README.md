## demo  

### 安装  
根目录下 ` npm install `  安装所需的所有依赖

### 使用 

#### 开发模式
` npm run dev `  运行开发模式 
#### 文件打包 
` npm run build ` 进行生产打包  
#### 生产打包并运行服务器 
` npm run ser`  

### 目录结构  

```
├── README.md
├── config
│   └── config.base.js
├── lib
│   ├── antd
│   │   ├── antd.min.css
│   │   └── antd.min.css.map
│   ├── ask.js
│   ├── index.scss
│   └── utility.js
├── package.json
├── servers
│   ├── server.build.js
│   └── server.dev.js
├── src
│   ├── App.jsx
│   ├── actions
│   ├── components
│   │   ├── Header
│   │   ├── Home
│   │   └── Sidebar
│   ├── containers
│   │   ├── goods
│   │   └── schedule
│   ├── index.js
│   ├── middlewares
│   ├── reducers
│   ├── routes
│   │   ├── M1
│   │   ├── M2
│   │   └── index.js
│   ├── theme
│   │   └── index.scss
│   └── tpl.html
└── webpack_config
    ├── webpack.config.dev.js
    └── webpack.config.prod.js

```




