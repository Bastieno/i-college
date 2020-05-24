import { useState } from 'react';
import {
  Collapse,
  Table,
  Tabs,
  Space,
  Button,
  Input,
  Divider,
  Modal,
  Form,
  Select as AntSelect,
} from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
  EditTwoTone,
  DeleteTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Box from '@components/Box';
import EditableTagGroup from '@components/EditableTagGroup';
import Select from '@components/Select';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = AntSelect;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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

const CollegeDataSource = [
  {
    key: '1',
    collegeName: 'College of Agriculture',
    faculty: '12 Faculties',
    provost: 'Dr. K. O. Chinda',
  },
  {
    key: '2',
    collegeName: 'College of Physical and Biological Science',
    faculty: '6 Faculties',
    provost: 'Dr. Enuwa Orlando',
  },
  {
    key: '3',
    collegeName: 'College of Medicine',
    faculty: '8 Faculties',
    provost: 'Dr. Joseph Ibiye',
  },
  {
    key: '4',
    collegeName: 'College of Engineering',
    faculty: '5 Faculties',
    provost: 'Engr. Nimbofa Saman',
  },
  {
    key: '5',
    collegeName: 'College of Arts and Communication',
    faculty: '11 Faculties',
    provost: 'Dr. K. O. Chinda',
  },
  {
    key: '6',
    collegeName: 'College of Education',
    faculty: '10 Faculties',
    provost: 'Dr. Eniye Briggs',
  },
  {
    key: '7',
    collegeName: 'College of Indutrial Technologies',
    faculty: '7 Faculties',
    provost: 'Dr. Ebinabo Barine',
  },
  {
    key: '8',
    collegeName: 'College of Management',
    faculty: '8 Faculties',
    provost: 'Dr. K. O. Chinda',
  },
];

const CollegeColumns = [
  {
    title: 'College Name',
    dataIndex: 'collegeName',
    key: 'collegeName',
    render: text => (
      <a>{text}</a>
    ),
  },
  {
    title: 'Faculty',
    dataIndex: 'faculty',
    key: 'faculty',
  },
  {
    title: 'Provost',
    dataIndex: 'provost',
    key: 'provost',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>),
  },
];

const FacultyDataSource = [
  {
    key: '1',
    facultyName: 'Faculty of Plant Health Management',
    department: '5 Departments',
    head: 'Dr. K. O. Chinda',
  },
  {
    key: '2',
    facultyName: 'Faculty of Physical Sciences',
    department: '8 Departments',
    head: 'Dr. Enuwa Orlando',
  },
  {
    key: '3',
    facultyName: 'Faculty of Medical and Human Sciences',
    department: '8 Departments',
    head: 'Dr. Enuwa Orlando',
  },
  {
    key: '4',
    facultyName: 'Faculty of Engineering',
    department: '8 Departments',
    head: 'Engr. Nimbofa Saman',
  },
  {
    key: '5',
    facultyName: 'Faculty of Language',
    department: '10 Departments',
    head: 'Dr. Enuwa Orlando',
  },
  {
    key: '6',
    facultyName: 'Faculty of Public Relations',
    department: '9 Departments',
    head: 'Dr. Eniye Briggs',
  },
  {
    key: '7',
    facultyName: 'Faculty of Biological Sciences',
    department: '4 Departments',
    head: 'Dr. Enuwa Orlando',
  },
  {
    key: '8',
    facultyName: 'Faculty of Accountancy',
    department: '6 Departments',
    head: 'Prof. Kenule Nwine ',
  },
];

const FacultyColumns = [
  {
    title: 'Faculty Name',
    dataIndex: 'facultyName',
    key: 'facultyName',
    render: text => (
      <a>{text}</a>
    ),
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Head',
    dataIndex: 'head',
    key: 'head',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a><InfoCircleOutlined /></a>
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>),
  },
];

const DepartmentDataSource = [
  {
    key: '1',
    departmentName: 'Department of Agricultural Economics',
    facultyName: 'Faculty of Plant Health Management',
    collegeName: 'College of Agriculture',
    hod: 'Dr. K. O. Chinda',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '2',
    departmentName: 'Department of Computer Science',
    facultyName: 'Faculty of Physical Sciences',
    collegeName: 'College of Physical and Biological Sciences',
    hod: 'Dr. K. O. Chinda',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '3',
    departmentName: 'Department of Human and Physical Anatomy',
    facultyName: 'Faculty of Medical and Human Sciences',
    collegeName: 'College of Medicine',
    hod: 'Dr. K. O. Chinda',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '4',
    departmentName: 'Department of Chemical Engineering',
    facultyName: 'Faculty of Engineering',
    collegeName: 'College of Engineering',
    hod: 'Engr. Nimbofa Saman',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '5',
    departmentName: 'Department of English Language and Literature',
    facultyName: 'Faculty of Arts',
    collegeName: 'College of Arts and Communication',
    hod: 'Dr. K. O. Chinda',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '6',
    departmentName: 'Department of Agricultural Economics',
    facultyName: 'Faculty of Plant Health Management',
    collegeName: 'College of Agriculture',
    hod: 'Dr. Eniye Briggs',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '7',
    departmentName: 'Department of Biological Chemistry',
    facultyName: 'Faculty of Biologial Sciences',
    collegeName: 'College of Physical and Biological Sciences ',
    hod: 'Dr. Enuwa Orlando',
    adviser: 'Dr. K. O. Chinda',
  },
  {
    key: '8',
    departmentName: 'Department of Accountancy',
    facultyName: 'Faculty of Accountancy',
    collegeName: 'College of Management',
    hod: 'Prof. Kenule Nwine',
    adviser: 'Dr. K. O. Chinda',
  },
];

const DepartmentEditModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      style={{ top: 50 }}
      // width="900px"
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

const DepartmentDeleteModal = ({ visible, handleOk, handleCancel, loading }) => {
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

const CollegeSection = () => {
  const callback = key => console.log(key);
  const operations = (
    <Search
      placeholder="Search College Name"
      onChange={e => console.log(e.target.value)}
      style={{ width: 200 }}
    />
  );
  return (
    <Tabs tabBarExtraContent={operations} onChange={callback} type="card">
      <TabPane tab={tab1} key="1">
        <Table dataSource={CollegeDataSource} columns={CollegeColumns} />
      </TabPane>
      <TabPane tab={tab2} key="2">
        <EditableTagGroup tagCategory="College" />
        <Box mb={4}>
          <Form layout="vertical">
            <Select label="Provost" optionsArray={optionsArrayForAdviser} />
          </Form>
        </Box>
        <Divider style={{ marginTop: '50px' }} />
        <div>
          <Button
            type="primary"
            onClick={() => console.log('Button clicked :>> ')}
          >
            Save
          </Button>
          </div>
      </TabPane>
    </Tabs>
  );
};

const FacultySection = () => {
  const callback = key => console.log(key);
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
          placeholder={'College'}
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
          <Option value="medicine">College of Medicine</Option>
          <Option value="agriculture">College of Agriculture</Option>
          <Option value="arts">College of Arts</Option>
          <Option value="education">College of Education</Option>
          <Option value="engineering">College of Engineering</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <Search
          placeholder="Search Faculty Name"
          onChange={e => console.log(e.target.value)}
          style={{ width: 200 }}
        />
      </Form.Item>
    </Form>
  );
  return (
    <Tabs tabBarExtraContent={operations} onChange={callback} type="card">
      <TabPane tab={tab1} key="1">
        <Table dataSource={FacultyDataSource} columns={FacultyColumns} />
      </TabPane>
      <TabPane tab={tab2} key="2">
        <EditableTagGroup tagCategory="Faculty" />
        <Box>
          <Form layout="vertical">
            <Select label="College" optionsArray={optionsArrayForCollege} />
            <Select label="Dean" optionsArray={optionsArrayForAdviser} />
          </Form>
        </Box>
        <Divider style={{ marginTop: '50px' }} />
        <div>
          <Button
            type="primary"
            onClick={() => console.log('Button clicked :>> ')}
          >
            Save
          </Button>
          </div>
      </TabPane>
    </Tabs>
  );
};

const DepartmentSection = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteModalButtonLoading, setDeleteModalButtonLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('1');
  const [saveButtonLoading, setSaveButtonLoading] = useState(false);

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

  const handleEditClick = () => setShowEditModal(true);
  const handleDeleteClick = () => setShowDeleteModal(true);

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

  const DepartmentColumns = [
    {
      title: 'Department Name',
      dataIndex: 'departmentName',
      key: 'departmentName',
      render: text => (
        <a>{text}</a>
      ),
    },
    {
      title: 'Faculty Name',
      dataIndex: 'facultyName',
      key: 'facultyName',
    },
    {
      title: 'College Name',
      dataIndex: 'collegeName',
      key: 'collegeName',
    },
    {
      title: 'HOD',
      dataIndex: 'hod',
      key: 'hod',
    },
    {
      title: 'Adviser',
      dataIndex: 'adviser',
      key: 'adviser',
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

  const callback = key => console.log(key);
  const handleTabClick = key => setActiveKey(key);
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
          placeholder={'College'}
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
          <Option value="medicine">College of Medicine</Option>
          <Option value="agriculture">College of Agriculture</Option>
          <Option value="arts">College of Arts</Option>
          <Option value="education">College of Education</Option>
          <Option value="engineering">College of Engineering</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <AntSelect
          size="middle"
          showSearch
          style={{ width: 200 }}
          placeholder="Faculty"
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
          <Option value="science">Faculty of science</Option>
          <Option value="agriculture">Faculty of Agriculture</Option>
          <Option value="arts">Faculty of Arts</Option>
          <Option value="education">Faculty of Education</Option>
          <Option value="engineering">Faculty of Engineering</Option>
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
      <DepartmentEditModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={showEditModal}
        loading={loading}
      />
      <DepartmentDeleteModal
        handleOk={handleDeleteModalOk}
        handleCancel={handleDeleteModalCancel}
        visible={showDeleteModal}
        loading={deleteModalButtonLoading}
      />
      <Tabs
        activeKey={activeKey}
        onTabClick={handleTabClick}
        tabBarExtraContent={operations}
        onChange={callback}
        type="card"
      >
        <TabPane tab={tab1} key="1">
          <Table dataSource={DepartmentDataSource} columns={DepartmentColumns} />
        </TabPane>
        <TabPane tab={tab2} key="2">
          <EditableTagGroup tagCategory="Department" />
          <Box mb={4}>
            <Form layout="vertical">
              <Select label="Faculty" optionsArray={optionsArrayForFaculty} />
              <Select label="College" optionsArray={optionsArrayForCollege} />
              <Select label="HOD" optionsArray={optionsArrayForAdviser} />
              <Select label="Adviser" optionsArray={optionsArrayForAdviser} />
            </Form>
          </Box>
          <Divider style={{ marginTop: '50px' }} />
          <div>
            <Button
              loading={saveButtonLoading}
              type="primary"
              onClick={handleDepartmentSave}
            >
              Save
            </Button>
          </div>
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
      }}>Departments, Colleges and Faculties</h3>
      <Collapse accordion>
        <Panel header="College" key="1">
          <CollegeSection />
        </Panel>
        <Panel header="Faculty" key="2">
          <FacultySection />
        </Panel>
        <Panel header="Department" key="3">
          <DepartmentSection />
        </Panel>
      </Collapse>
    </Box>
  );
};
