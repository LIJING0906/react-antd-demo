import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
export default class Side extends React.Component {
    render() {
        return (
            <Sider width={200}>
                <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '890px', borderRight: 0 }}>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                            <Icon type="user" />
                            API网关
                        </span>
                        }>
                        <Menu.Item key="1"><Link to="/goalnode">目标节点</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/serverManage">服务管理</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/safety">安全认证</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/consumer">消费方注册</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/audit">API审核</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/manage">API管理</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
    }
}