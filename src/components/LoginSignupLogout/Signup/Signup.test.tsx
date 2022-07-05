import { render, screen } from '@testing-library/react';
import Signup from './Signup';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';

test('Signup Did Mount', () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Router>
        <Signup />
      </Router>
    </MockedProvider>,
  );
  expect(screen.getByText(/Coffee Time/i)).toBeInTheDocument();
});
