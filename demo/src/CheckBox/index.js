import React from 'react'
import { CheckBox } from 'jgui';
const CheckBoxGroup = CheckBox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橘', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: '苹果', value: 'Apple' },
    { label: '梨', value: 'Pear' },
    { label: '橘', value: 'Orange', disabled: false },
];

export default class CheckBoxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            disabled: true
        };
    }

    onChange(e) {
        console.log('checked = ' + e.target.checked);
    }

    render() {
        return (<div>
            <CheckBox defaultChecked={false} onChange={this.onChange.bind(this)}>CheckBox</CheckBox>

            <div>
                <p style={{ marginBottom: '20px' }}>
                    <CheckBox checked={this.state.checked}
                              disabled={this.state.disabled}
                              onChange={this.onChange.bind(this)}>
                    </CheckBox>
                </p>
            </div>

            <CheckBox defaultChecked={false} disabled />
            <br />
            <CheckBox defaultChecked disabled />

            <div>
                <CheckBoxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange.bind(this)} />
                <br />
                <CheckBoxGroup options={options} defaultValue={['Pear']} onChange={this.onChange.bind(this)} />
                <br />
                <CheckBoxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange.bind(this)} />
            </div>
        </div>);
    }
}