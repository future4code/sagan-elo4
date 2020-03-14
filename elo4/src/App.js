import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from './styles/global';

import Header from './Components/header';
import CadastroItensVenda from './Components/CadastroItensVenda';
import Footer from './Components/Footer';

import Sidenav from './Components/Sidenav/Sidenav';
import ListagemDeItens from './Components/ListagemDeItens/ListagemDeItens.js';
import Produto from './Components/Produto/Produto';

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
      screen: '',
      item: ''
    }
  }
  // static.propTypes = {};

  componentDidMount() {
    this.changeScreen()
  }

  handleShowProduct = async item => {
    
    await this.setState({
      page: 'product',
      item: item
    })
    
    this.changeScreen()
  }

  handleNewProduct = async () => {

    console.log("Funcionando")
    await this.setState({
      page: 'newProduct'
    })

    this.changeScreen()
  }

  changeScreen = () => {
    if (this.state.page === 'list') {

      this.setState({
        screen: <ListagemDeItens url={baseUrl} showProduct={this.handleShowProduct}/>
      })

    } else if (this.state.page === 'product') {

      this.setState({
        screen: <Produto url={baseUrl} item={this.state.item} />
      })

    } else if (this.state.page === 'newProduct')

    this.setState({
      screen: <CadastroItensVenda />
    })
  }

  render() {

    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
        <GlobalStyles />
        <Grid className={classes.grid} item xs={12} sm={12}>
          <Header  newProduct={this.handleNewProduct} />
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={3}>
          <Sidenav url={baseUrl} choseCategory={this.selectCategory} />
        </Grid>
        <Grid className={classes.grid} item xs={12} sm={9}>
          {this.state.screen}
        </Grid>
      </Grid>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
