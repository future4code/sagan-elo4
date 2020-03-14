import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/AddShoppingCart';

const styles = {
  wrapper: {
    width: '100%',
    justifyContent: 'center',
    padding: '20px',
  },
  image: {
    width: '100%',
    heigth: '300px',
    borderRadius: '15%',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  product: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  descriptionTitle: {
    fontSize: 22,
    margin: '10px 0',
  },
  description: {
    margin: '10px 0',
  },
  price: {
    fontSize: 20,
  },
  priceInstallments: {
    fontSize: 16,
  },
  category: {
    fontWeight: 'bold',
  },
  button: {
    margin: '10px'
  }
};

class Produto extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      productInfo: []
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <Grid className={classes.wrapper} container spacing={24}>
        <Grid className={classes.product} item xs={12} sm={6}>
          <img className={classes.image} src={this.props.item.photos[0]} alt={this.props.item.name} />
          <h3 className={classes.descriptionTitle}>Descrição:</h3>
          <p className={classes.description}>{this.props.item.description}</p>
          <Button variant="contained" color="default" className={classes.button}><CartIcon />Adicionar ao Carrinho</Button>
        </Grid>

        <Grid item xs={12} sm={4}>
          <h2 className={classes.title}>{this.props.item.name}</h2>
          <p className={classes.price}>{this.props.item.price.toString().replace(".", ",")}</p>
          <p className={classes.priceInstallments}>
            {this.props.item.installments + "x de R$ "
              + (this.props.item.price / this.props.item.installments).toFixed(2).replace(".", ",")}
          </p>
          <Button variant="contained" color="default" className={classes.button}><CartIcon />Adicionar ao Carrinho</Button>
          <div><p className={classes.category}>Categoria:</p> {this.props.item.category}</div>
          <p>Meios de Pagamento: {this.props.item.paymentMethod}</p>
        </Grid>
      </Grid>
    );
  }
}

Produto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Produto);