import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Detail from './Detail';

describe('Detail component', () => {
  afterEach(() => cleanup());
  it('renders Detail', () => {
    const { asFragment } = render(<Detail />);
    expect(asFragment()).toMatchSnapshot();
  });
});
