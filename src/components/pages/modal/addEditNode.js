import React from 'react';
import { Modal } from 'antd';

export default class AddEditNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            data: {}
        };
    }
  
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
  
    handleOk = e => {
        this.props.refreshParent();
    };
  
    handleCancel = e => {
        this.props.refreshParent();
    };
    
    componentDidMount() {
        this.setState({
            visible: this.props.visible.visible,
            data: this.props.visible.data
        });
    };

    render() {
        return (
            <div>
                <Modal
                title={this.state.data.name?"编辑目标节点":"添加目标节点"}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    {
                        Object.keys(this.state.data).map((key, index) => {
                            return <p key={index}>{key}：{this.state.data[key]}</p>
                        })
                    }
                </Modal>
            </div>
        );
    }
}
  