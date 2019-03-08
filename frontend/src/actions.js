import * as c from './constants';

export const setWords = async () => {
  const response = await fetch('convert', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const body = await response.json();
  return { type: c.SET_WORDS, payload: body.converted };
};
