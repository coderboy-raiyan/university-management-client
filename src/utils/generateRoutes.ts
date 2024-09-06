import { TRoutePaths } from "../types";

function generateRoutes(routes: TRoutePaths[]) {
  return routes.reduce(
    (prev: Omit<TRoutePaths, "children" | "name">[], curr) => {
      if (curr.children) {
        curr?.children?.forEach(({ path, element }) => {
          prev.push({
            path,
            element,
          });
        });
      }
      if (curr?.path && curr?.element) {
        prev.push({
          path: curr?.path,
          element: curr?.element,
        });
      }
      return prev;
    },
    []
  );
}

export default generateRoutes;
