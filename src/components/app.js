import React, { Component } from 'react'
import './../styles/app.css'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="header">Hello Webpack!</h1>
      </div>
    );
  }
}

export default App
