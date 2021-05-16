import { render, screen } from '@testing-library/react';
import App from './App';

describe("<App/>", () => {
  it('renders learn react link', () => {
    render(<App />);
    const textToFind = screen.getByText(/Getting started with react testing library/i);
    expect(textToFind).toBeInTheDocument();
  });
})

