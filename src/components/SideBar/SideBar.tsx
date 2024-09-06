import { Layout, Menu } from "antd";
import { UserRoles } from "../../constant/user.constant";
import { adminPaths } from "../../routes/admin.route";
import facultyPaths from "../../routes/faculty.route";
import studentPaths from "../../routes/student.route";
import { TUserRoles } from "../../types";
import generateSideBarMenuItems from "../../utils/generateSideBarMenuItems";

const { Sider } = Layout;

function SideBar() {
  const role: TUserRoles = "faculty";
  let items;
  switch (role) {
    case UserRoles.admin:
      items = generateSideBarMenuItems("admin", adminPaths);
      break;
    case UserRoles.faculty:
      items = generateSideBarMenuItems("faculty", facultyPaths);
      break;
    case UserRoles.student:
      items = generateSideBarMenuItems("student", studentPaths);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div style={{ color: "white", textAlign: "center", padding: "10px" }}>
        <h1>University M.</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
}

export default SideBar;
