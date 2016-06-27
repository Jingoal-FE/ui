import React, { PropTypes } from 'react';
import TextBox from '../TextBox';
import Button from '../Button';
import classNames from 'classnames';

export default class Pager extends React.Component {
    static defaultProps = {
        prefixCls: 'jgui-pager',
        onChange(num) {},
    }

    static propTypes = {
        current: PropTypes.number,
        total: PropTypes.number,
        pageSize: PropTypes.number,
    }

    constructor(props) {
        super(props);
        const { pageSize, total, current } = props;
        let pSize = pageSize || 15;
        let pTotal = Math.floor(total/pSize) + (total % pSize > 0 ? 1 : 0);
        let pCurrent = current || 1;
        if (pCurrent < 1) {
            pCurrent = 1;
        }
        if (pCurrent > pTotal) {
            pCurrent = pTotal;
        }
        this.state = {
            current: pCurrent,
            pageSize: pSize,
            pageTotal: pTotal,
            inputValue: '',
        }
    }

    handlePageClick = (num) => {
        this.setState({
            current: num,
        });
        this.props.onChange(num);
    }

    handlePageJump = () => {
        let num = parseInt(this.state.inputValue) || this.state.current;
        if (num < 1) {
            num = 1;
        } else if (num > this.state.pageTotal) {
            num = this.state.pageTotal;
        }
        this.handlePageClick(num);
        this.setState({
            inputValue: num,
        });
    }

    handleInputChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        });
    }

    createArray() {
        const state = this.state;
        const { current, pageTotal } = state;
        let array = [];
        let pushnum = (arr, min, max) => {
            for (let num = min; num <= max; num++) {
                arr.push(num);
            }
        }
        if (current !== 1) {
            array.push('prev');
        }
        if (pageTotal <= 8) {
            pushnum(array, 1, pageTotal);
        } else {
            const delta = 4;
            let leftvalue = 1 + delta;
            let rightvalue = pageTotal - delta;
            if (current < leftvalue) {
                pushnum(array, 1, 2*delta - 1);
                array.push('skip');
                array.push(pageTotal);
            } else if (current === leftvalue) {
                pushnum(array, 1, 2*delta);
                array.push('skip');
                array.push(pageTotal);
            } else if (current < rightvalue) {
                array.push(1);
                array.push('skip');
                pushnum(array, current - (delta -1), current + (delta - 1));
                array.push('skip');
                array.push(pageTotal);
            } else if (current === rightvalue) {
                array.push(1);
                array.push('skip');
                pushnum(array, current - (delta - 1), current + (delta - 1));
                array.push(pageTotal);
            } else if (current > rightvalue) {
                array.push(1);
                array.push('skip');
                pushnum(array, pageTotal - 2*(delta - 1), pageTotal);
            }
        }
        if (current !== pageTotal) {
            array.push('next');
        }
        return array;
    }

    renderPageNum(array) {
        const prefixCls = this.props.prefixCls;
        let current = this.state.current;
        return array.map((item, idx) => {
            if (item === 'prev'){
                return (
                    <li className={`${prefixCls}-list-item`} onClick={() => this.handlePageClick(current - 1)}>
                        <Button>上一页</Button>
                    </li>
                );
            } else if (item === 'next') {
                return (
                    <li className={`${prefixCls}-list-item`} onClick={() => this.handlePageClick(current + 1)}>
                        <Button>下一页</Button>
                    </li>
                );
            } else if (item === 'skip') {
                return (
                    <li className={`${prefixCls}-list-item`}>
                        <div>...</div>
                    </li>
                );
            } else {
                let itemclasses = classNames({
                    [`${prefixCls}-list-item`]: true,
                    [`${prefixCls}-list-item-active`]: item === current,
                });
                return (
                    <li className={itemclasses} onClick={() => this.handlePageClick(item)}>
                        <a>{item}</a>
                    </li>
                );
            }
        });
    }

    render() {
        const props = this.props;
        const state = this.state;
        const { prefixCls, total } = props;
        const { current, pageTotal, inputValue } = state;
        let jumperclasses = classNames({
            [`${prefixCls}-jumper`]: true,
            [`${prefixCls}-jumper-hidden`]: pageTotal <= 8,
        });
        let pagelist = this.renderPageNum(this.createArray());
        
        return (
            <div className={prefixCls}>
                <ul className={`${prefixCls}-list clearfix`}>
                    {pagelist}
                </ul>
                <div className={jumperclasses}>
                    <span>共{pageTotal}页，到第</span>
                    <TextBox onChange={this.handleInputChange} onPressEnter={this.handlePageJump} value={inputValue} className={`${prefixCls}-jumper-input`}/>
                    <span>页</span>
                    <Button className={`${prefixCls}-jumper-btn`} onClick={this.handlePageJump}>确定</Button>
                </div>
            </div>
        );
    }
}