import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class LayoutHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  };

  render() {
    return (
      <div className="layout-header">
        <div onClick={this.goHome.bind(this)}>
          <img src={require('../../../assets/img/logo.png')} alt=""/>
          医保公共服务管理平台
        </div>
        <div>
          <div>文档中心</div>
          <div>技术支持</div>
          <div>
            系统管理员
            <img src={require('../../../assets/svg/pulldown.svg')} alt=""/>
          </div>
        </div>
      </div>
    );
  };

  goHome () {
    this.props.history.push({pathname:"/home/index"});
  }
}

export default withRouter(LayoutHeader);