import { Button, Modal } from 'antd';

const RoleDeleteModal = ({ visible, handleOk, handleCancel, loading }) => {
  return (
    <Modal
      visible={visible}
      title="Delete Role"
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

export default RoleDeleteModal;
