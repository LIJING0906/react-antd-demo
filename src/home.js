import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import Head from './components/header';
import Side from './components/navLeft';

export default class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Head/>
                <Layout>
                    <Side/>
                    <Layout className="main-container">
                        <Content style={{padding:'20px'}}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}