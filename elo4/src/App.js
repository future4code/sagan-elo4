import React from 'react';
//import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';

import CadastroItensVenda from './Components/CadastroItensVenda'
import Footer from './Components/Footer';
import Sidenav from './components/Sidenav/Sidenav';
import ListagemDeItens from './components/ListagemDeItens/ListagemDeItens.js';
import Produto from './components/Produto/Produto';

import Grid from '@material-ui/core/Grid';


const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/elo4/products';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 'list',
      item: ''
    }
  }
  // static.propTypes = {};

  handleShowProduct = item => {
    this.setState({
      page: 'product',
      item: item
    })
  }

  render() {

    return (
      <Grid container spacing={24}>
        <GlobalStyles />
        <Grid item xs={12} sm={3}>
          <Sidenav url={baseUrl} choseCategory={this.selectCategory} />
        </Grid>
        <Grid item xs={12} sm={9}>
          {this.state.page === 'list' ?
            <ListagemDeItens url={baseUrl} showProduct={this.handleShowProduct} /> :
            <Produto url={baseUrl} item={this.state.item} />
          }
        </Grid>
      </Grid>
    )
  }
}

export default App;
