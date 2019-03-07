import React, { Component } from 'react';
import { Editor } from './Editor';
import { ResultList } from './ResultList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <ResultList />
      </div>
    );
  }
}

export default App;
