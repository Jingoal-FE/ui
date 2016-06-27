/**
 * Created by rongyao on 16/6/16.
 */
import { Tabs } from 'jgui';
import React from 'react';

const TabPanel = Tabs.Panel;

class TabsDemo extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                    <Tabs>
                        <TabPanel tab="选项一">
                            <div>选项卡1内容</div>
                        </TabPanel>
                        <TabPanel tab="选项二">
                            <div>选项卡2内容</div>
                        </TabPanel>
                        <TabPanel tab="选项三">
                            <div>选项卡3内容</div>
                        </TabPanel>
                    </Tabs>
                </div>

                <br/><br/>
                <div>
                    <Tabs defaultTabKey="3" type="primary">
                        <TabPanel tab="选项一" tabkey="1">
                            <div>type是primary的Tabs。选项卡1内容</div>
                        </TabPanel>
                        <TabPanel tab="选项二" tabkey="2">
                            <div>type是primary的Tabs。选项卡2内容</div>
                        </TabPanel>
                        <TabPanel tab="选项三" tabkey="3">
                            <div>type是primary的Tabs。选项卡3内容</div>
                        </TabPanel>
                    </Tabs>
                </div>

                <br/><br/>
                <div>
                    <Tabs defaultTabKey="2" className="test">
                        <TabPanel tab="选项一" tabkey="1">
                            <div>
                                <h1>选项1</h1>
                                可以通过覆盖原有样式自定义，给Tabs添加className，然后重写样式。Tabs的结构为：
                                <ul>
                                    <li>.jgui-tabs：整个Tabs的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar：Tabs头部的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab：头部其中一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab.jgui-tabs-tab-active：头部被选中的一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content：Tabs内容的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel：Tabs内容的其中一项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel.jgui-tabs-panel-hidden：未显示的选项内容</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel tab="选项二" tabkey="2">
                            <div>
                                <h1>选项2</h1>
                                可以通过覆盖原有样式自定义，给Tabs添加className，然后重写样式。Tabs的结构为：
                                <ul>
                                    <li>.jgui-tabs：整个Tabs的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar：Tabs头部的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab：头部其中一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab.jgui-tabs-tab-active：头部被选中的一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content：Tabs内容的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel：Tabs内容的其中一项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel.jgui-tabs-panel-hidden：未显示的选项内容</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel tab="选项三" tabkey="3">
                            <div>
                                <h1>选项3</h1>
                                可以通过覆盖原有样式自定义，给Tabs添加className，然后重写样式。Tabs的结构为：
                                <ul>
                                    <li>.jgui-tabs：整个Tabs的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar：Tabs头部的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab：头部其中一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-bar .jgui-tabs-tab.jgui-tabs-tab-active：头部被选中的一个选项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content：Tabs内容的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel：Tabs内容的其中一项的样式</li>
                                    <li>.jgui-tabs .jgui-tabs-content .jgui-tabs-panel.jgui-tabs-panel-hidden：未显示的选项内容</li>
                                </ul>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default TabsDemo;