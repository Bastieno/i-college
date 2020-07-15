import { Empty } from 'antd';
import { PlusSquareTwoTone } from '@ant-design/icons';

const RoleEmptyView = ({ addItem }) => (
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
            textAlign: 'center',
            display: 'block',
            margin: '8px auto 28px',
          }}
        >
          <a
            onClick={addItem}
            style={{ display: 'block', margin: '16px auto' }}
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

export default RoleEmptyView;
