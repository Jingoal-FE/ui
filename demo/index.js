import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'
import "./index.scss"

import App from './src/App'
import all from './src/all'
import TextBox from './src/TextBox'
import Button from './src/Button'
import Radio from './src/Radio'
import CheckBox from './src/CheckBox'
import Select from './src/Select'
import Form from './src/Form'
import Modal from './src/Modal'
import Popover from './src/Popover'
import Table from './src/Table'
import Pager from './src/Pager'
import Tree from './src/Tree'
import Uploader from './src/Uploader'
import Image from './src/Image'
import Icon from './src/Icon'
import Calendar from './src/Calendar'

import webConfig from './webConfig';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App} >
            <Route name="all" path="/all" component={all} />
            <Route name="textbox" path="/textbox" component={TextBox} />
            <Route name="button" path="/button" component={Button} />
            <Route name="radio" path="/radio" component={Radio} />
            <Route name="checkbox" path="/checkbox" component={CheckBox} />
            <Route name="select" path="/select" component={Select} />
            <Route name="form" path="/form" component={Form} />
            <Route name="modal" path="/modal" component={Modal} />
            <Route name="popover" path="/popover" component={Popover} />
            <Route name="table" path="/table" component={Table} />
            <Route name="pager" path="/pager" component={Pager} />
            <Route name="tree" path="/tree" component={Tree} />
            <Route name="uploader" path="/uploader" component={Uploader} />
            <Route name="image" path="/image" component={Image} />
            <Route name="icon" path="/icon" component={Icon} />
            <Route name="calendar" path="/calendar" component={Calendar} />
            <Redirect from="*" to="/all" />
        </Route>
    </Router>,
    document.getElementById('wrapper')
);