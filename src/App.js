import { useLocation, Route, Router, Switch } from "wouter";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Components/LoginComponent/Login";
import Loader from "./Components/LoadingComponent/Loader";
import corpozulia from "./images/corpozulia.png";
import defaultLogo from "./images/gray-icon.png";
import ContentData from "./Components/ContentComponent/Content";
import { LogoutOutlined } from "@ant-design/icons";
import { Layout, Space, Avatar } from "antd";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const [location, pushLocation] = useLocation();

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/loader" component={Loader} />
        <Router base="/home">
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
                <Space
                  direction="vertical"
                  size="small"
                  style={{ display: "flex" }}
                >
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
        </Router>
      </Switch>
    </div>
  );
}

export default App;
