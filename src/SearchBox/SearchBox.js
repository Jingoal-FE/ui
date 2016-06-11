import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from '../Button';
import TextBox from '../TextBox';
const InputGroup = TextBox.Group;

export default class SearchBox extends Component {
    static defaultProps = {
        defaultValue: '',
        disabled: false,
        type: 'text',
        onSearch: null
    }

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            focus: false,
        }
    }
    
    handleInputChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    
    handleFocusBlur(e) {
        this.setState({
            focus: e.target === document.activeElement,
        });
    }

    handleSearch() {
        if (this.props.onSearch) {
            this.props.onSearch(this.state.value);
        }
    }
    
    render() {
        const { style, size, ...restProps } = this.props;
        const btnCls = classNames({
            'jui-search-btn': true,
            'jui-search-btn-noempty': !!this.state.value.trim(),
        });
        const searchCls = classNames({
            'jui-search-input': true,
            'jui-search-input-focus': this.state.focus,
        });

        return (
            <div className="jui-search-input-wrapper" style={style}>
                <InputGroup className={searchCls}>
                    <TextBox {...restProps} value={this.state.value} onChange={this.handleInputChange.bind(this)}
                                          onFocus={this.handleFocusBlur.bind(this)} onBlur={this.handleFocusBlur.bind(this)} onPressEnter={this.handleSearch.bind(this)}
                    />
                    <div className="jui-input-group-wrap">
                        <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch.bind(this)} />
                    </div>
                </InputGroup>
            </div>
        );
    }
};