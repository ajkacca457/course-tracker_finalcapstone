import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Easynav from '../../components/easynav';

describe('Navbar Component', () => {
  it('renders correctly', () => {
    const navtree = TestRenderer
      .create(
      /* eslint-disable no-unused-vars */
        <BrowserRouter>
          {' '}
          <Easynav />
          {' '}
        </BrowserRouter>,
      )
      .toJSON();
    /* eslint-enable no-unused-vars */
    expect(navtree).toMatchSnapshot();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Easynav /></BrowserRouter>);
    const link = getByText('Home');
    expect(link).toBeInTheDocument();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Easynav /></BrowserRouter>);
    const link = getByText('Track');
    expect(link).toBeInTheDocument();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Easynav /></BrowserRouter>);
    const link = getByText('Add Course');
    expect(link).toBeInTheDocument();
  });

  test('renders the title text of the Home page', () => {
    const { getByText } = render(<BrowserRouter><Easynav /></BrowserRouter>);
    const link = getByText('Report');
    expect(link).toBeInTheDocument();
  });
});
