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
import Box from '@components/common/box';
import EditableTagGroup from '@components/common/editableTagGroup';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = AntSelect;

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

const CourseDataSource = [
  {
    key: '1',
    courseCode: 'MAT 101',
    courseName: 'Introduction to Analytical Mathematics',
    level: '100',
    semester: 'First',
    lecturer: 'Dr. K. O. Chinda',
  },
  {
    key: '2',
    courseCode: 'MAT 112',
    courseName: 'Calculus',
    level: '100',
    semester: 'First',
    lecturer: 'Dr. Enuwa Orlando',
  },
  {
    key: '3',
    courseCode: 'PHY 101',
    courseName: 'Introduction to Physics',
    level: '100',
    semester: 'Second',
    lecturer: 'Dr. Joseph Ibiye',
  },
  {
    key: '4',
    courseCode: 'CSC 101',
    courseName: 'Introduction to Computer Science',
    level: '100',
    semester: 'First',
    lecturer: 'Engr. Nimbofa Saman',
  },
  {
    key: '5',
    courseCode: 'MAT 122',
    courseName: 'Advanced Calculus',
    level: '100',
    semester: 'Second',
    lecturer: 'Dr. Enuwa Orlando',
  },
  {
    key: '6',
    courseCode: 'CSC 126',
    courseName: 'Data Structures and Algorithm',
    level: '100',
    semester: 'Second',
    lecturer: 'Dr. K. O. Chinda',
  },
  {
    key: '7',
    courseCode: 'CSC 150',
    courseName: 'Introduction to Programming Languages',
    level: '100',
    semester: 'First',
    lecturer: 'Prof. Kenule Nwine',
  },
  {
    key: '8',
    courseCode: 'GES 101',
    courseName: 'General Education Studies',
    level: '100',
    semester: 'First',
    lecturer: 'Prof. Francis Baz',
  },
];

const CourseEditModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      style={{ top: 50 }}
      // width="900px"
      visible={visible}
      title="Edit Course"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <p>Hello there</p>
    </Modal>
  );
};

const CourseDeleteModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      visible={visible}
      title="Delete Course"
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

const CourseView = () => {
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

  const handleCourseSave = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('randomNumber :>> ', randomNumber);
    setSaveButtonLoading(true);
    setTimeout(() => {
      setSaveButtonLoading(false);
      randomNumber < 51 ? triggerSuccessModal() : triggerErrorModal();
    }, 3000);
  }; const operations = (
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
          <Option value="100">100 Level</Option>
          <Option value="200">200 Level</Option>
          <Option value="300">300 Level</Option>
          <Option value="400">400 Level</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <AntSelect
          size="middle"
          showSearch
          style={{ width: 200 }}
          placeholder="Semester"
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
          <Option value="first">First Semester</Option>
          <Option value="second">Second Semester</Option>
        </AntSelect>
      </Form.Item>
      <Form.Item>
        <Search
          placeholder="Search Course Name/Code"
          onChange={e => console.log(e.target.value)}
          style={{ width: 200 }}
        />
      </Form.Item>
    </Form>
  );

  const CourseColumns = [
    {
      title: 'Course Code',
      dataIndex: 'courseCode',
      key: 'courseCode',
    },
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level',
    },
    {
      title: 'Semester',
      dataIndex: 'semester',
      key: 'semester',
    },
    {
      title: 'Lecturer',
      dataIndex: 'lecturer',
      key: 'lecturer',
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

  return (
    <>
      <CourseEditModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        visible={showEditModal}
        loading={loading}
      />
      <CourseDeleteModal
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
          <Table dataSource={CourseDataSource} columns={CourseColumns} />
        </TabPane>
        <TabPane tab={tab2} key="2">
          <EditableTagGroup tagCategory="Course" />
          <Divider style={{ marginTop: '50px' }} />
          <div>
            <Button
              loading={saveButtonLoading}
              type="primary"
              onClick={handleCourseSave}
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
      }}>Courses</h3>
      <Collapse accordion>
        <Panel header="Courses for Department of Computer Science" key="1">
          <CourseView />
        </Panel>
        <Panel header="Courses for Department of Physics" key="2">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Statistics" key="3">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Human Anatomy" key="4">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Chemistry" key="5">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Botany" key="6">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Sociology" key="7">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of English" key="8">
          <p>Hello there</p>
        </Panel>
        <Panel header="Courses for Department of Zoology" key="9">
          <p>Hello there</p>
        </Panel>
      </Collapse>
    </Box>
  );
};
