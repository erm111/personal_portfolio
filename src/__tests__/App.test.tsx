import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Mock child components to simplify testing
jest.mock('../components/layout/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('../components/sections/Hero', () => () => <div data-testid="hero" />);
jest.mock('../components/sections/About', () => () => <div data-testid="about" />);
jest.mock('../components/sections/Projects', () => () => <div data-testid="projects" />);
jest.mock('../components/sections/Skills', () => () => <div data-testid="skills" />);
jest.mock('../components/sections/Contact', () => () => <div data-testid="contact" />);
jest.mock('../components/layout/Footer', () => () => <div data-testid="footer" />);

describe('App Component', () => {
  test('renders contact section', () => {
    render(<App />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });
});
