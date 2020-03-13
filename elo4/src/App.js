import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import CadastroItensVenda from './Components/CadastroItensVenda'
import Footer from './Components/Footer';

const App = props => {
  // static.propTypes = {};

  return (
    <div className="App">
      <GlobalStyles />
      <CadastroItensVenda/>
      <Footer/>
    </div>
  );
};

export default App;
