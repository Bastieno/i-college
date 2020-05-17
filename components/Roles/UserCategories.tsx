import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Checkbox,
  Button,
  Divider,
  Tabs,
  Table,
  Space,
  Form,
  Input,
  Col,
  Row,
} from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
  EditTwoTone,
  DeleteTwoTone,
  PlusOutlined,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import Box from '@components/Box';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Stylediv = styled.div`
  margin-bottom: 32px;
  h3 {
    border: 1px solid #DDDDDD;
    padding: 8px;
  }
`;

const dataSource = [
  {
    key: '1',
    grade: 'A',
    scoreRange: '70 - 100',
    displayColor: '#52C41A',
  },
  {
    key: '2',
    grade: 'B',
    scoreRange: '60 - 69',
    displayColor: '#1890FF',
  },
  {
    key: '3',
    grade: 'C',
    scoreRange: '50 - 59',
    displayColor: '#1890FF',
  },
  {
    key: '4',
    grade: 'D',
    scoreRange: '40 - 49',
    displayColor: '#FAAD14',
  },
  {
    key: '5',
    grade: 'E',
    scoreRange: '30 - 39',
    displayColor: '#FAAD14',
  },
  {
    key: '6',
    grade: 'F',
    scoreRange: '20 - 29',
    displayColor: '#F5222D',
  },
];

const columns = [
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade',
    render: (text, record) => (
      <span style={{ color: record.displayColor }}>{text}</span>
    ),
  },
  {
    title: 'Score Range',
    dataIndex: 'scoreRange',
    key: 'scoreRange',
  },
  {
    title: 'Display Color',
    dataIndex: 'displayColor',
    key: 'displayColor',
    render: (text, record) => (
      <div
        style={{
          height: 20,
          width: 50,
          background: record.displayColor,
          textAlign: 'center',
        }}
      />
    ),
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render:() => (
      <Space size="middle">
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>),
  },
];

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

export const RolesSetting = () => {
  return (
    <Stylediv>
      <h3>Roles, Permissions and User Categories</h3>
      <Collapse accordion>
        <Panel header="Manage Categories" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Manage Role" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Stylediv>
  );
};

export const StudentRegSetting = () => {
  return (
    <Stylediv>
      <h3>Students and Registration</h3>
      <Collapse accordion>
        <Panel header="Generate QR Code for the registration of students" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="What information should be compulsory for student registration?" key="2">
          <div>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s Phone Number to be compulsory when a student is registering
              </Checkbox>
            </p>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s Email Address to be compulsory when a student is registering
              </Checkbox>
            </p>
            <Divider />
            <p>
              <Button
                type="primary"
                size="small"
                onClick={() => console.log('Button clicked :>> ')}
              >
                Save
              </Button>
            </p>

          </div>
        </Panel>
      </Collapse>
    </Stylediv>
  );
};

export const ResultsGradesSetting = () => {
  const callback = key => console.log(key);
  const tab1 = (
    <span>
      <MenuOutlined />
      View
    </span>
  );

  const tab2 = (
    <span>
      <PlusSquareOutlined />
      Add
    </span>
  );

  return (
    <Stylediv>
      <h3>Results and Grades</h3>
      <Collapse accordion>
        <Panel header="Define the various types of academic assesments" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Define the various types of grades and their score ranges" key="2">
          <Tabs onChange={callback} type="card">
            <TabPane tab={tab1} key="1">
              <Table dataSource={dataSource} columns={columns} />;
            </TabPane>
            <TabPane tab={tab2} key="2">
              <GradeFieldSet />
            </TabPane>
          </Tabs>
        </Panel>
      </Collapse>
    </Stylediv>
  );
};
