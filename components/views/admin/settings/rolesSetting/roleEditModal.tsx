import {
  Checkbox,
  Button,
  Form,
  Input,
  Col,
  Row,
  Modal,
} from 'antd';

const RoleEditModal = ({ visible, handleOk, handleCancel, loading }) => {
  const onChange = checkedValues => console.log('checkedValues :>> ', checkedValues);
  return (
    <Modal
      style={{ top: 50 }}
      width="900px"
      visible={visible}
      title="Edit Role"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <div>
        <Form layout="vertical">
          <Form.Item label="Role Name">
            <Input size="large" placeholder="Admin" />
          </Form.Item>
          <Form.Item label="Role Description">
            <Input size="large" placeholder="This is a role for an administrator" />
          </Form.Item>
          <Form.Item>
            <div>
              <h3 style={{ fontWeight: 'bold' }}>Privileges</h3>
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <h4>Department</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="A">Can Create Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="B">Can View Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="C">Can Update Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="D">Can Delete Department</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="E">Can Manage Department</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Course</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="F">Can Create Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="G">Can View Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="H">Can Update Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="I">Can Delete Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="J">Can Manage Course</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="K">Can Register Course</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Result</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="L">Can Create Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="M">Can View Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="N">Can Update Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="O">Can Delete Result</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="P">Can Manage Result</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
                <Col span={6}>
                  <h4>Faculty</h4>
                  <Checkbox.Group onChange={onChange} style={{ width: '100%' }}>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="Q">Can Create Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="R">Can View Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="S">Can Update Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="T">Can Delete Faculty</Checkbox>
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: '10px' }}>
                      <Col>
                        <Checkbox value="U">Can Manage Faculty</Checkbox>
                      </Col>
                    </Row>
                  </Checkbox.Group>
                </Col>
              </Row>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default RoleEditModal;
