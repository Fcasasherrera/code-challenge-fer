import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

class LayoutComponent extends React.Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
                {/* <a href="/"> */}
                    <PieChartOutlined />
                    <span>Option 1</span>
                {/* </a> */}
            </Menu.Item>
            <Menu.Item key="2">
                {/* <a href="/"> */}
                    <DesktopOutlined />
                    <span>Option 2</span>
                {/* </a>    */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Todo</Breadcrumb.Item>
              <Breadcrumb.Item>Task 1</Breadcrumb.Item>
            </Breadcrumb>
            <div className="" style={{ padding: 24, minHeight: 360 }}>
                {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent;