import React, { PropTypes } from 'react';
import classNames from 'classnames';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

export default function Col(props) {
    const { span, order, offset, push, pull, className, children, ...others } = props;
    let sizeClassObj = {};
    ['xs', 'sm', 'md', 'lg'].forEach(size => {
        let sizeProps = {};
        if (typeof props[size] === 'number') {
            sizeProps.span = props[size];
        } else if (typeof props[size] === 'object') {
            sizeProps = props[size] || {};
        }
        sizeClassObj = {
            ...sizeClassObj,
            [`jui-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`jui-col-${size}-order-${sizeProps.order}`]: sizeProps.order,
            [`jui-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset,
            [`jui-col-${size}-push-${sizeProps.push}`]: sizeProps.push,
            [`jui-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull,
        };
    });
    const classes = classNames({
        [`jui-col-${span}`]: span !== undefined,
        [`jui-col-order-${order}`]: order,
        [`jui-col-offset-${offset}`]: offset,
        [`jui-col-push-${push}`]: push,
        [`jui-col-pull-${pull}`]: pull,
        [className]: !!className,
        ...sizeClassObj,
    });

    return <div {...others} className={classes}>{children}</div>;
}

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
};
