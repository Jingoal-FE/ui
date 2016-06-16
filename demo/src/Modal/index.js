import { Modal, Button } from 'jgui'
import React from 'react'

class ModalDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModal() {
        this.setState({
            visible: true,
        });
    }

    handleOk() {
        console.log('点击了确定');
        this.setState({
            visible: false,
        });
    }

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>显示对话框</Button>
                <Modal title="第一个 Modal" visible={this.state.visible}
                       onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                </Modal>
            </div>
        );
    }
}
export default ModalDemo