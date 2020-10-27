import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
