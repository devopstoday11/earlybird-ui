import React, { Component } from 'react';
import Inputs from './Inputs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" className="App-header">
          <h2>Don't miss out on open source!</h2>
          <h4>Open source projects can feel hard to get involved with. Especially when
          all the good issues are picked up so fast! Don't miss another opportunity
          to contribute again. Subscribe to notifications of new issues on your
          favorite project below!</h4>
          <Inputs/>
      </div>
    );
  }
}

export default App;
