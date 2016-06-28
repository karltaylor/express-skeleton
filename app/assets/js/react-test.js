import React from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
  render() {
    return <div>With React!</div>
  }
}

ReactDOM.render(<MyComponent />, document.getElementById('container'))
