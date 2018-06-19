import React from 'react';
import { render } from 'react-testing-library';
import Hello from './hello';

test('Test hello component', () => {
  const { getByText } = render(<Hello />);
  const domElement = getByText('Hello World');
  expect(domElement).toBeTruthy();
  expect(domElement.nodeName).toEqual('H1');
});

