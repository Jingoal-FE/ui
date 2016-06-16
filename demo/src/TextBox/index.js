import { TextBox, Select, SearchBox, NumberBox } from 'jgui'
import React from 'react'
const InputGroup = TextBox.Group;

class ButtonDemo extends React.Component {
    render() {
        return (<div className="demo-textbox">
            <div>
                <TextBox size="large" placeholder="大尺寸" />
                <TextBox placeholder="默认尺寸" />
                <TextBox size="small" placeholder="小尺寸" />
            </div>
            <br/>
            <div>
                <SearchBox placeholder="input search text"
                             onSearch={value => console.log(value)} style={{ width: 200 }}
                />
            </div>
            <br/>
        </div>);
    }
}
export default ButtonDemo