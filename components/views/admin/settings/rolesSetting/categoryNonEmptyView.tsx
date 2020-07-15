import { Space } from 'antd';
import {
  EditTwoTone,
  DeleteTwoTone,
  InfoCircleOutlined,
} from '@ant-design/icons';
import Box from '@components/common/box';

const CategoryNonEmptyView = () => (
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

export default CategoryNonEmptyView;
