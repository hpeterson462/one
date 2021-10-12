import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('List component', () => {
  afterEach(() => cleanup());
  it('renders List', () => {
    const { asFragment } = render(<MemoryRouter><CharacterList
      characters={[{ _id: '1', name: 'Spot' }]}
    /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
