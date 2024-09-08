import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { useEffect, useState } from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types";

type TTableData = Omit<
  TAcademicSemester,
  "createdAt" | "updatedAt" | "code" | "_id"
> & { key: string };

const columns: TableColumnsType<TTableData> = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Year",
    dataIndex: "year",
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
  },
];

const onChange: TableProps<TTableData>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

function AcademicSemester() {
  const {
    data: semesters,
    isSuccess,
    isLoading,
  } = useGetAllSemestersQuery(null);
  const [tableData, setTableData] = useState<TTableData[]>([] as TTableData[]);

  useEffect(() => {
    if (isSuccess) {
      const modifiedTableData = semesters?.data?.map(
        ({ _id, name, year, endMonth, startMonth }) => ({
          key: _id,
          name,
          year,
          endMonth,
          startMonth,
        })
      );

      setTableData(modifiedTableData);
      console.log(modifiedTableData);
    }
  }, [isSuccess]);

  return (
    <section>
      {isLoading ? (
        "Loading..."
      ) : (
        <Table
          columns={columns}
          dataSource={tableData}
          onChange={onChange}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      )}
    </section>
  );
}

export default AcademicSemester;
