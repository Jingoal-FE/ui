import React from 'react'
import { Tree } from 'jgui';
const TreeNode = Tree.TreeNode

export default class RadioDemo extends React.Component {
    constructor(props) {
        super(props);

        const keys = this.props.keys;
        this.state = {
            defaultExpandedKeys: keys,
            defaultSelectedKeys: keys,
            defaultCheckedKeys: keys,
        };
    }

    static defaultProps = {
        keys: ['0-0-0', '0-0-1'],
    }


    onSelect(info) {
        console.log('selected', info);
    }

    onCheck(info) {
        console.log('onCheck', info);
    }

    render() {
        return (<div>
            <Tree className="myCls" showLine multiple checkable
                  defaultExpandedKeys={this.state.defaultExpandedKeys}
                  defaultSelectedKeys={this.state.defaultSelectedKeys}
                  defaultCheckedKeys={this.state.defaultCheckedKeys}
                  onSelect={this.onSelect.bind(this)} onCheck={this.onCheck.bind(this)}
            >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0" disabled>
                        <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
                        <TreeNode title="leaf" key="0-0-0-1" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title={<span style={{ color: '#08c' }}>sss</span>} key="0-0-1-0" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        </div>);
    }
}