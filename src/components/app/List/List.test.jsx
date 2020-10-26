import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const { asFragment } = render(<List
      characters={[{ _id: '1', name: 'Spot' }]}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
