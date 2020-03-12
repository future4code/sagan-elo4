import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartIcon from '@material-ui/icons/AddShoppingCart';

const styles = {
  card: {
    width: 275,
    minWidth: 275,
    margin: 10,
  },
  image: {
    width: '100%',
    height: '250px',
    margin: 0,
  },
  title: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  }
};

function Item(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <img className={classes.image} src={props.urlImg} alt={props.name}/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.price}
        </Typography>
        <Typography className={classes.price} color="textSecondary">
          {props.installments}
        </Typography>
        <Button variant="contained" color="default" className={classes.button}><CartIcon />Adicionar</Button>
      </CardContent>
    </Card>
  );
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);