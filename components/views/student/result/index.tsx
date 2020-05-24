import { useState } from 'react';
import { Collapse, Table, Typography } from 'antd';
import Box from '@components/Box';

const { Panel } = Collapse;
const { Text } = Typography;

const gradeColorMap = {
  A: '#52C41A',
  B: '#1890FF',
  C: '#1890FF',
  D: '#FAAD14',
  E: '#FAAD14',
  F: '#F5222D',
};

const ResultDataSource = [
  {
    key: '1',
    courseCode: 'MAT 101',
    courseName: 'Introduction to Analytical Mathematics',
    unit: '3',
    assessment: '24',
    exam: '55',
    totalScore: '79',
    grade: 'A',
  },
  {
    key: '2',
    courseCode: 'MAT 112',
    courseName: 'Calculus',
    unit: '3',
    assessment: '24',
    exam: '44',
    totalScore: '68',
    grade: 'B',
  },
  {
    key: '3',
    courseCode: 'PHY 101',
    courseName: 'Introduction to Physics',
    unit: '3',
    assessment: '25',
    exam: '30',
    totalScore: '55',
    grade: 'C',
  },
  {
    key: '4',
    courseCode: 'CSC 101',
    courseName: 'Introduction to Computer Science',
    unit: '3',
    assessment: '10',
    exam: '30',
    totalScore: '40',
    grade: 'D',
  },
  {
    key: '5',
    courseCode: 'MAT 122',
    courseName: 'Advanced Calculus',
    unit: '3',
    assessment: '10',
    exam: '20',
    totalScore: '30',
    grade: 'E',
  },
  {
    key: '6',
    courseCode: 'CSC 126',
    courseName: 'Data Structures and Algorithm',
    unit: '3',
    assessment: '10',
    exam: '10',
    totalScore: '20',
    grade: 'F',
  },
  {
    key: '7',
    courseCode: 'CSC 150',
    courseName: 'Introduction to Programming Languages',
    unit: '3',
    assessment: '24',
    exam: '55',
    totalScore: '79',
    grade: 'A',
  },
  {
    key: '8',
    courseCode: 'GES 101',
    courseName: 'General Education Studies',
    unit: '3',
    assessment: '24',
    exam: '45',
    totalScore: '69',
    grade: 'B',
  },
];

const ResultView = () => {
  const ResultColumns = [
    {
      title: 'Course Code',
      dataIndex: 'courseCode',
      key: 'courseCode',
    },
    {
      title: 'Course Name',
      dataIndex: 'courseName',
      key: 'courseName',
      render: (text: string) => <span style={{ color: '#1890FF' }}>{text}</span>,
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Assessment',
      dataIndex: 'assessment',
      key: 'assessment',
    },
    {
      title: 'Exam',
      dataIndex: 'exam',
      key: 'exam',
    },
    {
      title: 'Total',
      dataIndex: 'totalScore',
      key: 'totalScore',
      render: (text: string) => <span style={{ fontWeight: 600 }}>{text}</span>,
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      render: (text, record) => (
        <span style={{ color: gradeColorMap[record.grade], fontWeight: 700 }}>{text}</span>
      ),
    },
  ];

  return (
    <>
      <Table
        dataSource={ResultDataSource}
        columns={ResultColumns}
        pagination={false}
        bordered
        summary={(pageData) => {
          let totalUnit = 0;
          let totalAssessement = 0;
          let totalExam = 0;
          let totalPoints = 0;

          pageData.forEach(({ unit, assessment, exam, totalScore }) => {
            totalUnit += Number(unit);
            totalAssessement += Number(assessment);
            totalExam += Number(exam);
            totalPoints += Number(totalScore);
          });

          return (
            <>
              <Table.Summary.Row style={{ background: '#FAFAFA', fontWeight: 700 }}>
                <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                <Table.Summary.Cell index={1} />
                <Table.Summary.Cell index={2}>
                  <Text>{totalUnit}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}>
                  <Text>{totalAssessement}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <Text>{totalExam}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <Text>{totalPoints}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6} />
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
};

export default () => {
  const Header = ({ leftText, rightText }) => (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <div>{leftText}</div>
      <div style={{ color: '#FAAD14', fontWeight: 600 }}>{rightText}</div>
    </Box>
  );

  return (
    <Box mb={4}>
      <Box
        color="#000"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid #DDDDDD"
        padding="10px 16px"
        mb="16px"
        fontWeight="600"
      >
        <Box>Result</Box>
        <Box color="#1890FF">CGPA 3.45</Box>
      </Box>
      <Collapse accordion>
        <Panel header={<Header leftText="2019/2020 Academic Year, First Semester" rightText="GPA 3.45" />} key="1">
          <ResultView />
        </Panel>
        <Panel header={<Header leftText="2018/2019 Academic Year, Second Semester" rightText="GPA 3.45" />} key="2">
          <p>Hello there</p>
        </Panel>
        <Panel header={<Header leftText="2018/2019 Academic Year, First Semester" rightText="GPA 3.45" />} key="3">
          <p>Hello there</p>
        </Panel>
      </Collapse>
    </Box>
  );
};
