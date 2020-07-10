import React, { Component } from 'react'
import {connect} from "react-redux";

class StatusExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="status">
        <div onClick={this.status.bind(this)}>
          status
          {this.props.nav}
        </div>
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