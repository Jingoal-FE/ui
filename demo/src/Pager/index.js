<<<<<<< Updated upstream
import React from 'react'
export default class demo extends React.Component {
    render() {

    }
}
=======
/**
 * Created by rongyao on 16/6/4.
 */
import React from 'react';
import { Pager } from 'jgui';

class PagerDemo extends React.Component {
    handleChange = (page) => {
        console.log('from demo page:', page);
    }

    render() {
        return (
            <Pager current={2} total={500} pageSize={20} onChange={this.handleChange}/>
        );
    }
}

export default PagerDemo;
>>>>>>> Stashed changes
