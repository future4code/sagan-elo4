import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';

const App = props => {
  // static.propTypes = {};

  return (
    <div className="App">
      <GlobalStyles />

      <h1>Hello world</h1>
    </div>
  );
};

export default App;
