import StudentDashboard from "../pages/student/studentDashboard";
import { TRoutePaths } from "../types";

const studentPaths: TRoutePaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
];

export default studentPaths;
