import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import generateRoutes from "../utils/generateRoutes";
import { adminPaths } from "./admin.route";
import facultyPaths from "./faculty.route";
import studentPaths from "./student.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: generateRoutes(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: generateRoutes(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: generateRoutes(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
