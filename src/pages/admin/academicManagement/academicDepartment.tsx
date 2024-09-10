import { Table, TableColumnType } from "antd";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";

type TTableData = {
  name: string;
};

const columns: TableColumnType<TTableData>[] = [
  {
    title: "Department Name",
    dataIndex: "name",
  },
];

function AcademicDepartment() {
  const { data, isFetching } = useGetAllAcademicDepartmentsQuery(null);
  console.log(data);
  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={data?.data} />
    </div>
  );
}

export default AcademicDepartment;
