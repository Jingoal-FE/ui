import React from 'react';
import Radio from './Radio';

export default class RadioButton extends React.Component {
    static defaultProps = {
        prefixCls: 'jgui-radio-button',
    }
    render() {
        return (
            <Radio {...this.props} />
        );
    }
}
