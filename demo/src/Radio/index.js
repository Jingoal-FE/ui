import React from 'react'
import { Radio, Button, TextBox } from 'jgui';
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default class RadioDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            value: 1
        };
    }

    toggleDisabled() {
        this.setState({
            disabled: !this.state.disabled,
        });
    }

    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };

        return (<div>
            <div>
                <Radio>Radio</Radio>
            </div>
            <div>
                <Radio defaultChecked={false} disabled={this.state.disabled}>不可用</Radio>
                <br />
                <Radio defaultChecked disabled={this.state.disabled}>不可用</Radio>
                <div style={{ marginTop: 20 }}>
                    <Button type="primary" onClick={this.toggleDisabled.bind(this)}>
                        Toggle disabled
                    </Button>
                </div>
            </div>

            <div>
                <RadioGroup onChange={this.onChange.bind(this)} defaultValue="a">
                    <RadioButton value="a">杭州</RadioButton>
                    <RadioButton value="b">上海</RadioButton>
                    <RadioButton value="c">北京</RadioButton>
                    <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
                <RadioGroup onChange={this.onChange.bind(this)} defaultValue="a">
                    <RadioButton value="a">杭州</RadioButton>
                    <RadioButton value="b" disabled>上海</RadioButton>
                    <RadioButton value="c">北京</RadioButton>
                    <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
                <RadioGroup disabled onChange={this.onChange.bind(this)} defaultValue="a">
                    <RadioButton value="a">杭州</RadioButton>
                    <RadioButton value="b">上海</RadioButton>
                    <RadioButton value="c">北京</RadioButton>
                    <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
            </div>

            <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                <Radio style={radioStyle} key="a" value={1}>Option A</Radio>
                <Radio style={radioStyle} key="b" value={2}>Option B</Radio>
                <Radio style={radioStyle} key="c" value={3}>Option C</Radio>
                <Radio style={radioStyle} key="d" value={4}>
                    More...
                    {this.state.value === 4 ? <TextBox style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
            </RadioGroup>

            <RadioGroup onChange={this.onChange.bind(this)} value={this.state.value}>
                <Radio key="a" value={1}>A</Radio>
                <Radio key="b" value={2}>B</Radio>
                <Radio key="c" value={3}>C</Radio>
                <Radio key="d" value={4}>D</Radio>
            </RadioGroup>
        </div>);
    }
}