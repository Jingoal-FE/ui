import React from 'react';
import ReactDom from 'react-dom';
import { Input } from 'antd';

class TextBox extends Input {
  static defaultProps = {
    defaultValue: '',
    disabled: false,
    type: 'text',
    theme: '',
    prefixCls: 'jg-textbox',
    onPressEnter() {},
    onKeyDown() {},
  }

  static propTypes = {
    type: React.PropTypes.oneOf(['text', 'password', 'textarea']),
    id: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    size: React.PropTypes.oneOf(['small', 'default', 'large']),
    disabled: React.PropTypes.bool,
    value: React.PropTypes.any,
    defaultValue: React.PropTypes.any,
    className: React.PropTypes.string,
    addonBefore: React.PropTypes.node,
    addonAfter: React.PropTypes.node,
    prefixCls: React.PropTypes.string,
    onPressEnter: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
  }

  getValue() {
    return  ReactDom.findDOMNode(this.refs.input).value;
  }
}

export default TextBox;
