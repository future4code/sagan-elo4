import React from 'react'
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OrderIcon from '@material-ui/icons/Reorder';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class Filtro extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      min: 0,
      max: 0,
      select: "",
      none: "none",
      name: "name",
      smallPrice: "smallPrice",
      largePrice: "largePrice",
    }
  }

  handleChangeMax = event => {
    this.setState({
      max: event.target.value
    })
  }

  handleChangeMin = event => {
    this.setState({
      min: event.target.value
    })
  }

  handleChangeOrder = event => {
    this.setState({
      select: event.target.value
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div>
          <Input
            onChange={this.handleChangeMin}
            value={this.state.min}
            placeholder="Mínimo"
            className={classes.input}
          />

          <Input
            onChange={this.handleChangeMax}
            value={this.state.max}
            placeholder="Máximo"
            className={classes.input}
          />

          <Button onClick={() => this.props.minMax(this.state.min, this.state.max)} 
          variant="contained" color="default" className={classes.button}>
            Filtrar
        <FilterIcon className={classes.rightIcon} />
          </Button>

        </div>

        <div>
          <Select onChange={this.handleChangeOrder} value={this.state.select}>
            <MenuItem value={this.state.none}>Nenhum</MenuItem>
            <MenuItem value={this.state.name}>Nome</MenuItem>
            <MenuItem value={this.state.smallPrice}>Preço: Menor > Maior</MenuItem>
            <MenuItem value={this.state.largePrice}>Preço: Maior > Menor</MenuItem>
          </Select>

          <Button onClick={() => {this.props.order(this.state.select)}} variant="contained" color="default" className={classes.button}>
            Ordenar
        <OrderIcon className={classes.rightIcon} />
          </Button>

        </div>

      </div>
    );
  }
}

Filtro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filtro);