import { Key } from "react";

export type TQueryParams = {
  name: string;
  value: boolean | Key;
};

export type TFormInputSelectOptions = {
  value: string;
  label: string;
  disabled?: boolean;
}[];
