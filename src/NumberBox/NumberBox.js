import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';

export default class NumberBox extends React.Component {
    static defaultProps = {
        prefixCls: 'jui-input-number',
        step: 1,
    }

    render() {
        const { className, size, ...other } = this.props;
        const numberBoxClass = classNames({
            [`${this.props.prefixCls}-lg`]: size === 'large',
            [`${this.props.prefixCls}-sm`]: size === 'small',
            [className]: !!className,
        });

        return <RcInputNumber className={numberBoxClass} {...other} />;
    }
}