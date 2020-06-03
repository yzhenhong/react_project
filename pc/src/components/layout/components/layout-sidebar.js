import React, { Component } from "react";
import { Menu } from "antd";

export default class LayoutSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
    };
  }

  render() {
    return (
      <div className="layout-sidebar">
        <Menu
          onClick={this.handleClick}
          mode="inline"
        >
          <Menu.Item key="sub0">首页</Menu.Item>
          <Menu.SubMenu
            key="sub1"
            title="sub1"
          >
            <Menu.Item key="1">item 1</Menu.Item>
            <Menu.Item key="2">item 2</Menu.Item>
            <Menu.Item key="3">item 3</Menu.Item>
            <Menu.Item key="4">item 4</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub2"
            title="sub2"
          >
            <Menu.Item key="5">item 5</Menu.Item>
            <Menu.Item key="6">item 6</Menu.Item>
            <Menu.Item key="7">item 7</Menu.Item>
            <Menu.Item key="8">item 8</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="sub3"
            title="sub3"
          >
            <Menu.Item key="9">item 9</Menu.Item>
            <Menu.Item key="10">item 10</Menu.Item>
            <Menu.Item key="11">item 11</Menu.Item>
            <Menu.Item key="12">item 12</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }

  handleClick = (e) => {
    console.log("click ", e);
  };
}