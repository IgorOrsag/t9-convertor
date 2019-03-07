import React from 'react';
import { Button, InputField } from '@kiwicom/orbit-components';

export const Editor = () => (
  <div className="editor-container">
    <div>
      <InputField
        // size="small"
        // value=""
        placeholder="Type numeric code"
        // onChange={change}
      />
    </div>
    <div>
      <Button>Convert</Button>
    </div>
  </div>
);
