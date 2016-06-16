import React from 'react';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import Icon from '../Icon';

export default class Button extends React.Component {
    static defaultProps = {
        prefixCls: 'jgui-btn',
        onClick() {},
        loading: false,
    }

    static propTypes = {
        type: React.PropTypes.string,
        shape: React.PropTypes.oneOf(['circle', 'circle-outline']),
        size: React.PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: React.PropTypes.oneOf(['submit', 'button', 'reset']),
        onClick: React.PropTypes.func,
        loading: React.PropTypes.bool,
        className: React.PropTypes.string,
        icon: React.PropTypes.string,
    }

    componentWillUnmount() {
        if (this.clickedTimeout) {
            clearTimeout(this.clickedTimeout);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    clearButton = (button) => {
        button.className = button.className.replace(` ${this.props.prefixCls}-clicked`, '');
    }

    handleClick = (...args) => {
        // Add click effect
        const buttonNode = findDOMNode(this);
        this.clearButton(buttonNode);
        this.clickedTimeout = setTimeout(() => buttonNode.className += ` ${this.props.prefixCls}-clicked`, 10);
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.clearButton(buttonNode), 500);

        this.props.onClick(...args);
    }

    // Handle auto focus when click button in Chrome
    handleMouseUp = (e) => {
        findDOMNode(this).blur();
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    }

    render() {
        const props = this.props;
        const { type, shape, size, className, htmlType, children, icon, loading, prefixCls, ...others } = props;

        // large => lg
        // small => sm
        const sizeCls = ({
                large: 'lg',
                small: 'sm',
            })[size] || '';

        const classes = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
            [`${prefixCls}-icon-only`]: !children && icon,
            [`${prefixCls}-loading`]: loading,
            [className]: className,
        });

        const iconType = loading ? 'loading' : icon;

        return (
            <button {...others}
                type={htmlType || 'button'}
                className={classes}
                onMouseUp={this.handleMouseUp}
                onClick={this.handleClick}>
                {iconType ? <Icon type={iconType} /> : null}{children}
            </button>
        );
    }
}
