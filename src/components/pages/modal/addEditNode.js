import React from 'react';
import { Modal } from 'antd';

export default class AddEditNode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
  
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
  
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
  
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    
    componentDidMount() {
        console.log(this.props);
        this.setState({
            visible: this.props.visible
        });
    };

    render() {
        return (
            <div>
                {/* <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button> */}
                <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                    <p>Some contents</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}
  