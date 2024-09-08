import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TError } from "./error.type";

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data: T;
  meta?: TMeta;
  error?: TError;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;
