import { Table, TableColumnType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";

type TTableData = {
  name: string;
};

const columns: TableColumnType<TTableData>[] = [
  {
    title: "Faculty Name",
    dataIndex: "name",
  },
];

function AcademicFaculty() {
  const { data, isFetching } = useGetAllAcademicFacultyQuery(null);

  return (
    <div>
      <Table loading={isFetching} columns={columns} dataSource={data?.data} />
    </div>
  );
}

export default AcademicFaculty;
