import AdminLayout from '@components/Layout/AdminLayout';
import { RolesSetting, StudentRegSetting, ResultsGradesSetting }from '@components/Roles/UserCategories';

export default () => (
  <AdminLayout>
    <RolesSetting />
    <StudentRegSetting />
    <ResultsGradesSetting />
  </AdminLayout>
);
