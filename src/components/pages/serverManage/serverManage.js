import React from 'react';
import { Breadcrumb, Button, Input, Table, Divider } from 'antd';
const { Search } = Input;

export default class ServerManage extends React.Component {
    state = {
        dataSource: [
            {
                key: '1',
                servername: '胡彦斌',
                suplier: '测试平台方',
                desc: 'gasfgasfhawrha',
                createtime: '20190829',
            },
            {
                key: '2',
                servername: '李易峰',
                suplier: '测试平台方',
                desc: '给仍额the弹劾孙涛',
                createtime: '20190822',
            }
        ],
    };
    addEditServer = (record) => {
        if (record) {
            this.props.history.push(`/addEditServer/edit`);
        } else {
            this.props.history.push(`/addEditServer/add`);
        }
    }
    goApiManage = (record) => {
        this.props.history.push(`/sApiManage/${record.key}`);
    }
    render() {
        const columns = [
            {
                title: '服务名称',
                dataIndex: 'servername',
                key: 'servername',
            },
            {
                title: '供应商',
                dataIndex: 'suplier',
                key: 'suplier',
            },
            {
                title: '描述',
                dataIndex: 'desc',
                key: 'desc',
            },
            {
                title: '创建时间',
                dataIndex: 'createtime',
                key: 'createtime',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.createtime - b.createtime,
                sortDirections: ['descend', 'ascend']
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="link" onClick={() => this.goApiManage(record)}>API管理</Button>
                        <Divider type="vertical" />
                        {/* <Button type="link" onClick={() => { this.addEditServer(record) }}>编辑</Button> */}
                        <Button type="link" onClick={() => this.addEditServer(record)}>编辑</Button>
                        {/* <Button type="link" onClick={this.addEditServer}>编辑</Button> */}
                    </span>
                ),
            },
        ]
        return (
            <div className="gw-goalnode">
                <Breadcrumb style={{height:'50px',lineHeight:'50px',background:'#fff',paddingLeft:'20px',borderRadius:'2px',boxShadow:'0 2px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}>
                    <Breadcrumb.Item style={{fontWeight:'bold',color:'#666'}}>服务管理</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding:'20px',background:'#fff'}}>
                    <div style={{marginBottom:'16px'}}>
                        <Button type="primary" onClick={() => this.addEditServer()}>创建服务</Button>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton 
                        style={{width:'300px',float:'right'}}/>
                    </div>
                    <Table dataSource={this.state.dataSource} columns={columns} />
                </div>
            </div>
        )
    }
}