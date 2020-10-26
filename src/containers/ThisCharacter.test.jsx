import React from 'react';
import { findByTestId, render, screen, waitFor } from '@testing-library/react';
import ThisCharacter from './ThisCharacter';
import { getApiById } from '../services/api';

jest.mock('../services/api.js');

describe('ThisCharacter container', () => {
  it('displays detail of one character', async () => {
    getApiById.mockResolvedValue([
      {
        _id: '1',
        name: 'Spot',
        race: 'dog',
        gender: 'female',
        wikiUrl: 'www.dogwiki.com'
      }
    ]);
    render(<ThisCharacter />);

    const character = await screen.findByTestId('character');
    return waitFor(() => {
      expect(character).not.toBeEmptyDOMElement();
    });
  });
});
