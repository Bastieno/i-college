import { Space } from 'antd';
import {
  EditTwoTone,
  DeleteTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Box from '@components/common/box';

const RoleNonEmptyView = ({ showEditModal, showDeleteModal }) => (
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

export default RoleNonEmptyView;
