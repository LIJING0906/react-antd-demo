import React from 'react';
import { Breadcrumb, Button, Input, Table, Divider } from 'antd';
const { Search } = Input;
import AddEditNode from '../modal/addEditNode';

export default class GoalNode extends React.Component {
    state = {
        dataSource: [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '李易峰',
                age: 32,
                address: '金牛区天府广场2号',
            }
        ],
        nodeDialog: {
            visible: false
        }
    };
    addEditNode = (record) => {
        this.setState({
            nodeDialog: Object.assign({}, this.state.nodeDialog, {visible: true})
        });
    }
    gotoDetail = (record) => {
        console.log('节点详情', record.name);
    }
    render() {
        const columns = [
            {
                title: '节点名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '供应商',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '创建时间',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="link" onClick={() => this.gotoDetail(record)}>节点详情</Button>
                        <Divider type="vertical" />
                        {/* <Button type="link" onClick={() => { this.addEditNode(record) }}>编辑</Button> */}
                        <Button type="link" onClick={() => this.addEditNode(record)}>编辑</Button>
                        {/* <Button type="link" onClick={this.addEditNode}>编辑</Button> */}
                    </span>
                ),
            },
        ]
        return (
            <div className="gw-goalnode">
                <Breadcrumb style={{height:'50px',lineHeight:'50px',background:'#fff',paddingLeft:'20px',borderRadius:'2px',boxShadow:'0 2px 6px rgba(0, 0, 0, 0.1)',marginBottom:'20px'}}>
                    <Breadcrumb.Item style={{fontWeight:'bold',color:'#666'}}>目标节点</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{padding:'20px',background:'#fff'}}>
                    <div style={{marginBottom:'16px'}}>
                        <Button type="primary" onClick={(e) => {
                            this.setState({
                                nodeDialog: Object.assign({}, this.state.nodeDialog, {visible: true})
                            });
                            console.log(this.state);
                        }}>添加目标节点</Button>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton 
                        style={{width:'300px',float:'right'}}/>
                    </div>
                    <Table dataSource={this.state.dataSource} columns={columns} />
                </div>
                {this.state.nodeDialog.visible && <AddEditNode visible={true}></AddEditNode>}
            </div>
        )
    }
}