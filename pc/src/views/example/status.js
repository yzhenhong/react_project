import React, { Component } from 'react'
import {connect} from "react-redux";

class Status extends Component {
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
        </div>
      </div>
    );
  };

  status () {
    this.props.dispatch({
      type: 'setNav',
      data: [1]
    });
    console.log(this.props)
  }
}

export default connect(store=>store)(Status)
// export default connect(store=>store)(Status)
// export default Status