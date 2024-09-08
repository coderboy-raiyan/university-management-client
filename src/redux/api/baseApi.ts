/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { TUser } from "../../types";
import { logout, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.auth?.accessToken;

    if (token) {
      headers.append("authorization", token);
    }
    return headers;
  },
});

const customBaseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    try {
      const {
        data: { data },
      } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/refresh-token`,
        {},
        { withCredentials: true }
      );
      const user = jwtDecode(data?.accessToken) as TUser;
      api.dispatch(setUser({ user, accessToken: data?.accessToken }));
      result = await baseQuery(args, api, extraOptions);
    } catch (error) {
      api.dispatch(logout());
    }
  }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQueryWithRefreshToken,
  endpoints: () => ({}),
});

export default baseApi;
