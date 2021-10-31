import { render, screen } from '@testing-library/react';
import App from './App';

test('Should show Installed SDK', () => {
  render(<App />);
  const title = screen.getByText(/Installed SDK/i)
  expect(title).toBeInTheDocument()

})
