import AdminDashboard from "../pages/admin/adminDashboard";
import CreateAdmin from "../pages/admin/createAdmin";
import CreateFaculty from "../pages/admin/createFaculty";
import CreateStudent from "../pages/admin/createStudent";
import { TRoutePaths } from "../types";

export const adminPaths: TRoutePaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
