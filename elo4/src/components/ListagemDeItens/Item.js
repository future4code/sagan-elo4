import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    width: 300,
    minWidth: 275,
    margin: 10,
    borderRadius: '15%',
    backgroundColor: '#ffa020',
  },
  image: {
    width: '100%',
    height: '250px',
    margin: 0,
    borderRadius: '15%',
  },
  title: {
    fontSize: 14,
  },
  price: {
    fontSize: 16,
  }
};

class Item extends React.Component {

render() {
  const { classes } = this.props;

  return (
    <Card onClick={() => this.props.productInfo(this.props.item)} className={classes.card}>
      <img className={classes.image} src={this.props.urlImg} alt={this.props.name} />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {this.props.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {this.props.price}
        </Typography>
        <Typography className={classes.price} color="textSecondary">
          {this.props.installments}
        </Typography>
      </CardContent>
    </Card>
  );
}
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);