import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';
import { getApi } from '../../../services/api';

jest.mock('../../../services/api.js');

describe('CharacterList component', () => {
  // afterEach(() => cleanup());
  // it('renders a character list', () => {
  //   const { asFragment } = render(<MemoryRouter><CharacterList
  //     characters={[{ _id: '5cd99d4bde30eff6ebccfbbe', name: 'Adanel' }]}
  //   /></MemoryRouter>);
  //   expect(asFragment()).toMatchSnapshot();
  // });

  it('displays a list of characters after loading', async () => {
    getApi.mockResolvedValue([
      {
        id: '5cd99d4bde30eff6ebccfbbe',
        name: 'Adanel'
      }
    ]);
    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
