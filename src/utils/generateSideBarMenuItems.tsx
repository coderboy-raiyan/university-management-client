import { Link } from "react-router-dom";
import { TRoutePaths, TSideBarItems, TUserRoles } from "../types";

function generateSideBarMenuItems(role: TUserRoles, routes: TRoutePaths[]) {
  return routes.reduce((prev: TSideBarItems[], curr) => {
    if (curr?.path && curr?.name) {
      prev.push({
        key: curr?.name,
        label: <Link to={`/${role}/${curr?.path}`}>{curr?.name}</Link>,
      });
    }
    if (curr?.children) {
      prev.push({
        key: curr?.name,
        label: curr?.name,
        children: curr?.children?.map(({ name, path }) => ({
          key: name,
          label: <Link to={`/${role}/${path}`}>{name}</Link>,
        })),
      });
    }
    return prev;
  }, []);
}

export default generateSideBarMenuItems;
