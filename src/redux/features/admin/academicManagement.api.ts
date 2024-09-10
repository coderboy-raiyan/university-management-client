import {
  TAcademicSemester,
  TQueryParams,
  TResponseRedux,
} from "../../../types";
import baseApi from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args?.forEach((element: TQueryParams) => {
            params.append(element?.name, element?.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
    createAcademicSemesters: builder.mutation({
      query: (body) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body,
      }),
    }),
    createAcademicFaculty: builder.mutation({
      query: (body) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body,
      }),
    }),
    getAllAcademicFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useCreateAcademicSemestersMutation,
  useCreateAcademicFacultyMutation,
  useGetAllAcademicFacultyQuery,
} = academicManagementApi;
export default academicManagementApi;
