import React from 'react';
import { List } from '@kiwicom/orbit-components';
import { ResultItem } from './ResultItem';

export const ResultList = ({ results = ['word'] }) => (
  <div>
    <List>
      {results.map((result, i) => (
        <ResultItem key={`result-${i}`} result={result} />
      ))}
    </List>
  </div>
);
