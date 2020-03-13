import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import CadastroItensVenda from './Components/CadastroItensVenda'

const App = props => {
  // static.propTypes = {};

  return (
    <div className="App">
      <GlobalStyles />
      <CadastroItensVenda/>
    </div>
  );
};

export default App;
