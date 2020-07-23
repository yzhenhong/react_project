import React, { Component } from 'react'
import { Table, Button } from 'antd';

export default class ListExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [],
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          key: 'action',
          render: (record) => (
            <div>
              <Button type="primary" onClick={this.action.bind(this,record)}>Delete</Button>
            </div>
          )
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'John Brown2',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
      ],
    }
  };
 
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className="List">
        <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
      </div>
    );
  };

  action (...record) {
    console.log('action', record[0])
    let data = this.state.data.filter(item=>item.key !== record[0].key)
    this.setState({data})
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

}