import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders main', () => {
  render(<App />);
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});
