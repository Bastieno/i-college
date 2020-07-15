import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  .ant-layout-header,
  .ant-layout-footer {
    background: #7dbcea;
    color: #fff;
  }
  .ant-layout-footer {
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }
  .ant-layout-sider {
    background: #e2e2e2;
    color: #fff;
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .header-logo {
    width: 120px;
    height: 31px;
    background: #000000;
    margin: 16px 24px 16px 0;
    float: left;
  }

  .trigger {
    color: #2471A3;
    font-size: 18px;
    line-height: 64px;
    padding-right: 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .ant-layout-content {
    color: #fff;
    min-height: 120px;
  }
`;

export default StyledContainer;
