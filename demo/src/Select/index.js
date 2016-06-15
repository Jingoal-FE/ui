import React from 'react'
import { Select } from 'jui';

export default class CalendarDemo extends React.Component {
    handleChange(e) {
        console.log(`selected ${value}`);
    }

    render() {
        return (<div>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
                <Option value="lucy">Lucy</Option>
            </Select>
        </div>);
    }
}