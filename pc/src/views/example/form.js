import React, { Component } from 'react'
import {
  Form,
  Input,
  Select,
  Radio,
  Switch,
  DatePicker,
  Checkbox,
  Button,
} from 'antd';
import './form.less';

const rulesConfig = {
  input: [{ required: true, message: '请输入input的内容!' }],
  password: [{ required: true, message: '请输入password的内容!' }],
};

export default class FormExample extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props)
    this.state = {
      selectList: [1,2,3],
      radioList: [1,2,3],
      formData: {
        input: '1',
        password: '',
        select: 2,
        radio: 2,
        switch: true,
        time: '',
        checkbox: ['1'],
        remember: true,
      }
    }
  };


  render() {
    return (
      <div className="Form">
        <Form
          size="middle"
          labelAlign="left"
          labelCol={{span: 2}}
          wrapperCol={{span: 5}}
          ref={this.formRef}
          initialValues={this.state.formData}
          onValuesChange={this.onFormLayoutChange}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Input"
            name="input"
            rules={rulesConfig.input}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={rulesConfig.password}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Select" 
            name="select"
          >
            <Select>
              {
                this.state.selectList.map((item,index)=>{
                  return <Select.Option value={item} key={index}>选项{item}</Select.Option>
                })
              }
            </Select>
          </Form.Item>
          <Form.Item
            label="Radio"
            name="radio"
          >
            <Radio.Group>
              {
                this.state.radioList.map((item,index)=>{
                  return <Radio value={item} key={index}>选项{item}</Radio>
                })
              }
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Switch"
            name="switch"
            valuePropName="checked"
          >
            <Switch/>
          </Form.Item>
          <Form.Item
            label="DatePicker"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Checkbox"
            name="checkbox"
          >
            <Checkbox.Group>
              <Checkbox value="1">选项一</Checkbox>
              <Checkbox value="2">选项二</Checkbox>
              <Checkbox value="3">选项三</Checkbox>
            </Checkbox.Group>  
          </Form.Item>
          <Form.Item
            label="remember"
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <div className="btn-warp">
            <Button type="primary" className="submit" onClick={this.onSubmit.bind(this)}>提交</Button>
            <Button className="reset" onClick={this.onReset.bind(this)}>重置</Button>
            <Button className="cancel" onClick={this.onCancel.bind(this)}>取消</Button>
          </div>
        </Form>
      </div>
    );
  };

  onFormLayoutChange = (changedValues, allValues) =>{
    console.log('onValuesChange：', changedValues, allValues)
    this.setState({
      formData: allValues
    })
  }

  onFinish = values => {
    console.log('Success：', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed：', errorInfo);
  };


  onSubmit () {
    console.log('onSubmit：',this.state.formData)
    this.formRef.current.submit()
  };

  onReset () {
    console.log('onReset：',this.state.formData)
    this.formRef.current.resetFields();
  };

  onCancel () {
    console.log('onCancel：', this.form)
  };
  
}