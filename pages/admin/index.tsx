import { Collapse } from 'antd';
import AdminLayout from '@components/layout/admin';
import Box from '@components/Box';

const { Panel } = Collapse;

export default () => (
  <AdminLayout>
    <Box mb={4}>
      <h3 style={{
        border: '1px solid #DDDDDD',
        padding: '8px',
      }}>Admin</h3>
      <Collapse accordion>
        <Panel header="Statistics" key="1">
          <p>Hello world</p>
        </Panel>
        <Panel header="Notifications" key="2">
          <p>Hello world</p>
        </Panel>
        <Panel header="Review" key="3">
          <p>Hello world</p>
        </Panel>
      </Collapse>
    </Box>
  </AdminLayout>
);
