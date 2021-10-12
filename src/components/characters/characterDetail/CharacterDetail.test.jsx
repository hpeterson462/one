import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import DetailPage from '../../pages/detailPage/DetailPage';
import { getApiById } from '../../../services/api';

jest.mock('../../../services/api.js');

describe('CharacterDetail component', () => {
  it('displays a character after loading', () => {
    getApiById.mockResolvedValue({
      _id: '5cd99d4bde30eff6ebccfbbe',
      name: 'Adanel',
      race: 'Human',
      gender: 'Female',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel'
    });
    render(<MemoryRouter initialEntries={['/details/5cd99d4bde30eff6ebccfbbe']}>
      <Route path='/details/:id' component={DetailPage} />
    </MemoryRouter>);

    screen.getByText('Loading...');

    return waitFor(() => {
      screen.getByText('Adanel');
      screen.getByText('Human');
      screen.getByText('Female');
      screen.getByText('http://lotr.wikia.com//wiki/Adanel');
    });

  });
});
