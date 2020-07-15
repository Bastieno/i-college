import { Layout } from 'antd';

const { Content } = Layout;

const MainContent = ({ marginLeft, content }) => {
  return (
    <div style={{ marginLeft }}>
      <Content style={{ overflow: 'initial', paddingBottom: '64px', paddingTop: '140px' }}>
        <div className="site-layout-background" style={{ padding: '0 24px 24px' }}>
          {content}
        </div>
      </Content>
    </div>
  );
};

export default MainContent;
