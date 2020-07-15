import { useState } from 'react';
import {
  Collapse,
  Table,
  Tabs,
  Space,
  Button,
  Input,
  Modal,
  Form,
  Row,
  Col,
  Divider,
  Select as AntSelect,
} from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
  EditTwoTone,
  DeleteTwoTone,
  InfoCircleOutlined,
  TagFilled,
} from '@ant-design/icons';
import Box from '@components/common/box';
import EditableTagGroup from '@components/common/editableTagGroup';
import Select from '@components/common/select';
import SelectedGroup from '@components/common/selectedGroup';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = AntSelect;

const optionsArrayForAdviser = [
  {
    value: 'Prof. Francis Baz',
    text: 'Prof. Francis Baz',
  },
  {
    value: 'Dr. K. O. Chinda',
    text: 'Dr. K. O. Chinda',
  },
  {
    value: 'Dr. Enuwa Orlando',
    text: 'Dr. Enuwa Orlando',
  },
  {
    value: 'Dr. Joseph Ibiye',
    text: 'Dr. Joseph Ibiye',
  },
  {
    value: 'Engr. Nimbofa Saman',
    text: 'Engr. Nimbofa Saman',
  },
  {
    value: 'Dr. Ebinabo Barine',
    text: 'Dr. Ebinabo Barine',
  },
];
const optionsArrayForFaculty = [
  {
    value: 'Faculty of Plant Health Management',
    text: 'Faculty of Plant Health Management',
  },
  {
    value: ' Faculty of Physical Sciences',
    text: ' Faculty of Physical Sciences',
  },
  {
    value: 'Faculty of Engineering',
    text: 'Faculty of Engineering',
  },
  {
    value: 'Faculty of Arts',
    text: 'Faculty of Arts',
  },
  {
    value: 'Faculty of Religious Studies',
    text: 'Faculty of Religious Studies',
  },
  {
    value: 'Faculty of Accounting',
    text: 'Faculty of Accounting',
  },
];

const optionsArrayForDepartment = [
  {
    value: 'Department of Plant Health Management',
    text: 'Department of Plant Health Management',
  },
  {
    value: ' Department of Physical Sciences',
    text: ' Department of Physical Sciences',
  },
  {
    value: 'Department of Engineering',
    text: 'Department of Engineering',
  },
  {
    value: 'Department of Arts',
    text: 'Department of Arts',
  },
  {
    value: 'Department of Religious Studies',
    text: 'Department of Religious Studies',
  },
  {
    value: 'Department of Accounting',
    text: 'Department of Accounting',
  },
];

const optionsArrayForCollege = [
  {
    value: 'College of Medicine',
    text: 'College of Medicine',
  },
  {
    value: 'College of Engineering',
    text: 'College of Enginneering',
  },
  {
    value: 'College of Education',
    text: 'College of Education',
  },
  {
    value: 'College of Management',
    text: 'College of Management',
  },
  {
    value: 'College of Agriculture',
    text: 'College of Agriculture',
  },
  {
    value: 'College of Industrial Technologies',
    text: 'College of Industrial Technologies',
  },
];

const optionsArrayForLevel = [
  {
    value: '100',
    text: '100 L',
  },
  {
    value: '200',
    text: '200 L',
  },
  {
    value: '300',
    text: '300 L',
  },
  {
    value: '400',
    text: '400 L',
  },
  {
    value: '500',
    text: '500 L',
  },
];

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

const tab3 = (
  <span>
    <TagFilled />
      Add To Department
  </span>
);

const StudentDataSource = [
  {
    key: '1',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28935',
    departmentName: 'Department of Computer Science',
    level: '100',
  },
  {
    key: '2',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28936',
    departmentName: 'Department of Chemistry',
    level: '200',
  },
  {
    key: '3',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28937',
    departmentName: 'Department of English',
    level: '300',
  },
  {
    key: '4',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28938',
    departmentName: 'Department of Geology',
    level: '400',
  },
  {
    key: '5',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28939',
    departmentName: 'Department of Petroleum Engineering',
    level: '500',
  },
  {
    key: '6',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28940',
    departmentName: 'Department of Mathematics',
    level: '100',
  },
  {
    key: '7',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28941',
    departmentName: 'Department of Agricultural Economics',
    level: '200',
  },
  {
    key: '8',
    fullName: 'Ibiye Emmanuel Samuel',
    matricNumber: '2016/UP/28942',
    departmentName: 'Department of Zoology',
    level: '300',
  },
];

const StudentEditModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      style={{ top: 50 }}
      visible={visible}
      title="Edit Department"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Enter Department Name">
          <Input size="middle" placeholder="Department of Agricultual Economics" />
        </Form.Item>
        <Select label="Faculty" optionsArray={optionsArrayForFaculty} />
        <Select label="College" optionsArray={optionsArrayForCollege} />
        <Select label="HOD" optionsArray={optionsArrayForAdviser} />
        <Select label="Adviser" optionsArray={optionsArrayForAdviser} />
      </Form>
    </Modal>
  );
};

const StudentDeleteModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      visible={visible}
      title="Delete Department"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" type="primary" onClick={handleCancel}>
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
            fontWeight: 'bold',
            margin: '8px auto 16px',
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

const StudentBulkAddModal = ({
  visible,
  handleOk,
  handleCancel,
  loading,
  selectedItems,
  removeItem,
}) => {
  return (
    <Modal
      width="700px"
      visible={visible}
      title="Manage Students"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <SelectedGroup selectedItems={selectedItems} removeItem={removeItem} />
      <Form layout="vertical">
        <Select label="Department" optionsArray={optionsArrayForDepartment} />
        <Select label="Level" optionsArray={optionsArrayForLevel} />
      </Form>
    </Modal>
  );
};

const StudentSection = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteModalButtonLoading, setDeleteModalButtonLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('1');
  const [showBulkAddModal, setShowBulkAddModal] = useState(false);
  const [bulkAddModalButtonLoading, setBulkAddModalButtonLoading] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [saveButtonLoading, setSaveButtonLoading] = useState(false);

  const triggerSuccessModal = () => {
    Modal.success({
      title: (<p style={{ color: '#2DBE20' }}>SUCCESS !!!</p>),
      content: (
        <div>
          <p>The operation was successful</p>
        </div>
      ),
      okText: 'Return to view',
      okType: 'link',
      onOk: () => {
        setActiveKey('1');
      },
    });
  };

  const triggerErrorModal = () => {
    Modal.error({
      title: (<p style={{ color: '#ff4d4f' }}>OOPS !!!</p>),
      content: (
        <div>
          <p>Sorry, it appears something went wrong.</p>
          <p>Please try again later.</p>
        </div>
      ),
      okText: 'Return to view',
      okType: 'link',
      onOk: () => {
        setActiveKey('2');
      },
    });
  };

  const handleDepartmentSave = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('randomNumber :>> ', randomNumber);
    setSaveButtonLoading(true);
    setTimeout(() => {
      setSaveButtonLoading(false);
      randomNumber < 51 ? triggerSuccessModal() : triggerErrorModal();
    }, 3000);
  };

  const onSelectChange = selectedRowKeys => setSelectedRowKeys(selectedRowKeys);

  const selectedItems = selectedRowKeys.map((key) => {
    const objToFind =  StudentDataSource.filter(item => item.key === key)[0];
    return objToFind;
  });

  const removeItem = (itemToRemove) => {
    const filteredKeys = selectedRowKeys.filter(key => key !== itemToRemove.key);
    setSelectedRowKeys(filteredKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowEditModal(false);
    }, 3000);
  };

  const handleCancel = () => {
    setShowEditModal(false);
  };

  const handleDeleteModalOk = () => {
    setDeleteModalButtonLoading(true);
    setTimeout(() => {
      setDeleteModalButtonLoading(false);
      setShowDeleteModal(false);
    }, 3000);
  };

  const handleDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };

  const handleBulkAddModalOk = () => {
    setBulkAddModalButtonLoading(true);
    setTimeout(() => {
      setBulkAddModalButtonLoading(false);
      setShowBulkAddModal(false);
      setSelectedRowKeys([]);
    }, 3000);
  };

  const handleBulkAddModalCancel = () => {
    setShowBulkAddModal(false);
  };

  const handleEditClick = () => setShowEditModal(true);
  const handleDeleteClick = () => setShowDeleteModal(true);

  const StudentColumns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
      render: text => (
        <a>{text}</a>
      ),
    },
    {
      title: 'Matric No.',
      dataIndex: 'matricNumber',
      key: 'matricNumber',
    },
    {
      title: 'Department',
      dataIndex: 'departmentName',
      key: 'departmentName',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a><InfoCircleOutlined /></a>
          <a onClick={handleEditClick}><EditTwoTone twoToneColor="#2471A3" /></a>
          <a onClick={handleDeleteClick}><DeleteTwoTone twoToneColor="#EB5757" /></a>
        </Space>),
    },
  ];

  // const callback = (key:string) => console.log(key);

  const handleTabClick = (key:string) => {
    console.log('key :>> ', key);
    setActiveKey(key);
    if (key === '3') {
      selectedRowKeys.length && setShowBulkAddModal(true);
    }
  };

  const operations = (
    <Form layout="inline">
      <Form.Item>
        <span style={{ fontSize: '15px' }}>Filter by:</span>
      </Form.Item>
      <Form.Item>
        <AntSelect
          size="middle"
          showSearch
          style={{ width: 200 }}
          placeholder={'Level'}
          optionFilterProp="children"
          onChange={() => (value: any) => console.log(`selected ${value}`)}
          onFocus={(value: any) => console.log('focus')}
          onBlur={(value: any) => console.log('blur')}
          onSearch={(value: any) => console.log('search:', value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="100">100</Option>
          <Option value="200">200</Option>
          <Option value="300">300</Option>
          <Option value="400">400</Option>
          <Option value="500">500</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <AntSelect
          size="middle"
          showSearch
          style={{ width: 200 }}
          placeholder="Department"
          optionFilterProp="children"
          onChange={() => (value: any) => console.log(`selected ${value}`)}
          onFocus={(value: any) => console.log('focus')}
          onBlur={(value: any) => console.log('blur')}
          onSearch={(value: any) => console.log('search:', value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="all">All</Option>
          <Option value="science">Department of Chemistry</Option>
          <Option value="agriculture">Department of Physics</Option>
          <Option value="arts">Department of Geology</Option>
          <Option value="education">Department of Computer Science</Option>
          <Option value="engineering">Department of Economics</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <Search
          placeholder="Search Department Name"
          onChange={e => console.log(e.target.value)}
          style={{ width: 200 }}
        />
      </Form.Item>
    </Form>

  );

  return (
    <>
      <StudentEditModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={showEditModal}
        loading={loading}
      />
      <StudentDeleteModal
        handleOk={handleDeleteModalOk}
        handleCancel={handleDeleteModalCancel}
        visible={showDeleteModal}
        loading={deleteModalButtonLoading}
      />
      <StudentBulkAddModal
        handleOk={handleBulkAddModalOk}
        handleCancel={handleBulkAddModalCancel}
        visible={showBulkAddModal}
        loading={bulkAddModalButtonLoading}
        selectedItems={selectedItems}
        removeItem={removeItem}
      />
      <Tabs
        activeKey={activeKey}
        onTabClick={handleTabClick}
        tabBarExtraContent={operations}
        // onChange={callback}
        type="card"
      >
        <TabPane tab={tab1} key="1">
          <Table
            rowSelection={rowSelection}
            dataSource={StudentDataSource}
            columns={StudentColumns}
          />
        </TabPane>
        <TabPane tab={tab2} key="2">
          <Box my={3}>
            <Form layout="vertical">
              <Row>
                <Col span={24}>
                  <Form.Item label="Student Matric Number">
                    <Input size="middle" placeholder="2016/UP/28935" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                  <Form.Item label="Student Surname">
                    <Input size="middle" placeholder="Chidinma" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Student Firstname">
                    <Input size="middle" placeholder="Kiki" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Student Othername">
                    <Input size="middle" placeholder="Elue" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={8}>
                  <Form.Item label="Student Email">
                    <Input size="middle" placeholder="dinma@gmail.com" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Student Phone">
                    <Input size="middle" placeholder="08046343734" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item>
                    <Select label="Student Level" optionsArray={optionsArrayForLevel} />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Select label="Student Department" optionsArray={optionsArrayForDepartment} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Divider style={{ marginTop: '20px' }} />
            <div>
              <Button
                loading={saveButtonLoading}
                type="primary"
                onClick={handleDepartmentSave}
              >
                Save
              </Button>
            </div>
          </Box>
        </TabPane>
        <TabPane tab={tab3} key="3">
          <Table
            rowSelection={rowSelection}
            dataSource={StudentDataSource}
            columns={StudentColumns}
          />
        </TabPane>
      </Tabs>
    </>
  );
};

export default () => {
  return (
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Users</h3>
      <Collapse accordion>
        <Panel header="Academic Staff" key="1">
          <p>Hello world</p>
        </Panel>
        <Panel header="Non-Academic Staff" key="2">
          <p>Hello world</p>
        </Panel>
        <Panel header="Students" key="3">
          <StudentSection />
        </Panel>
      </Collapse>
    </Box>
  );
};
