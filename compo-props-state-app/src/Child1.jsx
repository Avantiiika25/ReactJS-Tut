import React from 'react';
import Child2 from './Child2';

function Child1({ message }) {
  return <Child2 message={message} />;
}

export default Child1;
