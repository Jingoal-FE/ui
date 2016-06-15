import React, {PropTypes, Component} from 'react'

export default class App extends Component {
    render() {
        let styles = {
            marginLeft: "120px",
            marginRight: "120px",
            marginTop: "60px"
        };
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}