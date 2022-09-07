import { useLocation, Router, Route } from "wouter";
import { Layout, Space, Avatar } from "antd";
import corpozulia from "../images/corpozulia.png";
import defaultLogo from "../images/gray-icon.png";
import ContentData from "../Components/ContentComponent/Content";
import { LogoutOutlined } from "@ant-design/icons";
export default function Home() {
  const { Header, Footer, Sider, Content } = Layout;
  const [location, pushLocation] = useLocation();

  return (
    <Layout>
      <Header className="header-silver">
        <img src={corpozulia} style={{ height: "4.2rem" }} alt="" />
        <span className="navButton" style={{ marginTop: "1rem" }}>
          <LogoutOutlined
            style={{ display: "block" }}
            onClick={() => pushLocation("/")}
          />
        </span>
      </Header>
      <Layout>
        <Sider width={200} className="sider">
          <div style={{ padding: "1rem" }}>
            <Avatar size={64} src={defaultLogo} />
          </div>
          <Space direction="vertical" size="small" style={{ display: "flex" }}>
            <li className="proyect-tab">proyecto beta</li>
            <li className="proyect-tab">proyecto alpha</li>
          </Space>
        </Sider>
        <Content>
          <ContentData />
        </Content>
      </Layout>
      <Footer
        style={{
          position: "fixed",
          bottom: "0px",
          width: "100%",
          background: "#bbbfca",
        }}
      >
        footer info
      </Footer>
    </Layout>
  );
}
