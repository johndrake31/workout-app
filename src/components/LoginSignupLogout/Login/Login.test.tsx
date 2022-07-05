import { render, screen, waitFor } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter as Router } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { LOGIN_USER_BY_EMAIL } from './Login';
import { GraphQLError } from 'graphql';

test('Login Did Mount', () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Router>
        <Login />
      </Router>
    </MockedProvider>,
  );
  expect(screen.getByText(/Coffee Time/i)).toBeInTheDocument();
  expect(screen.getByTestId(/login-email-test/i)).toBeInTheDocument();
  expect(screen.getByTestId(/login-password-test/i)).toBeInTheDocument();
  expect(screen.getByTestId(/login-enter-btn-test/i)).toBeInTheDocument();
});

// test('error', async () => {
//   render(
//     <MockedProvider
//       mocks={[
//         {
//           request: {
//             query: LOGIN_USER_BY_EMAIL,
//           },
//           result: {
//             errors: [new GraphQLError('Error')],
//           },
//         },
//       ]}
//       addTypename={false}
//     >
//       <Router>
//         <Login />
//       </Router>
//     </MockedProvider>,
//   );

//   const element = await waitFor(() => screen.findByText(/Error/i));
//   expect(element).toBeInTheDocument();
// });
