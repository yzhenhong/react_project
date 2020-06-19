import React, { Component } from 'react'
import { Route } from "react-router-dom";
import routes from '../../../routes/index';

export default class LayoutMain extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="layout-main">
        {
          routes.map((item)=>{
            return <Route key={item.name} path={item.path} exact component={item.component}/>
          })
        }
      </div>
    );
  };

}