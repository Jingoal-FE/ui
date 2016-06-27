import React from 'react';

export default class TabPanel extends React.Component {
    static propTypes = {
        tabkey: React.PropTypes.string,
        tab: React.PropTypes.string,
    }

    render() {
        const props = this.props;
        const { tab, tabkey, className, children } = props;
        return (
            <div tab={tab} tabkey={tabkey} className={className}>{children}</div>
        );
    }
}
