import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Alayout.css'
import Aheader from '../../components/Aheader/Aheader'
import Atable from '../../components/Atable/Atable'
import List from '../../components/List/List'
import Date from '../../components/Date/Date'
import Comment from '../../components/Comment/Comment'
import {
  // htm5的浏览器路由模式
  BrowserRouter as Router,
  // 哈希模式
  // HashRouter as Router,
  // MemoryRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const { SubMenu } = Menu;
const {  Content, Sider } = Layout;
export default class Alayout extends React.Component{
    render(){
        return(
          <Router>
          <Layout>
          <Aheader/>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['3']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      subnav 1
                    </span>
                  }
                >
                  <Menu.Item key="1">
                  <Link to="/Atable">信息</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                  <Link to="/List">个人信息</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                  <Link to="/Date">行程</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                  <Link to="/Comment">评论</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      subnav 2
                    </span>
                  }
                >
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      subnav 3
                    </span>
                  }
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
              <Switch>
                  <Route path="/Atable">
                    <Atable/>
                  </Route>
                  <Route path="/List">
                    <List/>
                  </Route>
                  <Route path="/Date">
                  <Date/>
                  </Route>
                  <Route path="/Comment">
                  <Comment/>
                  </Route>
              </Switch>
              <Redirect to="/Date" />
              </Content>
            </Layout>
          </Layout>
        </Layout>
        </Router>
        )
    }
}
