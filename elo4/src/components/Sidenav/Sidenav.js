import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    maxWidth: 360,
  },
  wrapper: {
    textAlign: 'center',
    backgroundColor: '#30bfbf',
    padding: '20px 0px',
    margin: '0px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '0px' 
  }
});

class Sidenav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchCategories()
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get(`${this.props.url}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      this.setState({
        categories: response.data.products.sort((a, b) => {
          if (a.category > b.category) {
            return 1;
          } else if (a.category < b.category) {
            return -1;
          } else {
            return 0;
          }
        }),
        loaded: true,
      })

    } catch (err) {
      console.log(err.message)
    }
  }

  render() {
    const { classes } = this.props;

    const listCategories = this.state.categories.map((item, index) => {
      return (
        <ListItem key={index} onClick={() => this.props.choseCategory(item.category)} button>
          <ListItemText inset primary={item.category} />
        </ListItem>
      )
    })

    return (
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Categorias</h2>
        <List component="nav" className={classes.root}>
          {listCategories}
        </List>
      </div>
    )
  }
}

Sidenav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidenav);