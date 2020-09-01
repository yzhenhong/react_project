import React, { Component } from 'react'
import {connect} from "react-redux";
import { Button } from 'antd';

class StatusExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="status">
        <div>
          {this.props.nav}
        </div>
        <Button type="primary" onClick={this.status.bind(this)}>修改</Button>
      </div>
    );
  };

  status () {
    this.props.dispatch({
      type: 'setNav',
      data: '示例'
    });
  }
}

export default connect(store=>store)(StatusExample)