import FacultyDashboard from "../pages/faculty/facultyDashboard";
import OfferedCourses from "../pages/faculty/offeredCourses";
import { TRoutePaths } from "../types";

const facultyPaths: TRoutePaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <OfferedCourses />,
  },
];

export default facultyPaths;
