import React from 'react';
import classNames from 'classnames';

const prefix = 'jgui-btn-group-';

export default function ButtonGroup(props) {
    const { size, className, ...others } = props;

    // large => lg
    // small => sm
    const sizeCls = ({
            large: 'lg',
            small: 'sm',
        })[size] || '';

    const classes = classNames({
        'jgui-btn-group': true,
        [prefix + sizeCls]: sizeCls,
        [className]: className,
    });

    return <div {...others} className={classes} />;
}

ButtonGroup.propTypes = {
    size: React.PropTypes.oneOf(['large', 'small']),
};