import 'babel-polyfill'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import TextBox from './src/components/TextBox'
import Button from './src/components/Button'

class App extends React.Component {
   render() {
      return <TextBox ref="myInput" defaultValue="1111"></TextBox>;
   }
}
let root = ReactDOM.render(
  <App/>,
  document.getElementById('wrapper')
);
console.log(root.refs.myInput.getValue());
