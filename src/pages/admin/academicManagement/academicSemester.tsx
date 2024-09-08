import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

function AcademicSemester() {
  const { data } = useGetAllSemestersQuery(null);
  console.log(data);
  return <div>academicSemester</div>;
}

export default AcademicSemester;
