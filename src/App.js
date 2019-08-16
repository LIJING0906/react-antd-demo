import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
  	render() {
    	return (
      		<div className="App">
        		<Layout>
					<Header className="header">
						<div className="logo"/>
						<Menu
							theme="dark"
							mode="horizontal"
							// defaultSelectedKeys={['2']}
							style={{ lineHeight: '64px',float: 'right' }}>
							<Menu.Item key="1">消息</Menu.Item>
							<Menu.Item key="2">用户名</Menu.Item>
						</Menu>
					</Header>
					<Layout>
						<Sider width={200} style={{ background: '#fff' }}>
							<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}>
							<SubMenu
								key="sub1"
								title={
								<span>
									<Icon type="user" />
									API网关
								</span>
								}>
								<Menu.Item key="1">目标节点</Menu.Item>
								<Menu.Item key="2">服务管理</Menu.Item>
								<Menu.Item key="3">安全认证</Menu.Item>
								<Menu.Item key="4">消费方注册</Menu.Item>
								<Menu.Item key="5">API审核</Menu.Item>
								<Menu.Item key="6">API管理</Menu.Item>
							</SubMenu>
							<SubMenu
								key="sub2"
								title={
								<span>
									<Icon type="laptop" />
									subnav 2
								</span>
								}>
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
								}>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
							</Menu>
						</Sider>
						<Layout style={{ padding: '0 24px 24px' }}>
							<Breadcrumb style={{ margin: '16px 0',textAlign: 'left' }}>
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
							}}>
							Content
							</Content>
						</Layout>
					</Layout>
				</Layout>
      		</div>
    	);
  	}
}

export default App;
