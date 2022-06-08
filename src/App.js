import React from 'react';
import GlobalStyle from './GlobalStyles';
import { Main } from './components/Main';
import { AppDad, Footer } from './style';

class App extends React.Component {
  render() {

    return (
      <AppDad>
        <GlobalStyle />
        <Main />
        <Footer><p>&copy; All rights reserved | 2022</p></Footer>
      </AppDad>
    );
  }
}

export default App;
