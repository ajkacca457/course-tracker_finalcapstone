import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';
import App from '../App';

describe('App Component', () => {
  it('renders correctly', () => {
    const apptree = TestRenderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      )
      .toJSON();
    expect(apptree).toMatchSnapshot();
  });
});
