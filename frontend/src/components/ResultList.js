import React from 'react';
import { List, Loading } from '@kiwicom/orbit-components';

import { getContext } from './../ContextProvider';
import { ResultItem } from './ResultItem';

export const ResultList = () => {
  const {
    state: { results, loading }
  } = getContext();
  return (
    <div className="result-list">
      <Loading loading={loading}>
        <List>
          {results.map((result, i) => (
            <ResultItem key={`result-${i}`} result={result} />
          ))}
        </List>
      </Loading>
    </div>
  );
};
