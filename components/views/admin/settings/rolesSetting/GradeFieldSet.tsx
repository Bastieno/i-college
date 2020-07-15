import { useEffect, useState } from 'react';
import { Button, Form, Input, Col, Row } from 'antd';
import { PlusOutlined, CloseCircleTwoTone } from '@ant-design/icons';
import Box from '@components/common/box';

const GradeFieldSet = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = values => console.log('Received values of form:', values);

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="my-form">
      <Form.List name="grades">
        {(fields, { add, remove }) => {
          console.log('fields :>> ', fields);
          return (
            <div>
              {fields.map((field, index) => (
                <Row gutter={24} justify="center" align="middle" key={field.key}>
                  <Col span={6}>
                    <Form.Item
                      {...field}
                      label={['Grade Name']}
                      validateTrigger={['onChange', 'onBlur']}
                      name={[field.name, 'gradeName']}
                      rules={[{ required: true, message: 'Grade name is required!' }]}
                    >
                      <Input placeholder="Grade Name" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...field}
                      label={['Max Score']}
                      validateTrigger={['onChange', 'onBlur']}
                      name={[field.name, 'maxScore']}
                      rules={[{ required: true, message: 'Max score is required!' }]}
                    >
                      <Input placeholder="Max Score" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      {...field}
                      label={['Min Score']}
                      validateTrigger={['onChange', 'onBlur']}
                      name={[field.name, 'minScore']}
                      rules={[{ required: true, message: 'Min Score is required!' }]}
                    >
                      <Input placeholder="Min Score" />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <CloseCircleTwoTone
                      twoToneColor="#EB5757"
                      style={{ margin: '9px 8px 0', fontSize: '24px' }}
                      className="dynamic-delete-button"
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Box display="flex" justifyContent="center" mt={3}>
                  <Button
                    style={{ width: '40%' }}
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Box>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item shouldUpdate={true}>
        {
          () => (
            <Button
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length).length > 1
              }
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          )
        }
      </Form.Item>
    </Form>
  );
};

export default GradeFieldSet;
