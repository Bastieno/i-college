import { Collapse } from 'antd';
import Layout from '@components/layout';
import Box from '@components/common/box';

const { Panel } = Collapse;

export default () => (
  <Layout role="student">
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Student</h3>
      <Collapse accordion>
        <Panel header="Register Course" key="1">
          <p>Hello world</p>
        </Panel>
        <Panel header="View Courses" key="2">
          <p>Hello world</p>
        </Panel>
        <Panel header="View Elective Courses" key="3">
          <p>Hello world</p>
        </Panel>
      </Collapse>
    </Box>
  </Layout>
);
