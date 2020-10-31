import React from 'react';
import { render, cleanup } from '@testing-library/react';
import List from './List';
import { MemoryRouter } from 'react-router-dom';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const { asFragment } = render(<MemoryRouter><List
      characters={[{ _id: '1', name: 'Spot' }]}
    /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
