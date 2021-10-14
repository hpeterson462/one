import React from 'react';
import { render, cleanup, waitFor, screen, getByTestId, getByText } from '@testing-library/react';
import DetailPage from '../../app/App';
import { MemoryRouter, Route } from 'react-router-dom';
import { getApiById } from '../../../services/api';

jest.mock('../../../services/api.js');

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders character details', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <DetailPage
          characters={[{
            id: '5cd99d4bde30eff6ebccfbbe',
            name: 'Adanel'
          }]}
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays character detail after loading', () => {
    getApiById.mockResolvedValue({
      id: '5cd99d4bde30eff6ebccfbbe',
      name: 'Adanel',
      race: 'Human',
      gender: 'Female',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel'
    });
    render(
      <MemoryRouter initialEntries={['/details/5cd99d4bde30eff6ebccfbbe']}>
        <Route
          path='/details/:id'
          component={DetailPage}
        />
      </MemoryRouter>
    );

    // screen.getByText('Loading...');

    expect(screen.getByTestId('character')).toBe(
      'Adanel'
    );

    return waitFor(() => {
      screen.getByTestId('character').toBe(
        'Adanel');
      // screen.getByText('Adanel');
      // screen.getByText('Human');
      // screen.getByText('Female');
      // screen.getByText('http://lotr.wikia.com//wiki/Adanel');
    });
  });
});
