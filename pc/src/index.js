import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/index'
import App from './App';
import ajax from './utils/ajax'
import * as serviceWorker from './serviceWorker';
import './index.css';
import './assets/fonts/iconfont.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';

React.Component.prototype.$ajax = ajax;
React.Component.prototype.$net = ajax;

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
