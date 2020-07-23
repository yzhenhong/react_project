import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import sidebarMenuList from './sidebarMenuList';

class LayoutSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarMenuDom: null,
      whiteList: ['/login', '/401', '/404', '/'],
      sidebarMenuList: sidebarMenuList,
      openedsIndex: [],
      activeIndex: '',
    };

    this.state.sidebarMenuList.forEach((item1,index1)=>{
      if(this.props.match.path === item1.path){
        this.state.openedsIndex = [index1.toString()]
        // this.setState({
        //   openedsIndex: [index1.toString()]
        // })
        // console.log([index1.toString()])
      }
      item1.children.forEach((item2,index2)=>{
        if(this.props.location.pathname === item2.path){
          this.state.activeIndex = index1.toString()+'-'+index2.toString()
          // this.setState({
          //   activeIndex: index1.toString()+'-'+index2.toString()
          // })
          // console.log(index1.toString()+'-'+index2.toString())
        }
      })
    })

  }

  render() {
    return (
      <div className="layout-sidebar">
        {this.state.sidebarMenuDom}
      </div>
    );
  }
  componentDidMount() {
    // this.state.sidebarMenuList.forEach((item1,index1)=>{
    //   if(this.props.match.path === item1.path){
    //     // this.state.openedsIndex = [index1.toString()]
    //     this.setState({
    //       openedsIndex: [index1.toString()]
    //     })
    //     console.log([index1.toString()])
    //   }
    //   item1.children.forEach((item2,index2)=>{
    //     if(this.props.location.pathname === item2.path){
    //       // this.state.activeIndex = index1.toString()+'-'+index2.toString()
    //       this.setState({
    //         activeIndex: index1.toString()+'-'+index2.toString()
    //       })
    //       console.log(index1.toString()+'-'+index2.toString())
    //     }
    //   })
    // })
    
    let sidebarMenuDom = (
      <Menu
        mode="inline"
        defaultOpenKeys={this.state.openedsIndex}
        defaultSelectedKeys={this.state.activeIndex}
      >
        {
          this.state.sidebarMenuList.map((item1,index1)=>{
            return this.renderSubMenu(item1,index1)
          })
        }
      </Menu>
    )
    this.setState({sidebarMenuDom: sidebarMenuDom})
    // console.log(this.state)

  };
  renderSubMenu = (item1,index1) => {
    if (item1.children&&item1.children.length>0&&item1.meta&&item1.meta.show!==false&&item1.meta.title==='首页'){
      // 首页 不需要子菜单 单独展示
      return this.renderMenuItem(item1.children[0],index1)
    } else if (item1.children&&item1.children.length>0&&item1.meta&&item1.meta.show!==false&&item1.meta.title!=='首页') {
      // 一级菜单 有子菜单
      return (
        <Menu.SubMenu
          key={index1}
          title={
            <span>
              <i className={`iconfont ${item1.icon?item1.icon:''}`}></i>
              <span>{item1.meta.title}</span>
            </span>
          }
        >
          {
            item1.children.map((item2,index2)=>{
              if(item2.meta&&item2.meta.title&&item2.meta.show!==false){
                return this.renderMenuItem(item1,index1,item2,index2)
              } else {
                return ''
              }
            })
          }
        </Menu.SubMenu>
      )
    } else if (item1&&item1.meta&&item1.meta.show!==false&&item1.meta.title!=='首页') {
      // 一级菜单 无子菜单
      return this.renderMenuItem(item1,index1)
    }

  };
  renderMenuItem = (item1,index1,item2,index2) => {
    if(item2) {
      return (
        <Menu.Item key={index1.toString()+'-'+index2.toString()} onClick={this.handleClickItem.bind(this,item2)}>
          <span>{item2.meta.title}</span>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item key={index1} onClick={this.handleClickItem.bind(this,item1)}>
          <i className={`iconfont ${item1.icon?item1.icon:''}`}></i>
          <span>{item1.meta.title}</span>
        </Menu.Item>
      )
    }
  };
  handleClickItem = (e) => {
    this.props.history.push(e.path);
  };
}

export default withRouter(LayoutSidebar);