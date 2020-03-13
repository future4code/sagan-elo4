import React from 'react';
import axios from 'axios';

import Sidenav from '../Sidenav/Sidenav';
import Filtro from './Filtro';
import Item from './Item';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

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
      filterSelect: ""
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

  render() {

    const list = this.state.dataItems.map((item) => {

      const items = <Item
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
        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Sidenav url={this.props.url} choseCategory={this.selectCategory} />
          </Grid>
          <Grid item xs={18} sm={9}>
            <Filtro minMax={this.filterItemsByPrice} order={this.orderItems} />
            <GridList>
              {list}
            </GridList>
          </Grid>
        </Grid>
    );
  }
}



export default ListagemDeItens;