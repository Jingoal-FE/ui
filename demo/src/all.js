import React from 'react'
import { Link } from 'react-router'
export default class all extends React.Component {
    render() {
        return  (
            <div>
                <div>示例</div>
                <div><Link to="/textbox">TextBox</Link></div>
                <div><Link to="/button">Button</Link></div>
                <div><Link to="/radio">Radio</Link></div>
                <div><Link to="/checkbox">CheckBox</Link></div>
                <div><Link to="/select">Select</Link></div>
                <div><Link to="/modal">Modal</Link></div>
                <div><Link to="/popover">Popover</Link></div>
                <div><Link to="/drawer">Drawer</Link></div>
                <div><Link to="/table">Table</Link></div>
                <div><Link to="/pager">Pager</Link></div>
                <div><Link to="/tabs">Tabs</Link></div>
                <div><Link to="/tree">Tree</Link></div>
                <div><Link to="/uploader">Uploader</Link></div>
                <div><Link to="/calendar">Calendar</Link></div>
                <div><Link to="/image">Image</Link></div>
                <div><Link to="/icon">Icon</Link></div>
                <div><Link to="/tooltip">Tooltip</Link></div>
                <div><Link to="/editor">Editor</Link></div>
            </div>
        );
    }
}
