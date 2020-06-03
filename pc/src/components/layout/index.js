import React, { Component } from 'react'
import { LayoutHeader, LayoutSidebar, LayoutMain } from './components/index'
import './index.css';

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="Layout">
        <LayoutHeader></LayoutHeader>
        <LayoutSidebar></LayoutSidebar>
        <LayoutMain></LayoutMain>
      </div>
    );
  };

}