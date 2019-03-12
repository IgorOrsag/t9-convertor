import * as c from './constants';

export const setWords = async query => {
  const response = await fetch(`convert?query=${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('API request failed');
  }
  const body = await response.json();
  return { type: c.SET_WORDS, payload: body.textonyms };
};

export const resetWords = () => ({ type: c.SET_WORDS, payload: [] });

export const setError = err => ({ type: c.SET_ERROR, payload: err });
