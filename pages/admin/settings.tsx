import AdminLayout from '@components/layout/admin';
import { RolesSetting, StudentRegSetting, ResultsGradesSetting }from '@components/Roles/UserCategories';

export default () => (
  <AdminLayout>
    <RolesSetting />
    <StudentRegSetting />
    <ResultsGradesSetting />
  </AdminLayout>
);
