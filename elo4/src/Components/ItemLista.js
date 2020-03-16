import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const BaseUrl = "https://us-central1-future-apis.cloudfunctions.net/elo4"

const Lista = styled.li `
list-style-type: none;` 

const mockItemProdutoCarrinho = [
    {
        name: "Produto",
        description: "Esse é um produto muito legal!",
        price: 10,
        photos: ["https://picsum.photos/300/200"],
        installments: 3
    },
    
    {
        name: "Produto2",
        description: "Esse é um produto muito bacana!",
        price: 100,
        photos: ["https://picsum.photos/300/200"],
        installments: 6
    },

    {
        name: "Produto3",
        description: "Esse é um produto muito útil!",
        price: 10,
        photos: ["https://picsum.photos/300/200"],
        installments: 3
    }

]

class ItemLista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            produtos: mockItemProdutoCarrinho
        }
    }

    render() {
        return (   
            <div>{this.produtos}</div>
        )
    }
}

export default ItemLista