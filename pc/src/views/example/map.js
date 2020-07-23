import React, { Component } from 'react'
import BMap  from 'BMap';
import './map.less';

export default class MapExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="Map">
        Map
        <div id="allmap2"></div>
      </div>
    );
  };
  componentDidMount () {
    console.log(BMap)
    this.map2 = new BMap.Map('allmap2');
    this.map2.centerAndZoom('深圳', 16);
    this.map2.enableScrollWheelZoom(true);
  }
}