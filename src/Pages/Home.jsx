import {useLocation} from 'wouter'
import { Layout } from 'antd'
import '../App.css'

export default function Home() {
    
    const {Header, Footer, Sider, Content} = Layout

    return (
        <Layout>
      <Sider width={200} className="Sider" >Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>)
}