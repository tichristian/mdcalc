import React, { Component } from 'react';
import { MDTable, MDResult, MDHeader } from '../common';

class App extends Component {

  render () {
    return (
      <div className="App">
      <MDHeader />
      <MDTable />
      <MDResult />
      </div>
    );
  }
}


export default App;
