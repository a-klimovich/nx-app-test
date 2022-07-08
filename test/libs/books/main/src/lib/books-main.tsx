import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BooksMainProps {}

const StyledBooksMain = styled.div`
  color: pink;
`;

export function BooksMain(props: BooksMainProps) {
  return (
    <StyledBooksMain>
      <h1>Welcome to BooksMain!</h1>
    </StyledBooksMain>
  );
}

export default BooksMain;
