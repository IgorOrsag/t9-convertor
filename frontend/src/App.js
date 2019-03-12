import React from 'react';
import { Alert } from './components/Alert';
import { Editor } from './components/Editor';
import { ResultList } from './components//ResultList';
import { ContextProvider } from './ContextProvider';

import './App.css';

const App = () => (
  <ContextProvider>
    <Alert />
    <Editor />
    <ResultList />
  </ContextProvider>
);

export default App;
