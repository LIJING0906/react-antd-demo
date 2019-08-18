import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
export default class Head extends React.Component {
    render() {
        return (
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
        )
    }
}