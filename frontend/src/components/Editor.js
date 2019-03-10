import React, { useState } from 'react';
import { Button, InputField } from '@kiwicom/orbit-components';
import { getContext } from './../ContextProvider';
import { setWords, resetWords } from './../actions';

export const Editor = () => {
  const [code, setCode] = useState('');
  const { results, dispatch } = getContext();

  const handleSubmit = async () => {
    const words = await setWords(code);
    dispatch(words);
  };
  const handleReset = async () => {
    setCode('');
    dispatch(resetWords());
  };
  console.log(results);
  return (
    <div className="editor-container">
      <div>
        <InputField
          value={code}
          placeholder="Type numeric code"
          onChange={e => setCode(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={handleSubmit}>Convert</Button>
      </div>
      {results.length ? (
        <div>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : null}
    </div>
  );
};
