import React from 'react';

export default props => {
    let { type, className = '', ...other } = props;
    className += ` jgui-icon jgui-icon-${type}`;
    return <i className={className} {...other} />;
};
