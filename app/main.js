import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));