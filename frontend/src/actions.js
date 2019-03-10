import * as c from './constants';

export const setWords = async query => {
  const response = await fetch(`convert?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const body = await response.json();
  return { type: c.SET_WORDS, payload: body.converted };
};
