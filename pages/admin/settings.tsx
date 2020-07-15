import Layout from '@components/layout';
import RolesSetting from '@components/views/admin/settings/rolesSetting';
import StudentRegSetting from '@components/views/admin/settings/studentRegSetting';
import ResultGradesSetting from '@components/views/admin/settings/resultGradeSetting';

export default () => (
  <Layout role="admin">
    <RolesSetting />
    <StudentRegSetting />
    <ResultGradesSetting />
  </Layout>
);
