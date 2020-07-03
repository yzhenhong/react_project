import React, { Component } from 'react'
import { Form, Input} from 'antd';
import { setToken } from '../../utils/auth'
import './login.less';


export default class Login extends Component {
  formRef = React.createRef();
  constructor(props) {
    super(props)
    this.state = {
      loginData: {
        username: '',
        password: '',
      }
    }
  };

  render() {
    return (
      <div className="login">
        <div className="login-box">
          <Form
            initialValues={this.state.loginData}
            ref={this.formRef}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入你的账号!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入你的密码!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <div className="submit" onClick={this.onSubmit.bind(this)}>登录</div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  };

  onFinish = values => {
    console.log('Success:', values);
    setToken('736647835')
    this.props.history.push('home/index');
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  onSubmit () {
    this.formRef.current.submit()
  };

}