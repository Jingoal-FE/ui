import React from 'react'
import { Link } from 'react-router'
export default class all extends React.Component {
    render() {
        return  (
            <div>
                <div>示例</div>
                <div><Link to="/textbox">输入框</Link></div>
            </div>
        );
    }
}
