import React from 'react';
import { render, screen } from '@testing-library/react';
import GameOfBoggle from './App';

test('renders learn react link', () => {
  render(<GameOfBoggle />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
