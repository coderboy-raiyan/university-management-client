import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
    createAcademicSemesters: builder.mutation({
      query: (body) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useCreateAcademicSemestersMutation } =
  academicManagementApi;
export default academicManagementApi;
