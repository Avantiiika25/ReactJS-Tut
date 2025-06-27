import React from 'react';
import Child3 from './Child3';

function Child2({ message }) {
  return <Child3 message={message} />;
}

export default Child2;
