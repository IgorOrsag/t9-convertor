import React from 'react';
import { List } from '@kiwicom/orbit-components';

import { getContext } from './../ContextProvider';
import { ResultItem } from './ResultItem';

export const ResultList = () => {
  const {
    state: { results }
  } = getContext();
  return (
    <div className="result-list">
      <List>
        {results.map((result, i) => (
          <ResultItem key={`result-${i}`} result={result} />
        ))}
      </List>
    </div>
  );
};
