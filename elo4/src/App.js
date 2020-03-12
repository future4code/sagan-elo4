import React from 'react';
// import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import ListagemDeItens from './components/ListagemDeItens/ListagemDeItens.js';

const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/elo4/products';

const App = props => {
  // static.propTypes = {};

  return (
    <div className="App">
      <GlobalStyles />
      <ListagemDeItens url={baseUrl}/>
    </div>
  );
};

export default App;
