import React, { useState } from 'react';
import { Button, InputField } from '@kiwicom/orbit-components';
import { getContext } from './../ContextProvider';
import { setWords, resetWords, setError, setLoading } from './../actions';

export const Editor = () => {
  const [code, setCode] = useState('');
  const {
    state: { results, loading },
    dispatch
  } = getContext();

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    try {
      const words = await setWords(code);
      dispatch(words);
    } catch ({ message }) {
      dispatch(setError(message));
    }
    dispatch(setLoading(false));
  };
  const handleReset = async () => {
    setCode('');
    dispatch(resetWords());
  };

  return (
    <div className="editor-container">
      <div className="editor-item">
        <InputField
          value={code}
          placeholder="Type numeric code"
          onChange={e => setCode(e.target.value)}
        />
      </div>
      <div className="editor-item">
        <Button disabled={loading} onClick={handleSubmit}>
          Convert
        </Button>
      </div>
      {results.length ? (
        <div className="editor-item">
          <Button disabled={loading} type="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      ) : null}
    </div>
  );
};
