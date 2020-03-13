import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';

import Header from './components/header';
import CadastroItensVenda from './Components/CadastroItensVenda'
import Footer from './Components/Footer';

import Sidenav from './components/Sidenav/Sidenav';
import ListagemDeItens from './components/ListagemDeItens/ListagemDeItens.js';
import Produto from './components/Produto/Produto';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const baseUrl = 'https://us-central1-future-apis.cloudfunctions.net/elo4/products';

const styles = theme => ({
  grid: {
    padding: '0px',
    margin: '0px'
  },
})


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

    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <GlobalStyles />
        <Grid className={classes.grid} item xs={24} sm={12}>
            <Header/>
        </Grid>
        <Grid  className={classes.grid} item xs={12} sm={3}>
          <Sidenav url={baseUrl} choseCategory={this.selectCategory} />
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={9}>
          {this.state.page === 'list' ?
            <ListagemDeItens url={baseUrl} showProduct={this.handleShowProduct} /> :
            <Produto url={baseUrl} item={this.state.item} />
          }
        </Grid>
      </Grid>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
