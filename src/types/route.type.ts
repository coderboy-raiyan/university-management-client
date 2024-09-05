import { ReactNode } from "react";

export type TRoutePaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: {
    name: string;
    path: string;
    element: ReactNode;
  }[];
};

export type TSideBarItems = {
  key: string;
  label: JSX.Element | string;
  children?: {
    key: string;
    label: JSX.Element | string;
  }[];
};
