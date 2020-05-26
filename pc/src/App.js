import React, { Component } from 'react'
//引入路由根组件 HashRouter
//引入装载路由组件的组件 Route
//重定向 Redirect
//引入触发切换路由的向组件 Link,NavLink
// import { HashRouter, Route, Redirect, Link, NavLink } from 'react-router-dom'

import './App.css'; // 使用 CSS Modules 的方式引入

class App extends Component {
  constructor(props) {
    // 获取 props
    super(props)
    // 初始化 state
    this.state = {
      name: '杨振宏'
    }
  };

  render() {
    return (
      <div className="app">Hello World</div>
    );
  };


}

export default App;
