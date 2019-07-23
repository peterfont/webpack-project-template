import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Hello extends Component {
  render() {
    return (<h1>Helllo World!</h1>);
  }
}

console.log('template init!');

ReactDOM.render(<Hello />, document.getElementById('app'));