import React from 'react';
import { findByTestId, render, screen, waitFor } from '@testing-library/react';
import TheseCharacters from './TheseCharacters';
import { getApi } from '../services/api';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/api.js');

describe('TheseCharacters container', () => {
  it('displays a list of characters', async () => {
    getApi.mockResolvedValue([
      {
        _id: '1',
        name: 'Spot',
        race: 'dog',
        gender: 'female',
        wikiUrl: 'www.dogwiki.com'
      },
      {
        _id: '2',
        name: 'Spottie',
        race: 'dog',
        gender: 'male',
        wikiUrl: 'www.dogwikitoo.com'
      }
    ]);
    render(<MemoryRouter><TheseCharacters /></MemoryRouter>);

    const characterList = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
