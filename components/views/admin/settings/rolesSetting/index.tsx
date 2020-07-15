import { useState } from 'react';
import { Collapse, Tabs, Select } from 'antd';
import {
  PlusSquareOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import RoleEditModal from './roleEditModal';
import RoleDeleteModal from './roleDeleteModal';
import RoleEmptyView from './roleEmptyView';
import RoleNonEmptyView from './roleNonEmptyView';
import CategoryEmptyView from './categoryEmptyView';
import CategoryNonEmptyView from './categoryNonEmptyView';
import GradeFieldSet from './GradeFieldSet';
import AddRoleNonEmptyView from './addRoleNonEmptyView';
import Box from '@components/common/box';

const { Panel } = Collapse;
const { TabPane } = Tabs;
const { Option } = Select;

const tab1 = (<span><MenuOutlined />View</span>);

const tab2 = (<span><PlusSquareOutlined />Add</span>);

const RolesSetting = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const showEditModal = () => {
    setShowModal(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(false);
    }, 3000);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteModalOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowDeleteModal(false);
    }, 3000);
  };

  const handleDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };

  const handleAddClickForCategories = () => {
    setCount1(prevState => prevState + 1);
  };

  const handleAddClickForRoles = () => {
    setCount2(prevState => prevState + 1);
  };

  return (
    <>
      <RoleEditModal
        visible={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
      />
      <RoleDeleteModal
        visible={showDeleteModal}
        handleOk={handleDeleteModalOk}
        handleCancel={handleDeleteModalCancel}
        loading={loading}
      />
      <Box mb={4}>
        <h3 style={{
          border: '1px solid #DDDDDD',
          padding: '8px',
        }}>
          Roles, Permissions and User Categories
        </h3>
        <Collapse accordion>
          <Panel header="Manage Categories" key="1">
            {
              count1 === 0 ? <CategoryEmptyView addItem={handleAddClickForCategories} /> : (
                <Tabs type="card">
                  <TabPane tab={tab1} key="1">
                    <CategoryNonEmptyView />
                  </TabPane>
                  <TabPane tab={tab2} key="2">
                    <GradeFieldSet />
                  </TabPane>
                </Tabs>
              )
            }
          </Panel>
          <Panel header="Manage Role" key="2">
            {
              count2 === 0 ? <RoleEmptyView addItem={handleAddClickForRoles} /> : (
                <Tabs type="card">
                  <TabPane tab={tab1} key="1">
                    <RoleNonEmptyView
                      showEditModal={showEditModal}
                      showDeleteModal={handleShowDeleteModal}
                    />
                  </TabPane>
                  <TabPane tab={tab2} key="2">
                    <AddRoleNonEmptyView />
                  </TabPane>
                </Tabs>
              )
            }
          </Panel>
        </Collapse>
      </Box>
    </>
  );
};

export default RolesSetting;
