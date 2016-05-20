import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, Redirect } from 'react-router'

import 'jingoal-ui-react/styles/all.scss'
import App from './App'
import all from './all'
import TextBoxDemo from './TextBoxDemo'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={App} >
            <Route name="all" path="/all" component={all} />
            <Route name="textbox" path="/textbox" component={TextBoxDemo} />
            <Redirect from="*" to="/all" />
        </Route>
    </Router>,
    document.getElementById('wrapper')
);