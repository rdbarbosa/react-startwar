import React, { Fragment } from 'react';
import starWarsLogo from './assets/images/star-wars-logo.png'

import { SearchInput, SearchResults } from './components'


function App() {
  return (
    <Fragment>
      <img className="main_logo" src={starWarsLogo} alt="Star Wars: React App" />
      <SearchInput />
    </Fragment>
  );
}

export default App;
