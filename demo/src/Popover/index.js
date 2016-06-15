import { Popover, Button } from 'jui'
import React from 'react'

const content = (
    <div>
        <p>内容</p>
        <p>内容</p>
    </div>
);

class PopoverDemo extends React.Component {
    render() {
        return (
            <Popover content={content} title="标题">
                <Button type="primary">弹出卡片</Button>
            </Popover>
        );
    }
}
export default PopoverDemo