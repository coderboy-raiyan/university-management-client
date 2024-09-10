import baseApi from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (body) => ({
        url: "/users/create-student",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateStudentMutation } = userManagementApi;
export default userManagementApi;
