import React from 'react'
// import axios from 'axios'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import ItemLista from './ItemLista'

const BaseUrl = "https://us-central1-future-apis.cloudfunctions.net/elo4"

class TrocaPaginaCarrinhoComItens extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            produtosNoCarrinho: []
        }
    }


    render(){
        return (
            <div>
                <h1>Carrinho de Compras (0)</h1>
                <hr />
                <span>Produto</span>
                <span>Preço Unitário</span>
                <span>Qtde</span>
                <span>Subtotal</span>
                <hr />
                <ul>
                    <li><ItemLista /></li>
                </ul>
                <h3>Valor Total: R$ 0.00</h3>
            </div>
        )
    }
}


export default TrocaPaginaCarrinhoComItens