import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import CartIcon from '@material-ui/icons/ShoppingCart';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: '#30bfbf',
    padding: 0,
    margin: 0
  },
  title: {
    fontSize: '32px',
    color: '#ffa020',
  },
  searchDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    width: '500px',
    height: '30px'
  },
  iconSearch: {
    cursor: 'pointer'
  },
  iconCart: {
    cursor: 'pointer',
    marginRight: '10px'
  }
})


class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Elo4</h1>
        <div className={classes.searchDiv}>
          <input className={classes.search} type="text" onChange={this.handleSearch} value={this.state.search}/>
          <SearchIcon className={classes.iconSearch}/>
        </div>
        <div>
        <Button variant="contained" color="default" className={classes.iconCart}><CartIcon/>Carrinho de Compras</Button>
        <Button variant="contained" color="default" onClick={() => {this.props.newProduct()}}><AddIcon/>Novo Produto</Button>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);