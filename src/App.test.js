import { render, screen } from '@testing-library/react';
import App from './App';

test('check group and names', () => {
  render(<App />);
  const text = screen.getByText(/Group 3/i);
  expect(text).toBeInTheDocument();
});