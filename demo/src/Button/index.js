import { Button, Icon } from 'jgui'
import React from 'react'
const ButtonGroup = Button.Group;

class ButtonDemo extends React.Component {
    render() {
        return (<div>
            <div>
                <Button type="primary" size="large">大号按钮</Button>
                <Button type="primary">中号按钮(默认)</Button>
                <Button type="primary" size="small">小号按钮</Button>
            </div>

            <div>
                <h4>基本组合</h4>
                <ButtonGroup>
                    <Button type="primary">确&nbsp;定</Button>
                    <Button type="primary">取消</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup>
                <Button disabled>左</Button>
                    <Button disabled>中</Button>
                    <Button disabled>右</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup>
                    <Button type="primary">左</Button>
                    <Button type="ghost">中</Button>
                    <Button type="ghost">中</Button>
                    <Button>右</Button>
                </ButtonGroup>

                <h4>带图标按钮组合</h4>
                <ButtonGroup>
                    <Button type="primary">
                    <Icon type="left" />后退
                    </Button>
                    <Button type="primary">
                    前进<Icon type="right" />
                    </Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                </ButtonGroup>

                <h4>尺寸</h4>
                <ButtonGroup size="large">
                    <Button type="ghost">大</Button>
                    <Button type="ghost">大</Button>
                    <Button type="ghost">大</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup>
                    <Button type="ghost">默认</Button>
                    <Button type="ghost">默认</Button>
                    <Button type="ghost">默认</Button>
                </ButtonGroup>
                <br/>
                <ButtonGroup size="small">
                    <Button type="ghost">小</Button>
                    <Button type="ghost">小</Button>
                    <Button type="ghost">小</Button>
                </ButtonGroup>
            </div>

            <div>
                <Button type="primary">主按钮</Button>
                <Button type="primary" disabled>主按钮(失效)</Button>
                <br />
                <Button>次按钮</Button>
                <Button disabled>次按钮(失效)</Button>
                <br />
                <Button type="ghost">幽灵按钮</Button>
                    <Button type="ghost" disabled>幽灵按钮(失效)</Button>
                <br />
            </div>
        </div>);
    }
}
export default ButtonDemo