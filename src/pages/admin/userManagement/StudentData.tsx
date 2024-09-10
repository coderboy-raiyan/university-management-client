import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TQueryParams } from "../../../types";
import { TStudent } from "../../../types/userManagement.type";

type TTableData = Pick<TStudent, "id" | "fullName"> & { key: string };

const columns: TableColumnsType<TTableData> = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Roll No.",
    dataIndex: "id",
    showSorterTooltip: { target: "full-header" },
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
];

function StudentData() {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isFetching } = useGetAllStudentsQuery(params);

  const modifiedTableData = data?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters?.name?.forEach((val) => {
        queryParams.push({ name: "name", value: val });
      });
      filters?.year?.forEach((val) => {
        queryParams.push({ name: "year", value: val });
      });
      filters?.startMonth?.forEach((val) => {
        queryParams.push({ name: "startMonth", value: val });
      });
      filters?.endMonth?.forEach((val) => {
        queryParams.push({ name: "endMonth", value: val });
      });
      setParams(queryParams);
    }
  };

  return (
    <section>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={modifiedTableData!}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </section>
  );
}

export default StudentData;
