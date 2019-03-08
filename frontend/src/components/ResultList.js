import React from 'react';
import { List } from '@kiwicom/orbit-components';

import { getContext } from './../ContextProvider';
import { ResultItem } from './ResultItem';

export const ResultList = () => {
  const { results } = getContext();
  return (
    <div>
      <List>
        {results.map((result, i) => (
          <ResultItem key={`result-${i}`} result={result} />
        ))}
      </List>
    </div>
  );
};
