import AcademicDepartment from "../pages/admin/academicManagement/academicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/academicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/academicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/createAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/createAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/createAcademicSemester";
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
      {
        name: "Create A. semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      {
        name: "create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
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
