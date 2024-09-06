import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
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
    name: "Academic M.",
    children: [
      {
        name: "Academic semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User M.",
    children: [
      {
        name: "Create student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
