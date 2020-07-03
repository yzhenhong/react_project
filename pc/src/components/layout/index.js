import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { LayoutHeader, LayoutSidebar, LayoutMain } from './components/index'
import { getToken } from '../../utils/auth'
import './index.less';

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    if(!getToken()) {
      console.log('未登录')
      return <Redirect to="/account/login"/>
    }
    return (
      <div className="layout-wrap">
        <LayoutHeader></LayoutHeader>
        <LayoutSidebar></LayoutSidebar>
        <LayoutMain></LayoutMain>
      </div>
    );
  };

}