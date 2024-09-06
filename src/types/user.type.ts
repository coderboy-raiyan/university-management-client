import { UserRoles } from "../constant/user.constant";

export type TUserRoles = keyof typeof UserRoles;

export type TUser = {
  userId: string;
  role: TUserRoles;
  iat: number;
  exp: number;
};
