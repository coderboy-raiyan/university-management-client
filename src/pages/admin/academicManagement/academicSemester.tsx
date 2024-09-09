import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { useState } from "react";
import { MonthsOptions } from "../../../constant/global.constant";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester, TQueryParams } from "../../../types";
import { yearOptions } from "../../../utils/global.utils";

type TTableData = Omit<
  TAcademicSemester,
  "createdAt" | "updatedAt" | "code" | "_id"
> & { key: string };

const columns: TableColumnsType<TTableData> = [
  {
    title: "Name",
    dataIndex: "name",
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
    title: "Year",
    dataIndex: "year",
    filters: yearOptions?.map(({ value }) => ({
      text: value,
      value: value,
    })),
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    filters: MonthsOptions?.map(({ value }) => ({
      text: value,
      value: value,
    })),
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
    filters: MonthsOptions?.map(({ value }) => ({
      text: value,
      value: value,
    })),
  },
];

function AcademicSemester() {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data, isFetching } = useGetAllSemestersQuery(params);

  const modifiedTableData = data?.data?.map(
    ({ _id, name, year, endMonth, startMonth }) => ({
      key: _id,
      name,
      year,
      endMonth,
      startMonth,
    })
  );

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
        dataSource={modifiedTableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </section>
  );
}

export default AcademicSemester;
