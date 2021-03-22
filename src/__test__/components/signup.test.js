import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Signup from '../../components/signup';
import store from '../../redux/store';

describe('Home Component', () => {
  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Signup />
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
          <Signup />
        </BrowserRouter>
      </Provider>,
    );
    const title = getByText('Sign up for free!');
    expect(title).toBeInTheDocument();
  });

  test('renders button of Signup page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>,
    );
    const button = getByText('Login');
    expect(button).toBeInTheDocument();
  });

  test('renders button of Signup page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
      </Provider>,
    );
    const button = getByText('Sign up');
    expect(button).toBeInTheDocument();
  });
});
