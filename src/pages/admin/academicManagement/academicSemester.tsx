import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

function AcademicSemester() {
  const { data } = useGetAllSemestersQuery(null);
  console.log(data);
  return <div>academicSemester</div>;
}

export default AcademicSemester;
