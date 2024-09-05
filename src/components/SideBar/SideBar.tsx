import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.route";
import generateSideBarMenuItems from "../../utils/generateSideBarMenuItems";

const { Sider } = Layout;

function SideBar() {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div style={{ color: "white", textAlign: "center", padding: "10px" }}>
        <h1>University M.</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={generateSideBarMenuItems("admin", adminPaths)}
      />
    </Sider>
  );
}

export default SideBar;
