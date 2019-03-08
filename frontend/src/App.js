import React from 'react';
import { Editor } from './components/Editor';
import { ResultList } from './components//ResultList';
import { ContextProvider } from './ContextProvider';

import './App.css';

const App = () => (
  <ContextProvider>
    <Editor />
    <ResultList />
  </ContextProvider>
);

export default App;
