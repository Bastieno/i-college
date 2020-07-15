import { Form, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  padding: 16px 32px;

  .ant-form-item-control {
    margin-bottom: 4px
  }

  .registration-form-next {
    width: 100%;
    margin-bottom: 16px;
  }

  .registration-form-login {
    width: 100%;
  }
`;

const RegistrationForm = () => {
  const onFinish = values => console.log('Success:', values);

  const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

  return (
    <StyledForm
      layout="vertical"
      name="registration"
      className="registration-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
    >
      <Form.Item
        style={{ margin: '20px auto 220px' }}
        label="College Identification Number"
        name="collegeId"
        rules={[{ required: true, message: 'This is a required field' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="registration-form-next">
          Next
        </Button>
        <Button type="primary" htmlType="submit" className="registration-form-login" ghost>
          Login Instead
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default RegistrationForm;
