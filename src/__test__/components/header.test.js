import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/header';
import store from '../../redux/store';

describe('Home Component', () => {
  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(hometree).toMatchSnapshot();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    );
    const title = getByText('Course Tracker');
    expect(title).toBeInTheDocument();
  });
});
