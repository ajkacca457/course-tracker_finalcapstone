import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Login from '../../components/login';
import store from '../../redux/store';

describe('Home Component', () => {
  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(hometree).toMatchSnapshot();
  });

  test('renders the title text of the Login page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    const title = getByText('Login with email and password');
    expect(title).toBeInTheDocument();
  });

  test('renders button of Login page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    const button = getByText('Login');
    expect(button).toBeInTheDocument();
  });

  test('renders button of Login page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    const button = getByText('Signup');
    expect(button).toBeInTheDocument();
  });
});
