import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    console.log('process.env.NODE_ENV',process.env.NODE_ENV)
  };

  render() {
    return (
      <div className="index">
        index
      </div>
    );
  };

}