import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../components/home';

describe('Home Component', () => {
  it('renders correctly', () => {
    const hometree = TestRenderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
      )
      .toJSON();
    expect(hometree).toMatchSnapshot();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('Using this App you can:');
    expect(title).toBeInTheDocument();
  });

  test('renders the features of the page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('Add new courses to your tracker.');
    expect(title).toBeInTheDocument();
  });

  test('renders the features of the page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('See progress of each courses.');
    expect(title).toBeInTheDocument();
  });

  test('renders the features of the page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('Modify and update your progress of the courses.');
    expect(title).toBeInTheDocument();
  });

  test('renders the features of the page', () => {
    const { getByText } = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('Once you completed the course you can delete it.');
    expect(title).toBeInTheDocument();
  });
});
