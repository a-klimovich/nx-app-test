import { render } from '@testing-library/react';

import BooksMain from './books-main';

describe('BooksMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BooksMain />);
    expect(baseElement).toBeTruthy();
  });
});
