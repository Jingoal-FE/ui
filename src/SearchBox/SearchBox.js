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
            'jgui-search-btn': true,
            'jgui-search-btn-noempty': !!this.state.value.trim(),
        });
        const searchCls = classNames({
            'jgui-search-input': true,
            'jgui-search-input-focus': this.state.focus,
        });

        return (
            <div className="jgui-search-input-wrapper" style={style}>
                <InputGroup className={searchCls}>
                    <TextBox {...restProps} value={this.state.value} onChange={this.handleInputChange.bind(this)}
                                          onFocus={this.handleFocusBlur.bind(this)} onBlur={this.handleFocusBlur.bind(this)} onPressEnter={this.handleSearch.bind(this)}
                    />
                    <div className="jgui-input-group-wrap">
                        <Button icon="search" className={btnCls} size={size} onClick={this.handleSearch.bind(this)} />
                    </div>
                </InputGroup>
            </div>
        );
    }
};