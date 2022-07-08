import { Link, Route, Routes } from 'react-router-dom';
import { BooksFeature } from '@test/books/feature';
import { BooksMain } from '@test/books/main';
// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList,
} from '@test/ui';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>

        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/main">BooksMain</Link>
          </NavigationItem>
        </NavigationList>
      </Header>

      <Main>
        <Routes>
          <Route path="/books" element={<BooksFeature />} />
          <Route path="/main" element={<BooksMain />} />
          <Route path="/" />
        </Routes>
      </Main>
    </>
  );
};

export default App;
