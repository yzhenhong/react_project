import React, { Component } from 'react'
import { layoutHeader, layoutSidebar, layoutMain } from './components'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="Layout">
        <layoutHeader></layoutHeader>
        <layoutSidebar></layoutSidebar>
        <layoutMain></layoutMain>
      </div>
    );
  };

}