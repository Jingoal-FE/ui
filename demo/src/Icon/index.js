import { Icon } from 'jgui'
import React from 'react'
import arrow from './test.html';

class IconDemo extends React.Component {
    render() {
        return (<div>
            <Icon type="search"></Icon>
            <i>{arrow}</i>
        </div>);
    }
}
export default IconDemo