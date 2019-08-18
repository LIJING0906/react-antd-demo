import React from 'react';
// import { Router, Route, Link } from 'react-router';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default class Side extends React.Component {
    state = {
        theme: 'dark'
    };
    render() {
        return (
            <Menu
            mode="inline"
            theme={this.state.theme}
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
                    {/* <Link to="/node"><Menu.Item key="1">目标节点</Menu.Item></Link>
                    <Link to="/server"><Menu.Item key="2">服务管理</Menu.Item></Link>
                    <Link to="/safety"><Menu.Item key="3">安全认证></Menu.Item></Link>
                    <Link to="/consumer"><Menu.Item key="4">消费方注册></Menu.Item></Link>
                    <Link to="/audit"><Menu.Item key="5">API审核></Menu.Item></Link>
                    <Link to="/manage"><Menu.Item key="6">API管理></Menu.Item></Link> */}
                    <Menu.Item key="1">目标节点</Menu.Item>
                    <Menu.Item key="2">服务管理</Menu.Item>
                    <Menu.Item key="3">安全认证</Menu.Item>
                    <Menu.Item key="4">消费方注册</Menu.Item>
                    <Menu.Item key="5">API审核</Menu.Item>
                    <Menu.Item key="6">API管理</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}