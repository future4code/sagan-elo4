import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';
import CarrinhoDeCompras from './Components/CarrinhoDeCompras'

class App extends React.Component {
  // static.propTypes = {};


  render() {
    return (
      <div className="App">
        <GlobalStyles />

        <CarrinhoDeCompras />
      </div>
    );
  }
};

export default App;
