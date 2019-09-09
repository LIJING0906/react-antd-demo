import React from 'react';
import { Breadcrumb, Icon, Button, Table, Tag } from 'antd';

export default class NodeList extends React.Component {
    state = {
        dataSource: [
            {
                key: '1',
                ip: '10.22.3.6',
                port: 32,
                weight: 100,
                canary: 'yes',
                tags: ['ok'],
            },
            {
                key: '2',
                ip: '10.6.54.1',
                port: 666,
                weight: 10,
                canary: 'no',
                tags: ['er'],
            }
        ]
    };
    render() {
        const columns = [
            {
                title: 'IP地址/域名',
                dataIndex: 'ip',
                key: 'ip',
            },
            {
                title: '端口号',
                dataIndex: 'port',
                key: 'port',
            },
            {
                title: '健康状态',
                dataIndex: 'tags',
                key: 'tags',
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            let color = '';
                            if (tag === 'ok') {
                                color = '#13ce66';
                            } else {
                                color = '#e6a23c';
                            }
                            return (
                            <Tag color={color} key={tag}>
                                {tag}
                            </Tag>
                            );
                      })}
                    </span>
                ),
            },
            {
                title: '权重',
                dataIndex: 'weight',
                key: 'weight',
            },
            {
                title: '金丝雀节点',
                dataIndex: 'canary',
                key: 'canary',
                render: (text, record) => (
                    <span>
                        {record.canary === 'yes' ? '是' : '否'}
                    </span>
                ),
            }
        ]
        return (
            <div className="gw-nodelist">
                <Breadcrumb style={{height:'50px',lineHeight:'50px',background:'#fff',paddingLeft:'20px',borderRadius:'2px',boxShadow:'0 2px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}>
                    <Breadcrumb.Item style={{color:'#666'}}>
                        <span style={{cursor:'pointer'}} onClick={() => this.props.history.push('/goalnode')}><Icon type="rollback"/>返回</span> | 节点详情
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding:'20px',background:'#fff'}}>
                    <div style={{marginBottom:'16px'}}>
                        <Button type="primary">刷新</Button>
                    </div>
                    <Table dataSource={this.state.dataSource} columns={columns} pagination={false}/>
                </div>
            </div>
        )
    }
}