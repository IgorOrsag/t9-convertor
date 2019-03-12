import React from 'react';
import { Alert as OrbitAlert } from '@kiwicom/orbit-components';
import { getContext } from './../ContextProvider';

export const Alert = () => {
  const {
    state: { error }
  } = getContext();
  return error && <OrbitAlert type="critical">{error}</OrbitAlert>;
};
