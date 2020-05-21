import { useEffect, useState } from 'react';
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
  Empty,
  Modal,
} from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
  EditTwoTone,
  DeleteTwoTone,
  PlusOutlined,
  CloseCircleTwoTone,
  PlusSquareTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Box from '@components/Box';

const { Panel } = Collapse;
const { TabPane } = Tabs;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

const ManageCategoryEmptyView = ({ addItem }) => (
  <div>
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 80,
      }}
      description={
        <span
          style={{
            width: '35%',
            textAlign:'center',
            display:'block',
            margin: '8px auto 28px',
          }}
        >
          <a
            onClick={addItem}
            style={{
              display:'block',
              margin:'16px auto',
            }}
          >
            <PlusSquareTwoTone twoToneColor="#2471A3" /> Add Now
          </a>
          <span>
            No User Categories has been created yet.
            Click on the <strong>Add Icon</strong>
            tab above to create a User Category
          </span>
        </span>
      }
    >
    </Empty>
  </div>
);

const ManageRoleEmptyView = ({ addItem }) => (
  <div>
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 80,
      }}
      description={
        <span
          style={{
            width: '35%',
            textAlign:'center',
            display:'block',
            margin: '8px auto 28px',
          }}
        >
          <a
            onClick={addItem}
            style={{ display:'block', margin:'16px auto' }}
          >
            <PlusSquareTwoTone twoToneColor="#2471A3" /> Add Now
          </a>
          <span>
            No Role has been created yet.
            Click on the <strong>Add Icon</strong>
            tab above to create a Role
          </span>
        </span>
      }
    >
    </Empty>
  </div>
);

const ManageCategoryNonEmptyView = () => (
  <Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFAFA" p={3}>
      <span>Student</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFFFF" p={3}>
      <span>Academic Staff</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFAFA" p={3}>
      <span>Non-Academic Staff</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
  </Box>
);

const ManageRoleNonEmptyView = ({ showEditModal, showDeleteModal }) => (
  <Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFAFA" p={3}>
      <span>Admin</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a onClick={showEditModal}><EditTwoTone twoToneColor="#2471A3" /></a>
        <a onClick={showDeleteModal}><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFFFF" p={3}>
      <span>Result Inputer</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a onClick={showEditModal}><EditTwoTone twoToneColor="#2471A3" /></a>
        <a onClick={showDeleteModal}><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
    <Box display="flex" justifyContent="space-between" height={4} bg="#FFFAFA" p={3}>
      <span>Result Authorizer</span>
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a onClick={showEditModal}><EditTwoTone twoToneColor="#2471A3" /></a>
        <a onClick={showDeleteModal}><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>
    </Box>
  </Box>
);

const AddRoleNonEmptyView = () => {
  const onChange = checkedValues => console.log('checked = ', checkedValues);
  return (
    <Box>
      <div>
        <Form layout="vertical">
          <Form.Item label="Role Name">
            <Input size="large" placeholder="Admin" />
          </Form.Item>
          <Form.Item label="Role Description">
            <Input size="large" placeholder="This is a role for an administrator" />
          </Form.Item>
          <Form.Item>
            <div>
              <h3 style={{ fontWeight: 'bold' }}>Privileges</h3>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <h4>Department</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="A">Can Create Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="B">Can View Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="C">Can Update Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="D">Can Delete Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="E">Can Manage Department</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Course</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="F">Can Create Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="G">Can View Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="H">Can Update Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="I">Can Delete Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="J">Can Manage Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="K">Can Register Course</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Result</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="L">Can Create Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="M">Can View Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="N">Can Update Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="O">Can Delete Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="P">Can Manage Result</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Faculty</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="Q">Can Create Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="R">Can View Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="S">Can Update Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="T">Can Delete Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="U">Can Manage Faculty</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
              </Row>
            </div>
          </Form.Item>
          <Divider />
          <Form.Item>
            <Button type="primary">Save</Button>
          </Form.Item>
        </Form>
      </div>
    </Box>
  );
};

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

const ManageRoleEditModal = ({ visible, handleOk, handleCancel, loading }) => {
  const onChange = checkedValues => console.log('checkedValues :>> ', checkedValues);
  return (
    <Modal
      style={{ top: 50 }}
      width="900px"
      visible={visible}
      title="Edit Role"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <div>
        <Form layout="vertical">
          <Form.Item label="Role Name">
            <Input size="large" placeholder="Admin" />
          </Form.Item>
          <Form.Item label="Role Description">
            <Input size="large" placeholder="This is a role for an administrator" />
          </Form.Item>
          <Form.Item>
            <div>
              <h3 style={{ fontWeight: 'bold' }}>Privileges</h3>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <h4>Department</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="A">Can Create Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="B">Can View Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="C">Can Update Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="D">Can Delete Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="E">Can Manage Department</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Course</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="F">Can Create Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="G">Can View Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="H">Can Update Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="I">Can Delete Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="J">Can Manage Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="K">Can Register Course</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Result</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="L">Can Create Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="M">Can View Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="N">Can Update Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="O">Can Delete Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="P">Can Manage Result</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Faculty</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="Q">Can Create Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="R">Can View Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="S">Can Update Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="T">Can Delete Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="U">Can Manage Faculty</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
              </Row>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

const ManageRoleDeleteModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      visible={visible}
      title="Delete Role"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" type="primary"  onClick={handleCancel}>
          No
        </Button>,
        <Button key="submit" danger loading={loading} onClick={handleOk}>
          Yes
        </Button>,
      ]}
    >
      <div>
        <h3
          style={{
            fontWeight:'bold',
            margin:'8px auto 16px',
          }}
        >
          Are you sure you want to remove this item?
        </h3>
        <p>
          If you remove this item,
          there is a risk that you might loose every information related to it.
        </p>
      </div>
    </Modal>
  );
};

export const RolesSetting = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const showEditModal = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 3000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteModalOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowDeleteModal(false);
    }, 3000);
  };

  const handleDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };

  const handleAddClickForCategories = () => {
    setCount1(prevState => prevState + 1);
  };

  const handleAddClickForRoles = () => {
    setCount2(prevState => prevState + 1);
  };

  return (
    <>
      <ManageRoleEditModal
        visible={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
      />
      <ManageRoleDeleteModal
        visible={showDeleteModal}
        handleOk={handleDeleteModalOk}
        handleCancel={handleDeleteModalCancel}
        loading={loading}
      />
      <Box mb={4}>
        <h3 style={{
          border: '1px solid #DDDDDD',
          padding: '8px',
        }}>
          Roles, Permissions and User Categories
        </h3>
        <Collapse accordion>
          <Panel header="Manage Categories" key="1">
            {
              count1 === 0 ? <ManageCategoryEmptyView addItem={handleAddClickForCategories} /> : (
                <Tabs type="card">
                  <TabPane tab={tab1} key="1">
                    <ManageCategoryNonEmptyView />
                  </TabPane>
                  <TabPane tab={tab2} key="2">
                    <GradeFieldSet />
                  </TabPane>
                </Tabs>
              )
            }
          </Panel>
          <Panel header="Manage Role" key="2">
            {
              count2 === 0 ? <ManageRoleEmptyView addItem={handleAddClickForRoles} /> : (
                <Tabs type="card">
                  <TabPane tab={tab1} key="1">
                    <ManageRoleNonEmptyView
                      showEditModal={showEditModal}
                      showDeleteModal={handleShowDeleteModal}
                    />
                  </TabPane>
                  <TabPane tab={tab2} key="2">
                    <AddRoleNonEmptyView />
                  </TabPane>
                </Tabs>
              )
            }
          </Panel>
        </Collapse>
      </Box>
    </>
  );
};

export const StudentRegSetting = () => {
  return (
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Students and Registration</h3>
      <Collapse accordion>
        <Panel header="Generate QR Code for the registration of students" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="What information should be compulsory for student registration?" key="2">
          <Box mt={3} mb={1}>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s <strong>Phone Number</strong>
                to be compulsory when a student is registering
              </Checkbox>
            </p>
            <p style={{ marginBottom: '20px' }}>
              <Checkbox
              >
                I want the student’s<strong>Email Address</strong>
                to be compulsory when a student is registering
              </Checkbox>
            </p>
            <Divider />
            <div>
              <Button
                type="primary"
                size="small"
                onClick={() => console.log('Button clicked :>> ')}
              >
                Save
              </Button>
            </div>
          </Box>
        </Panel>
      </Collapse>
    </Box>
  );
};

export const ResultsGradesSetting = () => {
  const callback = key => console.log(key);

  return (
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Results and Grades</h3>
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
    </Box>
  );
};
