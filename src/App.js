import React from "react";
import { Layout, Space } from 'antd';
import "./App.css";
import MainRoutes from "./Components/MainRoutes.jsx";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 40
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center'
  };



function App() {
  
  return (
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
    >
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={{padding : '5px 5px 5px'}}>
      <MainRoutes />
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
    </Space>
  );
}





export default App;