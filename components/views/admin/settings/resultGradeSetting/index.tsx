import { useState } from 'react';
import {
  Collapse,
  Button,
  Divider,
  Tabs,
  Table,
  Space,
  Form,
  Input,
  Col,
  Row,
  Tag,
  Select,
  InputNumber,
  message,
} from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
  EditTwoTone,
  DeleteTwoTone,
  InfoCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import GradeFieldSet from '../rolesSetting/GradeFieldSet';
import Box from '@components/common/box';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Option } = Select;

const tab1 = (<span><MenuOutlined />View</span>);

const tab2 = (<span><PlusSquareOutlined />Add</span>);

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
    render: () => (
      <Space size="middle">
        <a><EditTwoTone twoToneColor="#2471A3" /></a>
        <a><DeleteTwoTone twoToneColor="#EB5757" /></a>
      </Space>),
  },
];

const ResultsGradesSetting = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [saveButtonLoading, setSaveButtonLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('1');

  const handleTabClick = (key: string) => {
    console.log('key :>> ', key);
    setActiveKey(key);
  };
  const callback = key => console.log(key);
  const onSelectChange = selectedRowKeys => setSelectedRowKeys(selectedRowKeys);
  const handleSave = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('randomNumber :>> ', randomNumber);
    setSaveButtonLoading(true);
    setTimeout(() => {
      setSaveButtonLoading(false);
      randomNumber < 51 ? handleSuccess() : handleFailure();
    }, 3000);
  };
  const handleSuccess = () => {
    message.success('The operation was successful', 10);
    setActiveKey('1');
  };

  const handleFailure = () => {
    message.error('Something went wrong. Please try again later', 10);
    setActiveKey('2');
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const optionsArrayForEvaluations = [
    {
      text: 'Average of Total',
      value: 'avgTotal',
    },
    {
      text: 'Average Scale to 70%',
      value: 'avg70',
    },
    {
      text: 'C.A Scale to 30%',
      value: 'ca70',
    },
  ];

  const evaluationOptions = optionsArrayForEvaluations.map(({ text, value }, index) => (
    <Option key={`${index}-value`} value={value}>{text}</Option>
  ));
  const handleChange = value => console.log(`selected ${value}`);

  const TypesDataSource = [
    {
      key: '1',
      typeName: 'MBBS',
      assessment: ['Written Papers/100', 'Practicals/100', 'Orals/100'],
      evaluations: ['Average of Total', 'Average Scale to 70%', 'CA Scale to 30%'],
      grades: ['A (70 - 100)', 'B (60 - 69)', 'C (50 - 59)'],
    },
    {
      key: '2',
      typeName: 'Regular',
      assessment: ['Assessent/30', 'Exam/70'],
      evaluations: ['Average of Total', 'Total'],
      grades: ['A (70 - 100)', 'B (60 - 69)', 'C (50 - 59)'],
    },
  ];

  const TypesColumns = [
    {
      title: 'Type Name',
      dataIndex: 'typeName',
      key: 'typeName',
      render: text => (
        <a>{text}</a>
      ),
    },
    {
      title: 'Assessment',
      dataIndex: 'assessment',
      key: 'assessment',
      render: assessments => (
        <>
          {assessments.map((assessment) => {
            let color = assessment.length > 9 ? 'geekblue' : 'green';
            if (assessment === 'Written Papers/100') {
              color = 'volcano';
            }
            return (
              <Tag
                style={{ padding: '2px', marginBottom: '8px' }}
                color={color}
                key={assessment}
              >
                {assessment}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Evaluations',
      dataIndex: 'evaluations',
      key: 'evaluations',
      render: evaluations => (
        <>
          {evaluations.map((evaluation) => {
            let color = evaluation.length > 16 ? 'geekblue' : 'green';
            if (evaluation === 'Average of Total') {
              color = 'volcano';
            }
            return (
              <Tag
                style={{ padding: '2px', marginBottom: '8px' }}
                color={color}
                key={evaluation}
              >
                {evaluation}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Grades',
      dataIndex: 'grades',
      key: 'grade',
      render: grades => (
        <>
          {grades.map((grade) => {
            let color = grade.length > 8 ? 'geekblue' : 'green';
            if (grade === 'A (70 - 100)') {
              color = 'green';
            }
            return (
              <Tag
                style={{ padding: '2px', marginBottom: '8px' }}
                color={color}
                key={grade}
              >
                {grade}
              </Tag>
            );
          })}
        </>
      ),
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

  return (
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Results and Grades</h3>
      <Collapse accordion>
        <Panel header="Define the various types of academic assesments" key="1">
          <Tabs
            activeKey={activeKey}
            onTabClick={handleTabClick}
            type="card"
          >
            <TabPane tab={tab1} key="1">
              <Table
                rowSelection={rowSelection}
                dataSource={TypesDataSource}
                columns={TypesColumns}
              />
            </TabPane>
            <TabPane tab={tab2} key="2">
              <Box my={3}>
                <Form layout="vertical">
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Enter name of Type">
                        <Input size="middle" placeholder="MBBS Type" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>
                      <Form.Item label="Define Assesment name and their total scores">
                        <Input.Group compact>
                          <Input
                            style={{ width: '150px', height: '32px' }}
                            placeholder="Assessment Name"
                          />
                          <InputNumber
                            style={{ width: '80px', height: '32px' }}
                            placeholder="Total"
                          />
                          <Button
                            type="primary"
                            style={{ background: '#2471A3', color: '#ffffff' }}
                            icon={<CloseOutlined />}
                            loading={false}
                            onClick={() => console.log('Hello francis')}
                          />
                        </Input.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item label="Choose Evaluation Types">
                        <Select
                          mode="multiple"
                          style={{ width: '100%' }}
                          placeholder="Please select evaluation type"
                          onChange={handleChange}
                        >
                          {evaluationOptions}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item label="Define Grade Ranges and Colors">
                        <Input.Group compact>
                          <Input
                            style={{ width: '100px', height: '32px' }}
                            placeholder="Grade Name"
                          />
                          <InputNumber
                            style={{ width: '70px', height: '32px' }}
                            placeholder="Min Score"
                          />
                          <InputNumber
                            style={{ width: '70px', height: '32px' }}
                            placeholder="Max Score"
                          />
                          <Select style={{ width: '120px', height: '32px' }} defaultValue="none">
                            <Option value="none">Display color</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                            <Option value="red">Red</Option>
                          </Select>
                          <Button
                            type="primary"
                            style={{ background: '#2471A3', color: '#ffffff' }}
                            icon={<CloseOutlined />}
                            loading={false}
                            onClick={() => console.log('Hello francis')}
                          />
                        </Input.Group>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <Divider style={{ marginTop: '20px' }} />
                <div>
                  <Button
                    loading={saveButtonLoading}
                    type="primary"
                    onClick={handleSave}
                  >
                    Save
              </Button>
                </div>
              </Box>
            </TabPane>
          </Tabs>
        </Panel>
        <Panel header="Define the various types of grades and their score ranges" key="2">
          <Tabs onChange={callback} type="card">
            <TabPane tab={tab1} key="1">
              <Table dataSource={dataSource} columns={columns} />
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

export default ResultsGradesSetting;
