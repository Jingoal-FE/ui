import React from 'react';
import classNames from 'classnames';
import TabPanel from './TabPanel';


export default class Tabs extends React.Component {
    static defaultProps = {
        prefixCls: 'jgui-tabs',
        onChange() {},
    }
    
    static propTypes = {
        type: React.PropTypes.string,
        className: React.PropTypes.string,
        defaultTabKey: React.PropTypes.string,
        onChange: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            activeKey: props.defaultTabKey || '0',
        };
    }
    
    handleBarClick = (tabKey) => {
        this.setState({
           activeKey: tabKey, 
        });
        this.props.onChange(tabKey);
    }
    
    render() {
        const props = this.props;
        const { prefixCls, type, className, children } = props;
        let barTabs = children.map((child, idx) => {
            let tabkey = child.props.tabkey || idx + '';
            let classes = classNames({
                [`${prefixCls}-tab`]: true,
                [`${prefixCls}-tab-active`]: (this.state.activeKey === tabkey),
            });
            return (
                <div 
                    className={classes}
                    onClick={() => this.handleBarClick(tabkey)}>
                    {child.props.tab}
                </div>
            );
        });
        let panels = children.map((child, idx) => {
            let tabkey = child.props.tabkey || idx + '';
            let panelclasses = classNames({
                [`${prefixCls}-panel`]: true,
                [`${prefixCls}-panel-hidden`]: !(this.state.activeKey === tabkey), 
            });
            return (
                <div
	                className={panelclasses}>
                    {child.props.children}
                </div>
            );
        });
        let tabsclasses = classNames({
            [`${prefixCls}`]: true,
            [`${className}`]: className,
            [`${prefixCls}-primary`]: type === 'primary',
        });
        return (
            <div className={tabsclasses}>
                <div className={`${prefixCls}-bar clearfix`}>
                    {barTabs}
                </div>
                <div className={`${prefixCls}-content`}>
                    {panels}
                </div>
            </div>
        );
    }
}
