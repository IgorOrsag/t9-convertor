import React, { useState } from 'react';
import { Button, InputField } from '@kiwicom/orbit-components';
import { getContext } from './../ContextProvider';
import { setWords } from './../actions';

export const Editor = () => {
  const [code, setCode] = useState('');
  const { results, dispatch } = getContext();

  const handleSubmit = async () => {
    setCode('');
    const words = await setWords(code);
    dispatch(words);
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
    </div>
  );
};
