import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';

const StyledForm = styled(Form)`
  padding: 32px;

  .ant-form-item-control {
    margin-bottom: 4px
  }

  .login-form-forgot {
    display: block;
    margin: 16px 0
  }

  .login-form-button {
    width: 100%;
  }
`;

const LoginForm = () => {
  const onFinish = values => console.log('Success:', values);

  const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

  return (
    <StyledForm
      layout="vertical"
      name="normal-login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
    >
      <Form.Item
        label="Matriculation No."
        name="username"
        rules={[{ required: true, message: 'Please input your matriculation number!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Keep me logged in</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="">
        Forgot Password
            </a>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" ghost>
          Login
        </Button>
      </Form.Item>
      <p>If you have not registered, <Link href="/register"><a>Click here to Register</a></Link></p>
    </StyledForm>
  );
};

export default LoginForm;
