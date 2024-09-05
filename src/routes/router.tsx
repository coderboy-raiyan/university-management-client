import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import generateRoutes from "../utils/generateRoutes";
import { adminPaths } from "./admin.route";

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
]);

export default router;
