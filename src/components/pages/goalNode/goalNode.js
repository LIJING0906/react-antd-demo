import React from 'react';
import { Breadcrumb, Button, Input, Table, Divider } from 'antd';
const { Search } = Input;
import AddEditNode from '../modal/addEditNode';

export default class GoalNode extends React.Component {
    state = {
        dataSource: [
            {
                key: '1',
                nodename: '胡彦斌',
                suplier: '测试平台方',
                createtime: '20190829',
            },
            {
                key: '2',
                nodename: '李易峰',
                suplier: '测试平台方',
                createtime: '20190822',
            }
        ],
        nodeDialog: {
            visible: false,
            data: {}
        }
    };
    addEditNode = (record) => {
        let data = {};
        if (record) {
            data = record; // 编辑
        } else {
            data = { content: '新增目标节点' }
        }
        this.setState({
            nodeDialog: Object.assign({}, this.state.nodeDialog, {visible: true, data: data})
        });
    }
    gotoDetail = (record) => {
        this.props.history.push(`/nodeDetail/${record.key}`)
    }
    refreshParent() {
        this.setState({
            nodeDialog: Object.assign({}, this.state.nodeDialog, {visible: false})
        })
    }
    render() {
        const columns = [
            {
                title: '节点名称',
                dataIndex: 'nodename',
                key: 'nodename',
            },
            {
                title: '供应商',
                dataIndex: 'suplier',
                key: 'suplier',
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
                        <Button type="primary" onClick={() => this.addEditNode()}>添加目标节点</Button>
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton 
                        style={{width:'300px',float:'right'}}/>
                    </div>
                    <Table dataSource={this.state.dataSource} columns={columns} />
                </div>
                {this.state.nodeDialog.visible && <AddEditNode visible={this.state.nodeDialog} refreshParent={this.refreshParent.bind(this)}></AddEditNode>}
            </div>
        )
    }
}