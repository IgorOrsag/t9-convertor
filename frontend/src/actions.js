import * as c from './constants';

export const setWords = () => {
  return { type: c.SET_WORDS, payload: ['word', 'sword', 'cord'] };
};
