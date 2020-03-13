import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Filtro from './Filtro';
import Item from './Item';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const styles = theme => ({
  gridList: {
    width: '100%',
    justifyContent: 'center'
  }
})

class ListagemDeItens extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataItems: [],
      loaded: false,
      filterActive: false,
      max: Infinity,
      min: 0,
      filterCateogry: "none",
      filterSelect: "",
    }
  }

  componentDidMount() {
    this.fetchListItems()
  }

  componentDidUpdate() {
    if (this.state.filterActive) {
      this.fetchListItems()
    }
  }

  fetchListItems = async () => {

    try {

      const response = await axios.get(`${this.props.url}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const items = response.data.products.map(item => {
        if (this.state.filterCateogry === item.category) {
          return item
        } else if (this.state.filterCateogry === "none") {
          return item
        } else {
          return false
        }
      })

      if (this.state.filterSelect === "name") {

        this.setState({
          dataItems: items.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (a.name < b.name) {
              return -1;
            } else {
              return 0;
            }
          }),
          loaded: true,
          filterActive: false
        })
      } else if (this.state.filterSelect === "smallPrice") {
        this.setState({
          dataItems: items.sort((a, b) => a.price - b.price),
          loaded: true,
          filterActive: false
        })
      } else if (this.state.filterSelect === "largePrice") {
        this.setState({
          dataItems: items.sort((b, a) => a.price - b.price),
          loaded: true,
          filterActive: false
        })
      } else {
        this.setState({
          dataItems: items,
          loaded: true,
          filterActive: false
        })
      }

    } catch (err) {
      console.log(err.message)
    }
  }

  filterItemsByPrice = (min, max) => {
    this.setState({
      min: min,
      max: max,
      filterActive: true
    })
  }

  selectCategory = category => {
    this.setState({
      filterCateogry: category,
      filterActive: true
    })
  }


  orderItems = order => {
    this.setState({
      filterSelect: order,
      filterActive: true
    })
  }

  handleClickProduct = item => {
    this.props.showProduct(item)
  }

  render() {

    const { classes } = this.props;

    const list = this.state.dataItems.map((item) => {

      const items = <Item
        productInfo={this.handleClickProduct}
        item={item}
        key={item.id}
        urlImg={item.photos[0]}
        name={item.name}
        price={item.price.toString().replace(".", ",")}
        installments={item.installments + "x de R$ " + (item.price / item.installments).toFixed(2).replace(".", ",")}
      />

      if (Number(item.price) >= this.state.min && Number(item.price) <= this.state.max) {
        return items

      } else if (!this.state.max && this.state.min > 0 && Number(item.price) >= this.state.min) {
        return items

      } else if (!this.state.min && this.state.max < Infinity && Number(item.price) <= this.state.max) {
        return items
      } else {
        return false
      }

    })

    return (
      <div>
        <Filtro minMax={this.filterItemsByPrice} order={this.orderItems} />
        <GridList className={classes.gridList}>
          {list}
        </GridList>
      </div>
    );
  }
}

ListagemDeItens.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(ListagemDeItens);