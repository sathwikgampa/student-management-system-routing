import { render, screen } from '@testing-library/react';
import App from './App';

test('renders student dashboard', () => {
  render(<App />);
  const headerElement = screen.getByText(/Student Dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
