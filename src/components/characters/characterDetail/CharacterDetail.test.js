import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailPage from '../../app/App';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders character details', () => {
    const { asFragment } = render(<MemoryRouter>
      <DetailPage
        characters={[{
          id: '5cd99d4bde30eff6ebccfbbe',
          name: 'Adanel'
        }]}
      />
    </MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
