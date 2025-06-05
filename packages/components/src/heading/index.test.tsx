import { render, screen } from '@testing-library/react';
import React from 'react';
import { Heading } from './index';

describe('Heading', () => {
  it('renders h1 by default', () => {
    render(<Heading>Hello</Heading>);
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).toHaveTextContent('Hello');
  });

  it('renders the specified heading level', () => {
    render(<Heading rank="h3">Hi</Heading>);
    const element = screen.getByRole('heading', { level: 3 });
    expect(element).toHaveTextContent('Hi');
  });
});
